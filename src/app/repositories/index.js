const db = require('../../database');
// console.log(csvData.dataConverted);
// const data = csvData.dataConverted();
// const { barcode, name, value, amount } = data;
// console.log('asda', barcode, name, value, amount);
class ApplicationRepository {
  async findAllData() {
    const rows = await db.query('SELECT * FROM  products');
    return rows;
  }

  async describeCols() {
    const cols = await db.query('SHOW COLUMNS FROM tablename');
    return cols;
  }

  async showTables() {
    await db.query('SELECT database');
    const tables = await db.query('SHOW TABLES');
    return tables;
  }

  async pushResults({ barcode, name, value, amount }) {
    const rows = await db.query(
      `INSERT INTO products VALUES(${barcode},${name},${value},${amount})`
    );
    return rows;
  }
}

module.exports = new ApplicationRepository();
