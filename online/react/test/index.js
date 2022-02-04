class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    print = () => {
        console.log(`Rectangle: ${this.height} x ${this.width}`);
        // console.log("this", this);
    }
    getArea = () => {
        return this.height * this.width;
    }
    perimeter = function () {
        console.log("this", this);
        
        console.log(`Perimeter ${2 * (this.height + this.width)}`);
    }
}
class Square extends Rectangle {
    constructor(dim) {
        super()
        this.height = dim;
        this.width = dim;
    }
}
let sq = new Square(10)
console.log(`Area ${sq.getArea()}`);           // 
sq.perimeter()   