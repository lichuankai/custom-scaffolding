const pkg = {
  "name": '',
  "version": '0.1.0',
  "description": "",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "scripts": {
    "dev:dev": "cross-env NODE_ENV=development BASE_ENV=development webpack-dev-server -c build/webpack.dev.js",
    "dev:test": "cross-env NODE_ENV=development BASE_ENV=test webpack-dev-server -c build/webpack.dev.js",
    "dev:pre": "cross-env NODE_ENV=development BASE_ENV=pre webpack-dev-server -c build/webpack.dev.js",
    "dev:prod": "cross-env NODE_ENV=development BASE_ENV=production webpack-dev-server -c build/webpack.dev.js",
    "build:dev": "cross-env NODE_ENV=production BASE_ENV=development webpack -c build/webpack.prod.js",
    "build:test": "cross-env NODE_ENV=production BASE_ENV=test webpack -c build/webpack.prod.js",
    "build:pre": "cross-env NODE_ENV=production BASE_ENV=pre webpack -c build/webpack.prod.js",
    "build:prod": "cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.prod.js",
    "build:analy": "cross-env NODE_ENV=production BASE_ENV=production webpack -c build/webpack.analy.js --profile"
  },
  dependencies: {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  devDependencies: {
    "@babel/core": "^7.19.1",
    "@babel/plugin-proposal-decorators": "^7.19.1",
    "@babel/preset-env": "^7.19.1",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.18.6",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.7",
    "@types/react": "^18.0.20",
    "@types/react-dom": "^18.0.6",
    "autoprefixer": "^10.4.11",
    "babel-loader": "^8.2.5",
    "compression-webpack-plugin": "^10.0.0",
    "copy-webpack-plugin": "^11.0.0",
    "core-js": "^3.25.1",
    "cross-env": "^7.0.3",
    "css-loader": "^6.7.1",
    "css-minimizer-webpack-plugin": "^4.1.0",
    "glob-all": "^3.3.0",
    "html-webpack-plugin": "^5.5.0",
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
    "mini-css-extract-plugin": "^2.6.1",
    "postcss-loader": "^7.0.1",
    "purgecss-webpack-plugin": "^5.0.0",
    "react-refresh": "^0.14.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.3.6",
    "thread-loader": "^3.0.4",
    "webpack": "^5.74.0",
    "webpack-bundle-analyzer": "^4.6.1",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.0",
    "webpack-merge": "^5.8.0"
  
  }
}

export default pkg;