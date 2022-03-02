#!/bin/bash

# Put post
namespace="travismfrank"
hash_key=$(uuidgen)
npx wrangler kv:key put "$hash_key" --path "$1" --binding $namespace -l

# Update post_keys
current_keys=$(npx wrangler kv:key get "post_keys" --binding $namespace -l)
current_keys+=",$hash_key"
npx wrangler kv:key put "post_keys" "$current_keys" --binding $namespace -l
