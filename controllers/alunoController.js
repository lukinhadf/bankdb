const db = require("../databases/connection");
const path = require('path')



class alunoController {
  home(req, res){
  res.render('home')
}

  novoAluno(req, res) {
    const {
      MATRICULA,
      NOME,
      EMAIL,
      TURMA,
      SERIE,
      SEXO,
      TELEFONE,
      ENDERECO,
      RESPONSAVEL
    } = req.body;

    db.insert({
      MATRICULA,
      NOME,
      EMAIL,
      TURMA,
      SERIE,
      SEXO,
      TELEFONE,
      ENDERECO,
      RESPONSAVEL
    })
      .table("alunos")
      .then((data) => {
        console.log(data);
        res.json({ message: "Aluno cadastrado com sucesso!" });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  listarAlunos(req, res) {
    db.select("*")
      .table("alunos")
      .then((alunos) => {
        console.log(alunos);
        // res.json(alunos);
        res.render('listarAlunos',{bancoAlunos:alunos})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  listarResponsavel(req, res) {
    db.select("nome", "responsavel")
      .table("alunos")
      .then((responsavel) => {
        console.log(responsavel);
        res.json(responsavel);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  buscarAlunos(req, res) {
    const dados = req.params;
    db.select("*")
      .table("alunos")
      .where({ matricula: dados.matricula })
      .then((matricula) => {
        console.log(matricula);
        if (matricula.length > 0) {
          res.json(matricula);
        } else {
          console.log("Nenhum aluno");
          res.json({ message: "Nenhum aluno com esta matricula" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  editarAlunos(req, res) {
    const { matricula } = req.params;
    const {
      NOME,
      EMAIL,
      TURMA,
      SERIE,
      SEXO,
      TELEFONE,
      ENDERECO,
      RESPONSAVEL} =
      req.body;
    db.where({ matricula: matricula })
      .update({
        NOME,
      EMAIL,
      TURMA,
      SERIE,
      SEXO,
      TELEFONE,
      ENDERECO,
      RESPONSAVEL
      })
      .table("alunos")
      .then(data=> {
        res.json({ message: "Dados atualizados com sucesso" });
      })
      .catch((error) => {
        res.json(error);
      });
  }
  deletarAlunos(req, res) {
  const { matricula } = req.params;
  db.where({ MATRICULA:matricula })
    .delete()
    .table("alunos")
    .then(data => {
      res.json({message: "Dados deletados com sucesso" });
      console.log(data)
    })
    .catch(error => {
      res.json(error);
    });
}
cadastrarAluno(req, res){
  // res.sendFile(path.join(__dirname, '../views/cad.html'))
  res.render('cad')
 }
 formEditarAlunos(req, res) {
  const dados = req.params;
  db.select("*")
    .table("alunos")
    .where({ MATRICULA:dados.matricula })
    .then((matricula) => {
      console.log(matricula);
      if (matricula.length > 0) {
        res.render('editar', {matricula});
      } else {
        console.log("Nenhum aluno");
        res.json({ message: "Nenhum aluno com esta matricula" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
formDeletarAluno(req, res) {
  const dados = req.params;
  db.select("*")
    .table("alunos")
    .where({ MATRICULA:dados.matricula })
    .then((matricula) => {
      console.log(matricula);
      if (matricula.length > 0) {
        res.render('deletar', {matricula});
      } else {
        console.log("Nenhum aluno deletado");
        res.json({ message: "Aluno deletado com sucesso" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
}

module.exports = new alunoController();
