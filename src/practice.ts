function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current)=>acc + current, 0)
    // 여기서 acc나 current에 마우스 올려보면 알겠지만 배열의 내장함수를 사용할 때도
    // 타입 유추가 잘 이루어지고 있음을 알 수 있음
}

const total = sumArray([1,2,3,4,5])

function returnNothing(): void {
    // 아무것도 반환하지 않는 함수
    console.log('아무것도 반환하지 않아용');
}