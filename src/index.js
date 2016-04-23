const i11e = require('./dep').i11e;

const RobotTopologyVisitor = require('./visitors/RobotTopologyVisitor');

module.exports = i11e.createExtension({
  extend() {
    // register visitors
    this.registerVisitor('robot', RobotTopologyVisitor());
  }
});
