const solution = (num_str) => [...num_str].reduce((acc, num) => acc + +num, 0);

// reduce 함수 안에서 0으로 acc를 초기화하지 않으면 원하는 해답이 안나왔다.
// num_str의 각 숫자가 string 타입이어서 acc의 타입도 그렇게 추론하는 것 같다.
