import React from 'react';
import Layout from '@/components/layout';
import withAuth from '@/auth/with-auth';
import useUsers from '@/data/users';

const Home = () => {
  const { users } = useUsers();

  return (
    <Layout title="Home">
      <p style={{
        wordBreak: 'break-all',
      }}
      >
        { JSON.stringify(users) }
      </p>
      <p>Home</p>
    </Layout>
  );
};

export default withAuth(Home);
