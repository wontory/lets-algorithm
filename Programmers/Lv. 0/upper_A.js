const solution = (myString) =>
  [...myString]
    .map((char) =>
      char.toLowerCase() === 'a' ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');
