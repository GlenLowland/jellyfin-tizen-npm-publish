# jellyfin-tizen NPM autopublish
Automated process of jellyfin-tizen packaging &amp; publishing to npm registry with a bit of [secret sauce](https://github.com/GlenLowland/jellyfin-tizen-npm-publish/blob/main/tizen-adapter.js).

The [adapter](https://github.com/GlenLowland/jellyfin-tizen-npm-publish/blob/main/tizen-adapter.js) is required for `TizenBrew` because when application is loaded through it, it loses access to all Tizen APIs :/

NPM package ready to be used is: [@glenlowland/jellyfin-tizen](https://www.npmjs.com/package/@glenlowland/jellyfin-tizen)

Add it as a module to your `TizenBrew` and enjoy!

## Versioning

Package versions are just autoincremented for now as `jellyfin-tizen` repo doesn't increment them.

## Known issues
This app is built specifically to be used in [TizenBrew](https://github.com/reisxd/TizenBrew) as a brew application.

The drawback of this is that it requires your jellyfin server to be accessible through HTTPS and to have a valid SSL certificate (see [related issue](https://github.com/GlenLowland/jellyfin-tizen-npm-publish/issues/1) for the full context).

This can be achieved using a reverse proxy with LetsEncrypt certificate support, such as `nginx-proxy-manager`.

To get the idea of it and see one way to run it on your homeserver you can check out [this](https://www.youtube.com/watch?v=qlcVx-k-02E) video.
