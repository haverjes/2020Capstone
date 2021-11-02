
# API Design and development

Currently being designed using OpenAPIv3.  By doing this, we can quickly generate documentation and even a great deal of the client and server-side code.  

The simplest way to incorporate a generated API client in javascript is through a nodeJS package, and the best way to do that without actually publishing on NPM is by developing and storing the API on a separate github repo, [haverjes/breakdownAPI](https://github.com/haverjes/BreakdownAPI)

Instructions on how to use the API client are available in the markdown of the repo.

As of 2/4, the final client might utilize a simpler (to use) TypeScript api client instead of the npm'd javascript package.
