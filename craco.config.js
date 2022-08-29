// craco.config.js
const path = require(`path`);
const alias = require(`./src/config/aliases`);

const src = `./src`;
const aliases = alias(src);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
