# jellyfin-tizen for TizenBrew
Automated process of jellyfin-tizen packaging &amp; publishing to npm registry with a bit of [secret sauce](https://github.com/GlenLowland/jellyfin-tizen-npm-publish/blob/main/tizen-adapter.js).

The [adapter](https://github.com/GlenLowland/jellyfin-tizen-npm-publish/blob/main/tizen-adapter.js) is required for `TizenBrew` because when application is loaded through it, it loses access to all Tizen APIs :/

NPM package ready to be used is: [@glenlowland/jellyfin-tizen](https://www.npmjs.com/package/@glenlowland/jellyfin-tizen)

Add it as a module to your `TizenBrew` and enjoy!

## How to use
1. Install [TizenBrew](https://github.com/reisxd/TizenBrew). Make sure you're running TizenBrew v.1.3.0 or higher.
2. Launch TizenBrew on your TV.
3. Press GREEN button on your remote to add a module.
4. Type in `@glenlowland/jellyfin-tizen`.
5. Press GREEN button again to go to TizenBrew modules list.
6. Launch Jellyfin Tizen from there.

## Versioning

Package versions are just autoincremented for now as `jellyfin-tizen` repo doesn't increment them.
