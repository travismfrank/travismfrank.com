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
