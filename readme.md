# travismfrank
Static frontend of travismfrank.com.

## Startup
Install dependencies

```zsh
npm i
```

Run dev server

```zsh
npm run dev
```

Dev server at localhost:3000

## Images
Images are stored in `src/assets/images`, including originals and resized versions at standard resolutions: 480, 720, 1080, and 3840.  To generate resized versions of an image, place the image in `src/assets/images/to_convert` and run

```zsh
node scripts/convert_images.js
```

## Posts
Posts are stored in Cloudflare's distributed [KV store](https://www.cloudflare.com/products/workers-kv/). To put a post in the KV store, run

```zsh
scripts/put_post.sh $PATH_TO_MARKDOWN_DOC
```
