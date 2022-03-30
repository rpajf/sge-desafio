const db = require('../../database');


class ApplicationRepository {
  async findAllData() {
    const rows = await db.query(`SELECT * FROM ${} ORDER BY name`);
    return rows;
  }

  async describeCols() {
    const cols = await db.query(`SHOW COLUMNS FROM tablename`);
    return cols;
  }

  async showTables() {
    await db.query('SELECT database');
    const tables = await db.query('SHOW TABLES');
    return tables;
  }
}

module.exports = new ApplicationRepository();
