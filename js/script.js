/*
Write class GeometricFigure, define private properties for set center of the figure.
To access these properties, define necessary methods.

Create two new classes Rectangle and Circle, based on class GeometricFigure. 
In these classes, define specific private properties. (For example, length of diagonal for Rectangle and radius for circle).
Add public method info() to each class, which displays all available information about figure.

*/

function GeometricFigure(x, y) {
    var centerX = x;
    var centerY = y;

    this.setX = function (x) {
        centerX = x;
        console.log('centerX', centerX);      
    }

    this.setY = function (y) {
        centerY = y;
        console.log('centerY', centerY);
    }

    this.getX = function () {
        return centerX;
    };

    this.getY = function () {
        return centerY;
    };

    this.info = function () {
        return `GeometricFigure [x, y] = [${this._centerX}, ${this._centerY}]`;
    }
 }

function Rectangle(x, y, l) {
    GeometricFigure.apply(this, arguments);    

    var diagonalLength = l;

    this.setDiagonalLength = function (l) {
        diagonalLength = l;
    };

    this.getDiagonalLength = function () {
        return diagonalLength;
    };

    this.info = function () {        
        return `Rectangle x = ${this.getX()}, y = ${this.getY()}, diagonal length = ${this.getDiagonalLength()}`; 
    }    
}

function Circle(x, y, r) {
    GeometricFigure.apply(this, arguments);
    
    var circleRadius = r;

    this.setCircleRadius = function (r) {
        circleRadius = r;
    };

    this.getCircleRadius = function () {
        return circleRadius;
    };

    this.info = function () {
        return `Circle x = ${this.getX()}, y = ${this.getY()}, radius = ${this.getCircleRadius()}`;
    }
}

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


