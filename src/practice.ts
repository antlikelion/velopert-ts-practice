// interface는 class가 준수해야 할 조건을 설정하는 역할
// =>class 선언 시에 implements키워드를 사용하여 해당 class가 특정 interface의 조건을 지킨다는 것을 명시

interface Shape {
    getArea():number
    // Shape 인터페이스에는 getArea라는 함수가 있어야 하며 그 함수의 반환 값은 숫자여야 함
}

class Circle implements Shape {
    radius: number
    // 멤버 변수의 설정
    // public또는 private accessor를 이용하면 멤버 변수의 설정을 constructor안에 내장할 수 있음
    constructor(radius:number){
        this.radius=radius
    }

    getArea(){
        return this.radius * this.radius * Math.PI
    }
}

class Rectangle implements Shape {
    width: number
    height: number
    constructor(width:number, height:number) {
        this.width = width
        this.height = height
    }
    getArea(){
        return this.width * this.height
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shapes.forEach(shape => {
    console.log(shape.getArea());
})
