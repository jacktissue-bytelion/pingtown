/* Nextjs Auth0 File */
/**
 * Manage Auth0 session
 * Disable triggering ESLint rules for a vendor-only file
 * TO-DO: bring this file up to project code standards
 */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

import auth0 from '@/lib/auth0';
import { fetchUser } from '@/lib/user';
import createLoginUrl from '@/lib/url-helper';
import RedirectToLogin from '@/auth/login-redirect';

export default function withAuth(InnerComponent) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      if (!ctx.req) {
        const user = await fetchUser();
        return {
          user,
        };
      }

      const session = await auth0.getSession(ctx.req, ctx.res);
      if (!session || !session.user) {
        if (!process.env.auth0BypassLogin) {
          ctx.res.writeHead(302, {
            Location: createLoginUrl(ctx.req.url),
          });
          ctx.res.end();
        }

        let currentTime = new Date();
        currentTime = currentTime.getTime();

        return {
          session: {
            user: {
              name: 'Exception',
            },
            createdAt: currentTime,
          },
        };
      }

      return {
        user: session.user,
      };
    }

    constructor(props) {
      super(props);
    }

    render() {
      if (!this.props.user && !process.env.auth0BypassLogin) {
        return <RedirectToLogin />;
      }

      return <InnerComponent {...this.props} user={this.props.user} />;
    }
  };
}
