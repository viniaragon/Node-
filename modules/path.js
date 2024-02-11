const path = require("path");

// basename apenas retorna o nome do arquivo
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// retorna um objeto com informações do arquivo
console.log(path.parse(__filename));

// junta caminhos de arquivos e diretórios em um único caminho
console.log(path.join(__dirname, "test", "test.html"));
