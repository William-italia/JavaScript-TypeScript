CREATE DATABASE livraria;
use livraria;

CREATE TABLE tb_cliente (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    endereco VARCHAR(100),
    nr_endereco INT,
    cpf CHAR(11),
    cnpj CHAR(14),
    telefone VARCHAR(11)
    );
    
CREATE TABLE tb_compra (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	dt_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    vl_compra DECIMAL(10,2),
    fk_cd_cliente INT,
    FOREIGN KEY (fk_cd_cliente) REFERENCES tb_cliente (id)
);

CREATE TABLE tb_editora (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    editora VARCHAR(100),
    endereco VARCHAR(100),
    bairro VARCHAR(50),
    telefone VARCHAR(15),
    gerente VARCHAR(45)
);

CREATE TABLE tb_livro (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    livro VARCHAR(50),
    autor VARCHAR(50),
    assunto VARCHAR(50),
    qt_estoque INT,
    fk_cd_editora INT,
	FOREIGN KEY (fk_cd_editora) REFERENCES tb_editora (id)
    );
    
CREATE TABLE tb_item_compra (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	fk_cd_compra INT,
    fk_cd_livro INT,
    FOREIGN KEY (fk_cd_compra) REFERENCES tb_compra (id),
    FOREIGN KEY (fk_cd_livro) REFERENCES tb_livro (id)
);


-- Inserir registros na tabela tb_cliente
INSERT INTO tb_cliente (nome, endereco, nr_endereco, cpf, telefone) VALUES
('João Silva', 'Rua das Flores', 123, '12345678901', '987654321'),
('Maria Santos', 'Avenida Principal', 456, '98765432109', '123456789'),
('Carlos Oliveira', 'Rua das Árvores', 789, '45678901234', '456123789'),
('Ana Souza', 'Rua dos Passarinhos', 321, '23456789012', '321987654'),
('Pedro Rocha', 'Avenida Central', 654, '34567890123', '789321654');

-- Inserir registros na tabela tb_compra
INSERT INTO tb_compra (vl_compra, fk_cd_cliente) VALUES
(150.50, 1),
(200.75, 2),
(100.20, 3),
(300.00, 4),
(75.90, 5);

-- Inserir registros na tabela tb_editora
INSERT INTO tb_editora (editora, endereco, bairro, telefone, gerente) VALUES
('Editora A', 'Rua Principal', 'Centro', '123456789', 'Fernando Silva'),
('Editora B', 'Avenida Secundária', 'Bairro Norte', '987654321', 'Marta Oliveira'),
('Editora C', 'Rua dos Livros', 'Bairro Sul', '456789012', 'Ricardo Santos'),
('Editora D', 'Avenida dos Escritores', 'Bairro Leste', '789012345', 'Carla Rocha'),
('Editora E', 'Rua das Páginas', 'Bairro Oeste', '321654987', 'Lucas Souza');

-- Inserir registros na tabela tb_livro
INSERT INTO tb_livro (livro, autor, assunto, qt_estoque, fk_cd_editora) VALUES
('Livro 1', 'Autor 1', 'Assunto 1', 50, 1),
('Livro 2', 'Autor 2', 'Assunto 2', 30, 2),
('Livro 3', 'Autor 3', 'Assunto 3', 40, 3),
('Livro 4', 'Autor 4', 'Assunto 4', 60, 4),
('Livro 5', 'Autor 5', 'Assunto 5', 20, 5);

-- Inserir registros na tabela tb_item_compra
INSERT INTO tb_item_compra (fk_cd_compra, fk_cd_livro) VALUES
(6, 8),
(6, 7),
(7, 12), 
(8, 15),
(10, 11);

SELECT id FROM tb_livro;

