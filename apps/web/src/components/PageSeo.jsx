import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://guestpostplatform.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/guest-post-seo-growth.webp`;

const PageSeo = ({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  imageAlt = 'Guest Post Platform guest posting and publisher outreach services',
  schema,
  noindex = false,
}) => {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  const canonical = `${SITE_URL}${normalizedPath}`;
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex
          ? 'noindex,follow'
          : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Guest Post Platform" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default PageSeo;
