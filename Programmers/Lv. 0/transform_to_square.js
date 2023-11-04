const solution = (arr) =>
  arr.length < arr[0].length
    ? [
        ...arr,
        ...Array.from({ length: arr[0].length - arr.length }, () =>
          new Array(arr[0].length).fill(0)
        ),
      ]
    : arr.length > arr[0].length
    ? arr.map((el) => [...el, ...new Array(arr.length - arr[0].length).fill(0)])
    : arr;
