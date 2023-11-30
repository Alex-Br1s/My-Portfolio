/** @type {import('next').NextConfig} */
const nextConfig = {}
  

module.exports = {
    // Otras configuraciones...
    // Puede haber otras configuraciones aquí
  
    async headers() {
      return [
        {
          source: '/(.*?)',
          headers: [
            {
              key: 'link',
              value: '<link rel="png" href="./public/android-chrome-512x512.png" />',
            },
          ],
        },
      ];
    },
  };