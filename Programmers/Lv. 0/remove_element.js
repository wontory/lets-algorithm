const solution = (arr, delete_list) =>
  arr.filter((num) => !delete_list.find((del) => del === num));
