type Person = {
    name: string,
    age?:number
    // 물음표는 설정을 해도 되고 안 해도 되는 값을 의미함
}

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
    skills:string[]
}

const person: Person = {
    name:"이인우",
    age: 28
}

const expert: Developer = {
    name:"홍길동",
    skills: ['javascript','react']
}

type People = Person[]
// Person[]이라는 type을 People이라는 타입으로 사용할 수 있게 됨
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow'
const color: Color = 'red'
const colors: Color[] = ['red', 'orange']