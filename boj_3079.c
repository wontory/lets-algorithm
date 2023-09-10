/**
 * Title: 입국심사
 * Author: wontory
 * Date: 2023/09/10
 * Last Modified: 2023/09/10
 * Tags: 이분 탐색, 매개 변수 탐색
 * Result: 시간 초과
 * Draft: true
 */

#include <stdio.h>

int main() {
  int N = 0, M = 0;
  int Tk[100000] = {0};
  int count[100000] = {0};

  scanf("%d %d", &N, &M);
  for (int i = 0; i < N; i++) {
    scanf("%ld", &Tk[i]);
  }

  // M명의 사람이 모두 심사를 받을 때까지 반복
  while (M > 0) {
    int min = 0;
    for (int i = 0; i < N; i++) {
      if (((count[i] + 1) * Tk[i]) < ((count[min] + 1) * Tk[min])) {
        min = i;
      }
    }
    count[min]++;
    M--;
  }

  // 가장 오래 걸리는 심사대를 찾는다.
  int max = 0;
  for (int i = 0; i < N; i++) {
    if (count[i] * Tk[i] > count[max] * Tk[max]) {
      max = i;
    }
  }

  printf("%ld", count[max] * Tk[max]);

  return 0;
}