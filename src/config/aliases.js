const aliases = (prefix = `src`) => ({
  '@ui': `${prefix}/components/ui`,
  '@icons': `${prefix}/icons`,
  '@text': `${prefix}/components/text`,
  '@colors': `${prefix}/theme/colors`,
  '@typography': `${prefix}/theme/typography`,
  '@theme': `${prefix}/theme`,
  '@proptypes': `${prefix}/utils/proptypes`,
  '@utils': `${prefix}/utils`,
  '@fonts': `${prefix}/theme/fonts`,  
});

module.exports = aliases;