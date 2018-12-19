module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "babel-plugin-root-import", 
        {
          "rootPathPrefix": "~",    // Chúng ta cần cho babel biết "~"
          "rootPathSuffix": "src"   // sẽ được convert thành "src"
        }
      ]
    ]
  };
};
