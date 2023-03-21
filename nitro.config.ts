import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  routeRules: {
    '/**': { proxy: 'https://agrobase.app/lithuania' },
  },
});
