interface Person {
    name: string,
    age?:number
    // 물음표는 설정을 해도 되고 안 해도 되는 값을 의미함
}

interface Developer {
    name: string,
    age?:number,
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