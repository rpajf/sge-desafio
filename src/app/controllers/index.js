const ApplicationRepository = require('../repositories');
const { convertData, removeComma } = require('../../utils/convert');

class ApplicationController {
  async indexRows(req, res) {
    const rows = await ApplicationRepository.findAllData();
    res.json(rows);
  }

  async indexTables(req, res) {
    const tables = await ApplicationRepository.showTables();
    res.json(tables);
  }

  async insertValues(req, res) {
    const { barcode, name, value, amount } = req.body;
    const values = await ApplicationRepository.pushResults({
      barcode,
      name,
      value,
      amount,
    });
    res.json(values);
  }

  async getFile(req, res) {
    const { fileid } = req.body;
    let parsed = convertData(fileid);
    removeComma(parsed);
    res.json(removeComma(parsed));
  }
}

module.exports = new ApplicationController();
