const solution = (order) =>
  order.reduce(
    (acc, menu) => (menu.includes('cafelatte') ? acc + 5000 : acc + 4500),
    0
  );
