/*
Write class GeometricFigure, define private properties for set center of the figure.
To access these properties, define necessary methods.

Create two new classes Rectangle and Circle, based on class GeometricFigure. 
In these classes, define specific private properties. (For example, length of diagonal for Rectangle and radius for circle).
Add public method info() to each class, which displays all available information about figure.

*/

function GeometricFigure(x, y) {
    this._centerX = x;
    this._centerY = y;
}

GeometricFigure.prototype.setX = function (x) {
    this._centerX = x;
    console.log('centerX =', this._centerX);
};

GeometricFigure.prototype.setY = function (y) {
    this._centerY = y;
    console.log('centerY =', this._centerY);
};

GeometricFigure.prototype.getX = function () {
    return this._centerX;
};

GeometricFigure.prototype.getY = function () {
    return this._centerY;
};

GeometricFigure.prototype.info = function () {
    return `GeometricFigure [x, y] = [${this._centerX}, ${this._centerY}]`;    
};


function Rectangle(x, y, l) {
    GeometricFigure.apply(this, arguments);
    this._diagonalLength = l;    
}

Rectangle.prototype = Object.create(GeometricFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setDiagonalLength = function (l) {
    this._diagonalLength = l;
    console.log('diagonal =', this._diagonalLength);
};

Rectangle.prototype.getDiagonalLength = function () {
    return this._diagonalLength;
};

Rectangle.prototype.info = function () {    
   return `Rectangle x = ${this.getX()}, y = ${this.getY()}, diagonal length = ${this.getDiagonalLength()}`;
};


function Circle(x, y, r) {
    GeometricFigure.apply(this, arguments);

    this._circleRadius = r;
}

Circle.prototype = Object.create(GeometricFigure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setCircleRadius = function (r) {
    this._circleRadius = r;
};

Circle.prototype.getCircleRadius = function () {
    return this._circleRadius;
};

Circle.prototype.info = function () {
    return `Circle x = ${this.getX()}, y = ${this.getY()}, radius = ${this.getCircleRadius()}`;
};


var figure = new GeometricFigure(10, 15);
var rectangle = new Rectangle(11, 11, 50);
var circle = new Circle(13, 13, 70);

console.log(figure.info());
figure.setX(25);
figure.setY(35);
console.log(figure.info());

console.log('=== Rectangle');
console.log(rectangle.info());
rectangle.setX(20);
rectangle.setDiagonalLength(55);
console.log(rectangle.info());

console.log('=== Circle');
console.log(circle.info());
circle.setX(15);
circle.setY(15);
circle.setCircleRadius(75);
console.log(circle.info());

console.log(figure.info());

