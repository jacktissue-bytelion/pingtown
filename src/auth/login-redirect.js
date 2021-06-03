/* Nextjs Auth0 File */

import React, { useEffect } from 'react';
import Router from 'next/router';

import Layout from '@/components/layout';
import createLoginUrl from '@/lib/url-helper';

const RedirectToLogin = () => {
  useEffect(() => {
    window.location.assign(createLoginUrl(Router.pathname));
  }, []);

  return (
    <Layout>
      <>Signing you in...</>
    </Layout>
  );
};

export default RedirectToLogin;
