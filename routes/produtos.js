const express = require('express');
const router = express.Router();

//Retorna todos os produtos
router.get('/',(req, res, next) => {
	res.status(200).send({
		mensagem: 'Retorna todo os produtos'
	});
});

//Insere um produto
router.post('/',(req, res, next) => {
	res.status(201).send({
		mensagem: 'O produto foi criado'
	});
});

//Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
    	mensagem: 'Detalhes do produto',
        id_produto: id
    });
    
});
//Altera um produto
router.patch('/', (req, res, next) => {
	res.status(201).send({
		mensagem: 'Produto alterado'
	});
});


//Deleta um produto
router.delete('/', (req, res, next) => {
	res.status(201).send({
		mensagem: 'Produto excluido'
	});
});

module.exports = router;