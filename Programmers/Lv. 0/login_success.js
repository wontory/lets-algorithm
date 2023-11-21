function solution(id_pw, db) {
  const [id, pw] = id_pw;

  let result = 'fail';

  db.some(([db_id, db_pw]) => {
    if (db_id === id) {
      result = db_pw === pw ? 'login' : 'wrong pw';
      return true;
    }
  });

  return result;
}
