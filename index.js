class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get diameter () {
        return `${this.radius}` * 2
    }

    set diameter (diameter) {
        this.radius = diameter / 2;
    }

    get circumference () {
        return `${this.diameter}` * Math.PI;
    }

    set circumference (circumference) {
        this.radius = circumference / (Math.PI * 2);
    }

    get area () {
        return (`${this.radius}` * `${this.radius}`) * Math.PI;
    }

    set area (area) {

    }

}

// class Square {
//     constructor(sideLength) {
//       this.sideLength = sideLength;
//     }
   
//     get area() {
//       return this.sideLength * this.sideLength;
//     }
   
//     set area(newArea) {
//       this.sideLength = Math.sqrt(newArea);
//     }
//   }