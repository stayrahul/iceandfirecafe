#!/bin/bash
for QUERY in "stir-fry-noodles" "veggie-burger" "milk-tea" "gulab-jamun" "rasgulla" "indian-sweets"; do
  URL="https://unsplash.com/s/photos/$QUERY"
  echo "$QUERY:"
  curl -s "$URL" | grep -o 'photo-[0-9a-fA-F-]*' | sort | uniq | head -n 3
done
