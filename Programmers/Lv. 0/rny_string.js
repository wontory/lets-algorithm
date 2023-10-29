const solution = (rny_string) =>
  [...rny_string].map((char) => (char === 'm' ? 'rn' : char)).join('');

// const solution = (rny_string) => rny_string.replaceAll('m', 'rn');
