const fs = require('fs');

// Access-Control-Allow-Method: POST, GET, OPTIONS
const content = `/* https://nuxt3-stackblitz-default.netlify.app/app/:splat 200!`;

console.log('Hotfix: _redirects');
fs.writeFile('./dist/_redirects', content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
