# iiost: Ignitial.io service

## Work with the repository

The following _npm run_ targets are available:  
- _client:serve_: serves client source code through webpack dev server
- _client:build_: builds service client source code (using webpack)
- _server:start_: starts service server side
- _dev:standalone_: runs service without Docker container
- _dev:start_: starts production service container (uses local source code, not
  image's one)
- _dev:stop_: stops and cleans up development service container
- _prod:start_: starts production service container
- _prod:stop_: stops and cleans up production service container
- _docker:publish:private_: publishes Docker image to an eventually private Docker registry (_registry.ignitial.io_
  is private: you must change this, unless we gave you an access to it)  
- _docker:publish:public_: publishes Docker image to Docker Hub registry (_ignitial/_
  means that this uses _ignitial_: you must change this, unless we gave you an access to it)

## Develop

Add server files in the _server_ folder and client ones in _src_.

You can add any dependency thanks to _npm_. The only constraint is to have
dependencies that work with webpack, if used client side.

## Testing

In the coming versions it will be possible to test service within a web app context
thanks to _@ignitial/iios-app-client_ and _@ignitial/iios-app-server_ libs.
