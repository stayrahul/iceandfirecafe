#!/bin/bash
for QUERY in "black-forest-cake" "white-cake" "chocolate-cake" "strawberry-cake" "birthday-cake" "barfi" "jalebi"; do
  URL="https://unsplash.com/s/photos/$QUERY"
  echo "$QUERY:"
  curl -s "$URL" | grep -o 'photo-[0-9a-fA-F-]*' | sort | uniq | head -n 2
done
