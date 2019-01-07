module.exports = ({ name }) => {
    return async context => {
      context.data[name] = new Date();
  
      return context;
    }
  }