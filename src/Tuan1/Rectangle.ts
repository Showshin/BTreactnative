export class Rectangle{
    width: number;
    high: number;

    constructor(width:number, high:number){
        this.width= width;
        this.high = high;
    }

    public CalcArea() : number{
        return this.width*this.high;
    }

    public CalcPerimeter() : number{
        return 2*(this.width+this.high);
    }
}