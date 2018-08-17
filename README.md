# My React Bootstrap

Generated (latest 9.8.2018) with React + Typescript using react-scripts-ts: `create-react-app my-app --scripts-version=react-scripts-ts`.

## Requirements

Requires Node >= 8, yarn installed globally.

## How to install

1) Clone & run `yarn`
2) Start the app with: `yarn start`

## Building and running this using Docker

You must have Docker or Docker Toolbox installed. Then you can run `./build.sh` to build the image from the latest tag. If you want to build your latest commit you must tag it with the appropriate version eg. `git tag 1.5.1`. This image will be available in your local Docker registry.

To run the image then simply run `./run.sh`. It will grep the top-most image in the `docker images` list and expose it to the currently specified local port (9666 as of now).

There's a set of utility functions to help our with managing the images that you can load to your terminal session with: `. functions.sh`. Currently there's the following methods:

* `rm-containers` will first stop all the running containers of this image and then remove them.

* `rm-images` will do the same thing as `rm-containers` but also delete all the images of this namespace and image name.

## Git commands

* `git tag -l` will list all the tags.
* `git push origin <local-branch>:<target-branch> --follow-tags` will push the branch with tags.
* `git tag --delete <tagname>` will delete the tag locally.
* `git push origin :<tagname>` will delete the tag in the remote.