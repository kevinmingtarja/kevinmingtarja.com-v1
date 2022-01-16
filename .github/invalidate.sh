#!/bin/bash

cd out

# Find all html files in the current directory
arr=($(find . -name "*.html"))
i=0

# Remove trailing dot
for file in "${arr[@]}"
do
    arr[$i]=${arr[$i]:1}
    i=$((i + 1))
done

declare -p arr

# Invalidate the html files
aws cloudfront create-invalidation --distribution-id E26QI20L1ODVTP --paths "${arr[@]}"
