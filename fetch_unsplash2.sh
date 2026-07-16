#!/bin/bash
for QUERY in "spicy-dumplings" "steamed-dumplings"; do
  URL="https://unsplash.com/s/photos/$QUERY"
  echo "$QUERY:"
  curl -s "$URL" | grep -o 'photo-[0-9a-fA-F-]*' | sort | uniq | head -n 3
done
