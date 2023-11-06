function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([width, height]) => {
    width < height && ([width, height] = [height, width]);
    maxWidth = Math.max(width, maxWidth);
    maxHeight = Math.max(height, maxHeight);
  });

  return maxWidth * maxHeight;
}
