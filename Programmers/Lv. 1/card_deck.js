function solution(cards1, cards2, goal) {
  for (const word of goal) {
    switch (word) {
      case cards1[0]:
        cards1.shift();
        break;
      case cards2[0]:
        cards2.shift();
        break;
      default:
        return 'No';
    }
  }

  return 'Yes';
}
