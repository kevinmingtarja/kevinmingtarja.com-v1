function handler(event) {
  var response = event.response
  var headers = response.headers

  var isJs =
    headers["content-type"] &&
    headers["content-type"].value.includes("javascript")
  var isCss =
    headers["content-type"] && headers["content-type"].value.includes("css")
  var isImage =
    headers["content-type"] && headers["content-type"].value.includes("image")

  headers["cloudfront-functions"] = { value: "static-assets-caching" }

  // Set the cache-control header if content is js/css/image
  if (isJs || isCss || isImage) {
    headers["cache-control"] = { value: "public, max-age=31536000, immutable" }
  } else {
    headers["cache-control"] = { value: "public, max-age=0, must-revalidate" }
  }

  // Return response to viewers
  return response
}
