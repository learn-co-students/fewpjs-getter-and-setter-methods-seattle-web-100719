// Add your Circle class here
class Circle
{
    constructor(radius) {
        this._radius = radius
    }

    get diameter()
    {
        return 2 * this.radius
    }

    set diameter(diameter)
    {
        this.radius = diameter/2;
    }

    set circumference(circumference)
    {
        this.radius = circumference/(2*Math.PI);
    }

    get circumference()
    {
        return 2 * Math.PI * this.radius
    }

    get area()
    {
        return Math.PI * Math.pow(this.radius, 2);
    }

    get radius()
    {
        return this._radius;
    }

    set radius(radius)
    {
        this._radius = radius;
    }
}