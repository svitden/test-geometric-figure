/*
Write class GeometricFigure, define private properties for set center of the figure.
To access these properties, define necessary methods.

Create two new classes Rectangle and Circle, based on class GeometricFigure.
In these classes, define specific private properties. (For example, length of diagonal for Rectangle and radius for circle).
Add public method info() to each class, which displays all available information about figure.

*/

class GeometricFigure {
    constructor (x,y) {
        this._centerX = x;
        this._centerY = y;
    }

    set coordX (x) {
        this._centerX = x;
        console.log('centerX =', this._centerX);
    }

    set coordY (y) {
        this._centerY = y;
        console.log('centerY =', this._centerY);
    }

    get coordX () {
        return this._centerX;
    }

    get coordY () {
        return this._centerY;
    }

    info () {
        return `GeometricFigure [x, y] = [${this._centerX}, ${this._centerY}]`;
    }
}

class Rectangle extends GeometricFigure{
    constructor(x, y, l) {
        super(x, y);
        this._diagonalLength = l;
    }

    set DiagonalLength (l) {
        this._diagonalLength = l;
        console.log('diagonal =', this._diagonalLength);
    };

    get DiagonalLength () {
        return this._diagonalLength;
    };

    info () {
        return `Rectangle x = ${this.coordX}, y = ${this.coordY}, diagonal length = ${this.DiagonalLength}`;
    }
}

class Circle extends GeometricFigure{
    constructor(x, y, r) {
        super(x, y);
        this._circleRadius = r;
    }

    set CircleRadius (r) {
        this._circleRadius = r;
    };

    get CircleRadius () {
        return this._circleRadius;
    };

    info () {
        return `Circle x = ${this.coordX}, y = ${this.coordY}, radius = ${this.CircleRadius}`;
    }
}



var figure = new GeometricFigure(10, 15);
var rectangle = new Rectangle(11, 11, 50);
var circle = new Circle(13, 13, 70);

console.log(figure.info());
figure.coordX = 25;
figure.coordY = 35;
console.log(figure.info());

console.log('=== Rectangle');
console.log(rectangle.info());
rectangle.coordX = 20;
rectangle.DiagonalLength = 55;
console.log(rectangle.info());

console.log('=== Circle');
console.log(circle.info());
circle.coordX = 15;
circle.coordY = 15;
circle.CircleRadius = 75;
console.log(circle.info());

console.log(figure.info());