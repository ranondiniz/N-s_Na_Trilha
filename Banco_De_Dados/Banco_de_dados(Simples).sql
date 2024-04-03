-- Criação da tabela de clientes
CREATE TABLE Clientes (
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Sobrenome VARCHAR(50),
    Email VARCHAR(100),
    Telefone VARCHAR(20),
    Senha VARCHAR(100),
    CEP VARCHAR(10),
    Endereco VARCHAR(255)
);

-- Criação da tabela de anunciantes
CREATE TABLE Anunciantes (
    AnuncianteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50),
    Sobrenome VARCHAR(50),
    Email VARCHAR(100),
    Telefone VARCHAR(20),
    Senha VARCHAR(100),
    CEP VARCHAR(10),
    Endereco VARCHAR(255),
    CNPJ_MEI VARCHAR(20),
    PorteEmpresa ENUM('Pequena', 'Média', 'Grande'),
    TipoServico VARCHAR(100),
    PlanoAssinatura ENUM('Simples', 'Silver', 'Gold')
);

-- Criação da tabela de viagens
CREATE TABLE Viagens (
    ViagemID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255),
    ImagemPath VARCHAR(255),
    PrecoUnitario DECIMAL(10, 2),
    DataInicio DATE,
    HorarioSaida TIME,
    QuantidadeVagas INT,
    Categoria VARCHAR(100),
    Transporte VARCHAR(100),
    Alojamento VARCHAR(100),
    AtracoesAtividades TEXT,
    RequisitosViagem TEXT,
    Descricao TEXT,
    AnuncianteID INT,
    FOREIGN KEY (AnuncianteID) REFERENCES Anunciantes(AnuncianteID)
);
