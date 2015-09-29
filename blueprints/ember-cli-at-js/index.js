module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function() {
    return this.addBowerPackageToProject('At.js');
  }
};
