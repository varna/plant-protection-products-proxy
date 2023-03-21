import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  routeRules: {
    '/**': { proxy: 'https://agrobase.app/**' },
    '/': {
      redirect: { to: 'https://agrobase.app/lithuania/', statusCode: 200 },
    },
    '/lithuania': {
      redirect: { to: 'https://agrobase.app/lithuania/', statusCode: 200 },
    },
    // '/**': {
    //   redirect: { to: 'https://agrobase.app/lithuania/**', statusCode: 200 },
    // },
  },
});
