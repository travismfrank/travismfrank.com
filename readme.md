# travismfrank
Static site travismfrank.com, hosted on [Cloudflare Pages](https://developers.cloudflare.com/pages/).

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

Build and preview

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
Posts are stored in `src/assets/posts`, with post-specific images stored in `src/assets/images/posts`.

### Add a Post
To copy a post to the appropriate directory, run

```zsh
scripts/put_post.sh $PATH_TO_MARKDOWN_DOC
```

### Add a Post Image
To copy an image to the appropriate directory, run

```zsh
scripts/put_image.sh $PATH_TO_POST_IMAGE
```
