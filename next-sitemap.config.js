const config = {
  siteUrl: 'https://www.trustmtrans.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/dashboard/admin/',
          '/dashboard/admin/requests/',
          '/dashboard/admin/users/',
          '/dashboard/quote/special-pay/',
        ],
      },
    ],
    additionalSitemaps: [
      'https://www.trustmtrans.com/sitemap.xml',
    ],
  },
};

export default config;
