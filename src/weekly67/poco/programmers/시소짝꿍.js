// https://school.programmers.co.kr/learn/courses/30/lessons/152996

const solution = (weights) => {
  let answer = 0;
  const map = {};
  const ratios = [1, 2 / 3, 2 / 4, 3 / 4, 3 / 2, 4 / 2, 4 / 3];
  // 총 7가지의 경우의 수가 있다.

  weights.forEach((weight) => {
    ratios.forEach((ratio) => {
      const cur = weight * ratio;

      if (map[cur]) {
        //해당 비율을 곱한 값이 map에 존재할 경우
        answer += map[cur];
      }
    });

    // map에 해당 무게가 존재하지 않으면 1로 초기화, 존재하면 1을 더한다.
    !map[weight] ? (map[weight] = 1) : map[weight]++;
  });

  return answer;
};

console.log(solution([100, 180, 360, 100, 270])); // 4

// 매개변수
// weights : 사람들의 몸무게 목록

// 출력
// 시소 짝꿍이 몇 쌍 존재하는지를 반환

// 문제 설명 및 해결
// 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있다.
// 이 시소를 두 명이 마주 보고 탄다고 할 때, 시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍이라고 한다.
// 즉, 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.
// 사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지를 반환하는 문제
// 시소 짝꿍이 되는 경우는 총 7가지의 경우의 수가 있다.
// 사람들의 몸무게에 각 비율을 곱하고 해당 값이 map에 존재한다면 answer에 map[cur]를 더해준다.
// map[cur]을 더하는 이유는, 해당 무게를 가진 사람이 시소에 탔을 때 시소 짝꿍이 되는 경우의 수를 더해주기 위함이다.
// map에 해당 무게가 존재하지 않으면 1로 초기화, 존재하면 1을 더한다.
// 즉, 해당 사람의 몸무게에 모든 경우의 수의 비율들을 곱했을 때, 필요로 하는 몸무게가 나오게 되고, 이때 map에 존재하는 몸무게의 수만큼 시소 짝꿍이 되는 경우의 수를 더해주면 된다.
