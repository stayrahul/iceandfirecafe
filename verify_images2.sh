#!/bin/bash
QUERY="indian-sweets"
echo "Checking $QUERY..."
IDS=$(curl -s "https://unsplash.com/s/photos/$QUERY" | grep -o 'photo-[0-9a-fA-F-]*' | sort | uniq | head -n 15)
for ID in $IDS; do
  if [ "$ID" != "photo-1593701461250-d7b22dfd3a77" ]; then
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://images.unsplash.com/$ID")
    if [ "$STATUS" = "200" ]; then
      echo "GOOD: $ID"
      break
    fi
  fi
done
