import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://guestpostplatform.com';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Guest Post Platform',
      url: SITE_URL,
      description: 'A guest post marketplace and managed blogger outreach service for relevant editorial placements.',
      telephone: '+923025820230',
      founder: {
        '@type': 'Person',
        name: 'Kamran',
        sameAs: ['https://www.linkedin.com/in/kamranofficialseo/'],
      },
      sameAs: ['https://www.linkedin.com/in/kamranofficialseo/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Guest Post Platform',
      description: 'Searchable guest post marketplace, blogger outreach and link insertion services with relevant publisher placements.',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

const SiteSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  </Helmet>
);

export default SiteSchema;
