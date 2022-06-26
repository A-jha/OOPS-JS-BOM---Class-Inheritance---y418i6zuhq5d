// import using require
const Shape = require("./shape");
// declare class
class Circle extends Shape {
  calculateArea(r) {
    return 2 * Math.PI * r;
  }
}

// export class using module.exports
module.exports = Circle;
