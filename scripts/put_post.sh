#!/bin/bash

# Put post
namespace="28eee0cb9657457797ba8458a8359e55"
hash_key=$(uuidgen)
wrangler kv:key put -p --namespace-id=$namespace "$hash_key" "$1"

# Update post_keys
current_keys=$(wrangler kv:key get --namespace-id=$namespace "post_keys")
current_keys+=",$hash_key"
wrangler kv:key put --namespace-id=$namespace "post_keys" "$current_keys"
