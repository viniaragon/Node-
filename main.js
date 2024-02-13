const saldoInicial = 0;
const janeiro = new Mes("janeiro");
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
janeiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1000));
// janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
// janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
// janeiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
// janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));
// janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 300));
// janeiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 500));
// janeiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 300));
// janeiro.adicionarLancamento(new Lancamento("Farmácia", "despesa", 100));

const fevereiro = new Mes("fevereiro");
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 3000));
fevereiro.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
// fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 250));
// fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
// fevereiro.adicionarLancamento(new Lancamento("Internet", "despesa", 100));
// fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
// fevereiro.adicionarLancamento(new Lancamento("Alimentação", "despesa", 1000));
// fevereiro.adicionarLancamento(new Lancamento("Condomínio", "despesa", 400));

const marco = new Mes("marco");
marco.adicionarLancamento(new Lancamento("Salário", "receita", 4000));
marco.adicionarLancamento(new Lancamento("Aluguel", "despesa", 1200));
// marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
// marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 100));
// marco.adicionarLancamento(new Lancamento("Internet", "despesa", 200));
// marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
// marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 800));
// marco.adicionarLancamento(new Lancamento("Alimentação", "despesa", 1000));
// marco.adicionarLancamento(new Lancamento("Condomínio", "despesa", 400));

const abril = new Mes("abril");

const maio = new Mes("maio");

const ano = new Ano();
ano.adcionarMes(janeiro);
ano.adcionarMes(fevereiro);
ano.adcionarMes(marco);
ano.adcionarMes(abril);
ano.adcionarMes(maio);
ano.calcularSaldo();

ano.calcularSaldo();
console.log(ano.meses);

function addElement(parent, elementType, text = null) {
  const element = document.createElement(elementType);
  element.innerText = text;
  parent.appendChild(element);
}

function redenrizar() {
  const app = document.getElementById("app");
  if (app.firstChild) {
    app.firstChild.remove();
  }

  const painel = document.createElement("div");
  const cores = ["red", "green", "blue", "yellow"];
  const grafico = document.createElement("div");
  grafico.className = "grafico";
  painel.appendChild(grafico);
  for (const mes of ano.meses) {
    const coluna = document.createElement("div");
    coluna.className = "grafico-coluna";
    const cor = document.createElement("div");
    cor.style.height = 120;
    cor.style.backgroundColor = cores.pop();
    coluna.appendChild(cor);
    const nomeDoMes = document.createElement("div");
    nomeDoMes.innerText = mes.nome;
    coluna.appendChild(cor);
    coluna.appendChild(nomeDoMes);
    grafico.appendChild(coluna);
  }
  painel.appendChild(grafico);

  for (const mes of ano.meses) {
    addElement(painel, "h4", mes.nome);
    const tabelaLancamentos = document.createElement("table");
    tabelaLancamentos.className = "tabela-lancamentos";
    const linhaTitulo = document.createElement("tr");
    addElement(linhaTitulo, "th", "Categoria");
    addElement(linhaTitulo, "th", "Valor");
    tabelaLancamentos.appendChild(linhaTitulo);
    for (const lancamento of mes.lancamentos) {
      const linhaLancamento = document.createElement("tr");
      addElement(linhaLancamento, "td", lancamento.categoria);
      addElement(linhaLancamento, "td", formatarDinheiro(lancamento.valor));
      tabelaLancamentos.appendChild(linhaLancamento);
    }
    const linhaJuros = document.createElement("tr");
    addElement(linhaJuros, "th", "Juros:");
    addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
    tabelaLancamentos.appendChild(linhaJuros);

    const linhaRendimentos = document.createElement("tr");
    addElement(linhaRendimentos, "th", "Rendimentos:");
    addElement(
      linhaRendimentos,
      "th",
      formatarDinheiro(mes.totalizador.rendimentos)
    );
    tabelaLancamentos.appendChild(linhaRendimentos);

    const linhaSaldo = document.createElement("tr");
    addElement(linhaSaldo, "th", "Total:");
    addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
    tabelaLancamentos.appendChild(linhaSaldo);

    painel.appendChild(tabelaLancamentos);

    addElement(painel, "hr");
  }
  app.appendChild(painel);
}

redenrizar();

function adicionarLancamento() {
  const mes = document.getElementById("mes");
  const valor = document.getElementById("valor").value;
  const categoria = document.getElementById("categoria");
  const tipo = document.getElementById("tipo");

  ano.adicionaLancamento(
    mes.value,
    new Lancamento(
      categoria.value,
      tipo.value,
      parseFloat(valor) /*+(valor) tambem serve*/
    ),
    console.log(document.getElementById("valor").value)
  );

  ano.calcularSaldo();
  redenrizar();
  categoria.value = "";
  mes.value = ano.meses[2].nome;
  document.getElementById("valor").value = "";
}

const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
  const option = document.createElement("option");
  option.text = mes.nome;
  mesSelect.add(option);
}
