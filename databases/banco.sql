banco de dados --> ESCOLA

TABELA --> ALUNOS

MATRICULA 
NOME 
EMAIL 
TURMA
SERIE
SEXO
TELEFONE
ENDERECO
RESPONSAVEL

CREATE TABLE ALUNOS(
    MATRICULA VARCHAR(9) NOT NULL,
    NOME VARCHAR (100) NOT NULL,
    EMAIL VARCHAR (50) NOT NULL,
    TURMA CHAR(1) NOT NULL,
    SERIE INT NOT NULL,
    SEXO CHAR(1) NOT NULL,
    TELEFONE VARCHAR(14) NOT NULL,
    ENDERECO VARCHAR(255) NOT NULL,
    RESPONSAVEL VARCHAR(80) NOT NULL,
    PRIMARY KEY (MATRICULA)
    );