// Note: db functions are async and must be called with await from the controller

const promisePool = require("./database");

const listAllCats = async () => {
  const [rows] = await promisePool.query('SELECT * FROM wsk_cats');
  return rows;
};

const findCatById_injection = async (id) => {
  const [rows] = await promisePool.query('SELECT * FROM wsk_cats WHERE cat_id = ' + id);

  console.log('rows', rows);
  if (rows.length === 0) {
    return false;
  }
  return rows;
};

const findCatById = async (id) => {
  const [rows] = await promisePool.execute(
    'SELECT * FROM wsk_cats WHERE cat_id = ?',
    [id]
  );
  console.log('rows', rows);
  if (rows.length === 0) {
    return false;
  }
  return rows;
};

module.exports = { listAllCats, findCatById, findCatById_injection };
