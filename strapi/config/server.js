module.exports = ({ env }) => ({

  // Basic server settings.
  //
  // See https://strapi.io/documentation/v3.x/getting-started/deployment.html#application-configuration
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // Admin user JWT configuration.
  //
  // See https://strapi.io/documentation/v3.x/plugins/users-permissions.html#jwt-configuration
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7de51f0a28084ec69915896da4271ac6'),
    },
  },

  // GraphQL endpoint configuration.
  //
  // See https://strapi.io/documentation/v3.x/plugins/graphql.html#usage
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    }
  },
});
