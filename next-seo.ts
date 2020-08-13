import { DefaultSeoProps } from 'next-seo/lib/types';

const config: DefaultSeoProps = {
  titleTemplate: '%s | daily.dev',
  openGraph: {
    type: 'website',
    url: 'https://daily.dev',
    site_name: 'daily.dev',
  },
  twitter: {
    site: '@dailydotdev',
    cardType: 'summary_large_image',
  },
};

export default config;
