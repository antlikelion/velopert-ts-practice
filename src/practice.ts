let count = 0;
count += 1;
count = "갑분문" //에러 뜬 거 보이죵?

const message: string = "하이"

const done: boolean = true

const numbers: number[] = [1,2,3]
const messages: string[] = ['hello', 'world'];

messages.push(1); // 에러 뜬 거 보이죵?

let mightBeUndefined: string | undefined = undefined // string일수도, undefined일수도

let nullableNumber: number | null = null // number일수도, null일수도

let color: 'red' | 'orange' | 'yellow' = 'red' // 셋 중 하나임

color = 'yellow'
color = 'green' // 에러 뜬 거 보이죵?