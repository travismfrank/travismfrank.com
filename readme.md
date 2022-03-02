# travismfrank
Monorepo of travismfrank.com, hosted on [Cloudflare Pages](https://developers.cloudflare.com/pages/). Static frontend in `src`, API routes in `functions`.

## Startup
Install dependencies

```zsh
yarn install
```

Run dev server (static assets only)

```zsh
npm run dev
```

Dev server at localhost:3000

Build and preview (static assets and dynamic backend)

```zsh
npm run build && npm run preview
```

Preview server at localhost:8788

## Images
Images are stored in `src/assets/images`, including originals and resized versions at standard resolutions: 480, 720, 1080, and 3840.  To generate resized versions of an image, place the image in `src/assets/images/to_convert` and run

```zsh
node scripts/convert_images.js
```

Don't forget to move the images back to `src/assets/images`!

## Posts
Posts are stored in Cloudflare's distributed [KV store](https://www.cloudflare.com/products/workers-kv/). When previewing locally, a [Miniflare](https://miniflare.dev/) KV store is used instead (`.mf/kv/travismfrank`).

### Local KV
To put a post in the local KV store, run

```zsh
scripts/put_post_local.sh $PATH_TO_MARKDOWN_DOC
```

### Prod & Preview KV
To put a post in the prod/preview KV store, run

```zsh
scripts/put_post.sh $PATH_TO_MARKDOWN_DOC
```
