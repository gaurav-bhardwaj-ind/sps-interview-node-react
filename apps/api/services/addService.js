function addService() {
  return {
    add: function (a, b) {
      return a + b;
    },
  };
}

module.exports = {
  addService,
};
