#!/bin/bash
for QUERY in "rasgulla" "fried-dumplings"; do
  echo "Checking $QUERY..."
  IDS=$(curl -s "https://unsplash.com/s/photos/$QUERY" | grep -o 'photo-[0-9a-fA-F-]*' | sort | uniq | head -n 10)
  for ID in $IDS; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/$ID")
    if [ "$STATUS" = "200" ]; then
      echo "GOOD: $ID"
      break
    fi
  done
done
