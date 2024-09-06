let section = document.getElementById("resultados-pesquisa"); 

  // Adiciona a mensagem inicial
  section.innerHTML = `
    <div class="resultado-pesquisa">
      <p>Digite algo para pesquisar...</p>
    </div>
  `;

function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
    // para realizar uma comparação insensível a caixa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
      section.innerHTML = "Nada foi encontrado..."
      return
    } 
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (webtoon) na lista de dados
    for (let dado of dados) {
      // Converte o título e a descrição do item para minúsculas para facilitar a comparação
      let tituloMinusculo = dado.titulo.toLowerCase();
      let descricaoMinuscula = dado.descricao.toLowerCase();
  
      // Verifica se o termo de busca está presente no título ou na descrição
      if (tituloMinusculo.includes(campoPesquisa) || descricaoMinuscula.includes(campoPesquisa)) {
        // Se o termo foi encontrado, adiciona o item aos resultados da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Ler Webtoon</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (resultados === "") {
      // Se não houver resultados, exibe uma mensagem informativa
      section.innerHTML = `
        <div class="resultado-pesquisa">
        <p class="">Nenhum resultado encontrado para "${campoPesquisa}".</p>
        <p>Tente pesquisar por:</p>
        <ul class="sugestoes">
          <li>Webtoons populares</li>
        </ul>
        </div>
      `;
    } else {
      // Se houver resultados, exibe os resultados na seção
      section.innerHTML = resultados;
    }
  }