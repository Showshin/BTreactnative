"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, high) {
        this.width = width;
        this.high = high;
    }
    CalcArea() {
        return this.width * this.high;
    }
    CalcPerimeter() {
        return 2 * (this.width + this.high);
    }
}
exports.Rectangle = Rectangle;
