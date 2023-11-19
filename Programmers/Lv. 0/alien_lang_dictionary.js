function solution(spell, dic) {
  return dic
    .filter((word) => word.length === spell.length)
    .reduce((acc, word) => {
      if (acc === 2) {
        const res = spell.reduce(
          (acc2, char) =>
            word.includes(char) ? [...acc2, true] : [...acc2, false],
          []
        );
        acc = res.includes(false) ? 2 : 1;
      }

      return acc;
    }, 2);
}
