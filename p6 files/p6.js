/*
    CIT 281: Project 6
    Author: Natalee Irwin
*/

//Create Shape base class
class Shape {
    constructor (
        sides = []
    ) {
        this.sides = sides;
    }
    perimeter = () => this.sides.length > 0 ? this.sides.reduce((accumulator, indexVal) => accumulator + indexVal) : 0;
}
/*
Test Shape class code
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

//Rectangle class
class Rectangle extends Shape {
    constructor (
        length = 0,
        width = 0
    ) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => this.width * this.length;
}
/*Test Rectangle class
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0*/

//Triangle class
class Triangle extends Shape {
    constructor (
        sideA = 0,
        sideB = 0,
        sideC = 0
    ) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area() {
        let s = (this.sideA + this.sideB + this.sideC)/2;
        return Math.sqrt(s * (s-this.sideA) * (s-this.sideB) * (s-this.sideC))
    }
}
/*Test triangle code
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0*/

//Processing array of side arrays
// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const miniArray of data) {
    //console.log(miniArray.length);
    let shapeType = null
   switch (miniArray.length) {
        case 2:
            shapeType = new Rectangle(...miniArray);
            //console.log(shapeType)
            if (shapeType.length == shapeType.width) {
                console.log(`Square with sides ${miniArray.toString()} has perimeter of ${shapeType.perimeter()} and area of ${shapeType.area()}`)
            } else {
                console.log(`Rectangle with sides ${miniArray.toString()} has perimeter of ${shapeType.perimeter()} and area of ${shapeType.area()}`)
            }
            break;
        case 3:
            shapeType = new Triangle(...miniArray);
            console.log(`Triangle with sides ${miniArray.toString()} has perimeter of ${shapeType.perimeter()} and area of ${shapeType.area()}`)
            break;
        default:
            console.log(`Shape with ${miniArray.length} sides unsupported`)
   }
}
