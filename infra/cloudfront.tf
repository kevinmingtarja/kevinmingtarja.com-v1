resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "cloudfront origin access identity"
}

resource "aws_cloudfront_function" "cache_function" {
  name    = "assets-caching"
  runtime = "cloudfront-js-1.0"
  comment = "Adds a Cache-Control header to viewer responses"
  publish = true
  code    = file("${path.module}/cacheFunction.js")
}

resource "aws_cloudfront_distribution" "cloudfront" {
  origin {
    domain_name = aws_s3_bucket.bucket.bucket_regional_domain_name # Regional domain name is needed to prevent redirection issue
    origin_id   = "s3_origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  default_root_object = "index.html"

  custom_error_response {
    error_caching_min_ttl = 60
    error_code = 404
    response_code = 404
    response_page_path = "/404.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3_origin"
    compress         = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"

    min_ttl     = 0
    default_ttl = 43200    # 12 hours
    max_ttl     = 31536000 # 1 year

    function_association {
      event_type   = "viewer-response"
      function_arn = aws_cloudfront_function.cache_function.arn
    }
  }

  ordered_cache_behavior {
    path_pattern     = "/fonts/*"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3_origin"
    compress         = false

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"

    min_ttl     = 0
    default_ttl = 259200   # 3 days
    max_ttl     = 31536000 # 1 year

    function_association {
      event_type   = "viewer-response"
      function_arn = aws_cloudfront_function.cache_function.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}