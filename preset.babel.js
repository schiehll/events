module.exports = {
  presets: [
    require('babel-preset-react'),
    require('babel-preset-es2015'),
    require('babel-preset-stage-1')
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-import-glob').default,
    [require('babel-plugin-typecheck').default, { 
      disable: {
        production: true
      }
    }],
    [require('babel-plugin-dot-dot-slash').default, { 
      rootSuffix: 'app'
    }]
  ]
}