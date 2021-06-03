/* Nextjs Auth0 File */

import { initAuth0 } from '@auth0/nextjs-auth0';

// Env variables are set in ./next.config.js
// TODO: Get proper uri values for localhost
export default initAuth0({
  clientID: process.env.auth0ClientId,
  clientSecret: process.env.auth0ClientSecret,
  // The secret used to encrypt the cookie.
  secret: process.env.auth0SessionCookieSecret,
  baseURL: 'http://localhost:8080/',
  issuerBaseURL: `https://${process.env.auth0Domain}`,
  routes: {
    callback: '/api/callback',
    postLogoutRedirect: '/',
  },
});
