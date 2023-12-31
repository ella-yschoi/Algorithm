// 06. 의상
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 나의 풀이
function solution(clothes) {
    // 옷 종류별로 개수를 저장하기 위한 변수 new Map 생성
    const clothesMap = new Map();

    // 옷 종류별로 옷의 개수를 계산하여 Map에 저장
    for (let i = 0; i < clothes.length; i++) {
        const category = clothes[i][1]; // 옷의 종류
        if (clothesMap.has(category)) {
            // 이미 해당 종류의 옷을 저장한 경우, 개수를 증가시킴
            clothesMap.set(category, clothesMap.get(category) + 1);
        } else {
            // 해당 종류의 옷을 처음으로 저장하는 경우, 개수를 1로 초기화
            clothesMap.set(category, 1);
        }
    }

    // 각 종류별로 옷을 입는 경우와 입지 않는 경우를 고려한 조합 계산
    let answer = 1;
    for (const count of clothesMap.values()) {
        // 해당 종류의 옷을 입지 않는 경우도 고려하여 (count + 1)을 곱함
        answer *= (count + 1);
    }

    // 모두 다 입지 않는 경우를 제외하기 위해 1을 뺌
    return answer - 1;
}

// 다른 풀이
function solution(clothes) {
    // 결과 초기값 1로 설정 (모두 다 입지 않는 경우 포함)
    let answer = 1;
    
    // 각 옷의 종류별로 개수를 저장할 객체 생성
    const obj = {};
    
    // clothes 배열 순회
    for (let arr of clothes) {
        // arr[1]은 옷의 종류
        // obj 객체에 해당 종류의 옷 개수를 저장
        // 만약 이미 해당 종류가 obj 객체에 존재한다면 그 값을 가져와 1을 증가
        // 만약 해당 종류가 obj 객체에 존재하지 않는다면 0으로 초기화하고 1을 더함
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    // 각 종류별로 옷을 입는 경우와 입지 않는 경우를 고려한 조합 계산
    for (let key in obj) {
        // 해당 종류의 옷을 입지 않는 경우도 고려하여 (obj[key] + 1)을 곱함
        answer *= (obj[key] + 1);
    }

    // 모두 다 입지 않는 경우를 제외하기 위해 1을 뺌
    return answer - 1;
}