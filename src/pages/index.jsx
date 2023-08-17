import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Hero from 'components/pages/home/hero';
import Management from 'components/pages/home/management';
import Cooperate from 'components/pages/home/cooperate';

const HomePage = () => (
  <Layout>
    <Hero />
    <Management />
    <Cooperate />
  </Layout>
);

export default HomePage;

/* eslint-disable-next-line react/prop-types */
export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
