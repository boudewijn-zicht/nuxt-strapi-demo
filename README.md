# Steps taken

- On platform.sh created a new empty project
- `mkdir demo && cd demo`
- Add `.platform/routes.yaml`
- Add `.platform/services.yaml`
- Follow the Strapi sub-steps
- Follow the Nuxt sub-steps
- `git init` ... hele riedeltje om het in een github repo te krijgen (misschien niet naar github... weet nog niet)
- `platform project:set-remote <PLATFORMSH PROJECT CODE>`


## Strapi

Loosely based on https://github.com/platformsh-templates/gatsby-strapi/blob/master/strapi/build.sh

- `RWD__DOCKER_ZICHT_NL__NODE_NPM=12-6.x npx create-strapi-app strapi --quickstart --no-run`
- `cd strapi`
- `echo "RWD__DOCKER_ZICHT_NL__NODE_NPM=12-6.x" >> .env`
- `npm install pg`
- `npm install platformsh-config`
- Replace `config/database.js`
- Replace `config/server.js`
- `npm run strapi install graphql`
- Add `public/index.html`
- Add `.platform.app.yaml`

## Nuxt

- `RWD__DOCKER_ZICHT_NL__NODE_NPM=12-6.x npm init nuxt-app nuxt`
    - For 'version control' choose 'none' because everything is already in a git repo
- `cd nuxt`
- `echo "RWD__DOCKER_ZICHT_NL__NODE_NPM=12-6.x" >> .env`
- Add `.platform.app.yaml`
- Add and configure Apollo (details omitted here)
