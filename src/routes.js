const { Router } = require('express');

const ApplicationController = require('./app/controllers');

const router = Router();
router.get('/', ApplicationController.index);
// exibir conteudo da tabela
router.post('/products', ApplicationController.insertValues);

router.get('/file', ApplicationController.getFile);
