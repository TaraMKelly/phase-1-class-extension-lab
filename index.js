class Polygon {
    constructor(integerArray) {
        this.integerArray = integerArray
    }
    get countSides() {
        return this.integerArray.length
    }
    get perimeter() {
        return this.integerArray.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.integerArray[0]===this.integerArray[1]||this.integerArray[0]===this.integerArray[2]||this.integerArray[1]===this.integerArray[2]){
            return true
        }
        else return false
    }
}

class Square extends Polygon {
    get isValid() {
        if((this.perimeter/4)===this.integerArray[0]) return true
        else return false
    }
    get area() {
        return this.integerArray[0] ** 2
    }
}