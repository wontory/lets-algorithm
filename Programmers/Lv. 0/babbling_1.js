function solution(babbling) {
  const result = babbling.map((bab) =>
    bab.replaceAll(/aya|ye|woo|ma/g, '.').replaceAll('.', '')
  );

  return result.filter((r) => r.length === 0).length;
}
