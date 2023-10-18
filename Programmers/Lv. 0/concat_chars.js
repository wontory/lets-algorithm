const solution = (my_string, index_list) =>
  index_list.map((index) => my_string.split('')[index]).join('');

// 문자열의 문자 하나하나에 접근하려면 배열로 바꿔야한다고 생각했었는데 바로 접근이 가능하다!
// my_string[index]
