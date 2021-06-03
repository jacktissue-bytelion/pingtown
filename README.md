# Bytelion's Nextjs Boilerplate

* [Nextjs](https://nextjs.org/) [(Docs)](https://nextjs.org/docs/getting-started): React framework for hybrid static & server rendering
* [React](https://reactjs.org/) [(Docs)](https://reactjs.org/docs/getting-started.html): JavaScript library for building user interfaces
* [Prisma](https://www.prisma.io/) [(Docs)](https://www.prisma.io/docs/): Open-source database toolkit with an auto-generated query builder
* [Material UI](https://material-ui.com/) [(Docs)](https://material-ui.com/getting-started/installation/): Standardized React component library
* [Auth0](https://github.com/auth0/nextjs-auth0): Authentication service with nextjs support



## Getting Started

Once you've downloaded this repo into your project folder, dive into your project's terminal and enter the following:

```
yarn install
vercel
vercel env pull
yarn custom
```

Afterwards your project will begin running on `http://localhost:8080`.



## Project Structure

* `components`: All custom components to use within pages
* `contexts`: [Context Providers](https://reactjs.org/docs/context.html) for passing data throughout the app
* `data`: [SWR](https://swr.vercel.app/) functions for grabbing data from the api
* `hooks`: Repeatedly used helper functions
* `icons`: SVGs availabled through [next-svgr](https://www.npmjs.com/package/next-svgr)
* `lib`: Vendor files
* `pages`: Automatically routed pages within the app



## Prisma

### Prisma Studio

Prisma comes bundled with an admin ui to edit the database. Just open up your terminal and enter the following:

```
npx prisma studio
```

### Using PostgreSQL

* Set `DATABASE_URL` environment variable with a `postgresql://` URL ([Related Prisma docs](https://www.prisma.io/docs/reference/database-connectors/postgresql))

### Making schema/database changes

After changing the schema file...

https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate

* Manually set the `DATABASE_URL` environment variable in your terminal
* Run `npm run migrate` - this executes the following commands for you:
  * `npx prisma generate` to generate the latest Prisma client
  * `npx prisma migrate save --experimental` to create the migration files
  * `npx prisma migrate up --experimental` to apply the migration to your database



## Auth0 Authentication

Authentication is managed through the [nextjs-auth0](https://github.com/auth0/nextjs-auth0) library which follows the [best practices](https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/) outlined by the Auth0 team.

### withAuth Flow
![withAuth web sequence diagram](https://cdn.auth0.com/blog/nextjs-authn-auth0/static-site-authentication.png)

### Secured API Flow
![secure api web sequence diagram](https://cdn.auth0.com/blog/nextjs-authn-auth0/static-site-api-calls.png)



## Algolia

To add your own Algolia settings you'll need to edit the following variables in your Vercel project's settings and add them to `next.config.js`:

* `algoliaId`: API Keys >> Algolia _Application ID_,
* `algoliaKey`: API Keys >> Algolia _Search-Only API Key_,
* `algoliaIndex`: Indices >> Name of the Algolia index you wish to search



## Optional Hygen Scaffolding

[Hygen](https://www.hygen.io/templates/) provides a quick and easy way to scaffold components into your webapp without the manual digging. The following Hygen cli commands are currently available:

```
hygen component --name creative-name new
hygen page --name about new
```