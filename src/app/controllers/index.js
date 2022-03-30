const ApplicationRepository = require('../repositories');

class ApplicationController {
  async indexRows(req, res) {
    const rows = await ApplicationRepository.findAllData();
    res.json(rows);
  }

  async indexTables(req, res) {
    const tables = await ApplicationRepository.showTables();
    res.json(tables);
  }
}

module.exports = new ApplicationController();
