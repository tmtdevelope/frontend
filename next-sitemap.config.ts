module.exports = {
  siteUrl: 'https://www.trustmtrans.com', 
  generateRobotsTxt: true, 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.trustmtrans.com/sitemap.xml',
    ],
  },
};