require('dotenv').config({ path: '.env' });

const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

/*
 * Assign branchs-specific variables at build time
 */

const gitBranchCircle = process.env.CIRCLE_BRANCH;
const gitBranchVercel = process.env.VERCEL_GITHUB_COMMIT_REF;
const gitBranch = gitBranchCircle || gitBranchVercel;
const site = 'nextjs-boilerplate';
let baseDomain;
let bypassLogin;

// Assign base domain based on git branch
switch (gitBranch) {
  case 'master':
    baseDomain = `https://www.${site}`;
    break;
  case 'develop':
    baseDomain = `https://dev.${site}`;
    break;
  case 'test':
    baseDomain = `https://test.${site}`;
    break;
  default:
    // If we're overriding with environment variable, use that
    // (this is for pushing any branch as production in Vercel)
    if (process.env.CALLBACK_DOMAIN) {
      baseDomain = process.env.CALLBACK_DOMAIN;
    } else if (process.env.VERCEL_URL) {
      // Otherwise use the Vercel URL
      baseDomain = `https://${process.env.VERCEL_URL}`;
      // Bypass login to prevent login redirect loop on Vercel URL
      bypassLogin = true;
    } else {
      // Or it's just a local environment
      baseDomain = 'http://localhost:3000';
    }
}

// Auth0 Callback URL
const callbackUrl = `${baseDomain}/api/callback`;

module.exports = withPlugins([[withSvgr]], {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  env: {
    // Auth0
    auth0BypassLogin: bypassLogin,
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0LoginException: process.env.AUTH0_LOGIN_EXCEPTION,
    auth0PostLogoutRedirectUri: baseDomain,
    auth0RedirectUri: callbackUrl,
    auth0Scope: process.env.AUTH0_SCOPE || 'openid profile',
    auth0SessionCookieLife: process.env.AUTH0_SESSION_LIFETIME || 7200, // 2 hours
    auth0SessionCookieSecret: process.env.AUTH0_SESSION_COOKIE_SECRET,
  },
  poweredByHeader: false,
  trailingSlash: false,
});
