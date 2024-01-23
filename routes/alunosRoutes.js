const express = require('express')
const override = require('method-override')
const alunoController = require('../controllers/alunoController')
const router = express.Router()
router.use(override('_method'))

router.get('/', alunoController.home)
router.post('/cadastro', alunoController.novoAluno)
router.get('/listarAlunos', alunoController.listarAlunos)
router.get('/Responsavel', alunoController.listarResponsavel)
router.get('/buscarAlunos/:matricula', alunoController.buscarAlunos)
router.put('/editarAlunos/:matricula', alunoController.editarAlunos)
router.get('/editarAlunos/:matricula', alunoController.formEditarAlunos)
router.delete('/deletarAlunos/:matricula', alunoController.deletarAlunos)
router.get('/deletarAlunos/:matricula', alunoController.formDeletarAluno)
router.get('/cadastrar', alunoController.cadastrarAluno)


module.exports = router