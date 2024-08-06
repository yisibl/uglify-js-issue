# uglify-js-issue

## What's the problem?

[uglify-js](https://github.com/mishoo/UglifyJS/releases/tag/v3.19.0) `3.19.0` causes an issue with compression losing code, the `.init=function()` function is missing from `build_3_19/day.js`.

This does not happen in [version 3.18.0](https://github.com/mishoo/UglifyJS/releases/tag/v3.18.0), compare the difference between the files in `build_3_18/day.js` and `build_3_19/day.js`.

## Steps

```bash
npm i
npm run build
```
