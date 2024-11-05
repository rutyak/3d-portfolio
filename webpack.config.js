module.exports = {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          enforce: 'pre',
          use: [
            {
              loader: 'source-map-loader',
              options: {
                filterSourceMappingUrl: (url, resourcePath) => {
                  return (
                    !/node_modules/.test(resourcePath) || !/vision_bundle\.mjs$/.test(resourcePath)
                  );
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
  