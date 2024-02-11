const fs = require("fs");
const path = require("path");

// Cria um diretório
fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Diretório criado com sucesso!");
});

// Cria um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
    // Adiciona conteúdo ao arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.html"),
      " I love Node.js",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Conteúdo adicionado com sucesso!");
        // Lê um arquivo
        fs.readFile(
          path.join(__dirname, "/test", "test.html"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log("Erro: ", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);
