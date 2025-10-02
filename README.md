# Le-Vou
Integrantes
Ana Lessa Ferreira - RA: 10732666

Artur Guarnieri do Amaral Rodrigues - RA: 10736207

Giovanna de Carvalho Almeida - RA: 10736132

Júlia Oliveira Longhi - RA: 10736801


Processo de Ideação

O projeto "Lê-Vou!" é a criação de uma página web mobile para revenda de livros usados, semelhante a um sebo virtual. A ideia central é estabelecer uma plataforma que conecte, de maneira intuitiva e segura, pessoas que desejam desapegar de livros que já leram com outros que buscam novas histórias e conhecimento a um preço acessível.

A concepção do projeto se mostrou interessante por abordar uma necessidade real e não completamente atendida pelo mercado. Percebemos que muitas pessoas enfrentam dificuldades para encontrar livros em bom estado e com preço justo, além de terem o desafio de encontrar um local para vender ou doar os livros que já não utilizam. As alternativas existentes, como sebos físicos, nem sempre estão acessíveis ou têm o acervo desejado. E as lojas virtuais genéricas não oferecem um ambiente focado na comunidade de leitores, o que acaba gerando problemas de confiança em seus produtos para os clientes.

Decidimos criar esse projeto justamente para solucionar essas questões. Entendemos que os usuários buscam, além da economia, a praticidade de um processo de compra e venda simplificado, a segurança de saber a real condição do livro, e a satisfação de contribuir para um consumo sustentável. O projeto se justifica como a resposta a esses desejos, oferecendo uma experiência otimizada e um espaço dedicado para a comunidade de leitores.

Imagens do Protótipo

<img width="1440" height="2048" alt="Frame 21" src="https://github.com/user-attachments/assets/84ebe8b5-ff57-4b96-bf68-ede4f1c78369" />
<img width="1440" height="1024" alt="Wireframe - 14" src="https://github.com/user-attachments/assets/46a20f7f-3c67-4cdf-9419-8aafb60e50a5" />
<img width="1440" height="1024" alt="Wireframe - 10" src="https://github.com/user-attachments/assets/edaeae44-c36d-44ad-b04b-8e7a5d4c7688" />
<img width="1440" height="1024" alt="Cadastro" src="https://github.com/user-attachments/assets/6f0693d1-aef6-4d0d-b5d0-72404fff56f6" />
<img width="1536" height="1194" alt="Perfil (1)" src="https://github.com/user-attachments/assets/4762f1b9-dc55-41d5-adea-7abe2a19c745" />
<img width="1536" height="2259" alt="Carrinho (1)" src="https://github.com/user-attachments/assets/7270db0d-d6df-4c12-bbaa-445b997bd105" />


Caráter Extensionista

Este projeto tem caráter extensionista, por atender uma demanda da comunidade, por meio do desenvolvimento de um ambiente online, que facilitará a conexão entre pessoas que buscam novos livros e pessoas que desejam desapegar de seus livros. Promovendo a economia circular, o retorno do livro para a comunidade traz diversos benefícios econômicos e ecológicos.


# Tutorial

## Visão Geral da Responsividade

A responsividade é implementada principalmente através de uma media query no CSS que ajusta estilos para telas com largura máxima de 768px. Essa media query modifica layouts, tamanhos de elementos e alinhamentos para dispositivos menores, como tablets e smartphones. No JavaScript, o menu responsivo é gerenciado com eventos para abrir e fechar o menu em telas menores, e arrays são usados para preencher dinamicamente conteúdos em várias páginas.

## Implementação do Menu Responsivo via JavaScript

O código JavaScript gerencia o menu responsivo adicionando ouvintes de eventos para alternar a visibilidade do menu em telas menores.

- O evento 'DOMContentLoaded' garante que o DOM esteja carregado antes de executar o código: `document.addEventListener('DOMContentLoaded', () => { ... })`.
- Seleciona o elemento de navegação: `const nav = document.getElementById('site-menu')`.
- Seleciona o botão de alternância: `const toggle = nav.querySelector('.menu-toggle')`.
- Define uma função para alternar o atributo 'aria-expanded': `const setOpen = (open) => nav.setAttribute('aria-expanded', String(open))`.
- Adiciona ouvinte de clique no toggle para inverter o estado aberto: `toggle.addEventListener('click', () => { const open = nav.getAttribute('aria-expanded') === 'true'; setOpen(!open); })`.
- Fecha o menu ao clicar fora dele: `document.addEventListener('click', (e) => { const open = nav.getAttribute('aria-expanded') === 'true'; if (open && !nav.contains(e.target)) setOpen(false); })`.
- Fecha o menu com a tecla Escape: `document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); })`.

Essa implementação aplica-se a todas as páginas que incluem o menu de navegação, como index.html, livros.html, meusLivros.html e carrinho.html, tornando o menu acessível e responsivo.

## Preenchimento Dinâmico de Conteúdos via Arrays no JavaScript

Arrays no JavaScript são usados para preencher seções de páginas dinamicamente, facilitando a manutenção e a responsividade ao gerar HTML que se adapta a diferentes tamanhos de tela.

- Array 'livros' contém objetos com propriedades como titulo, autor, preco, imagem e promocao: `const livros = [ { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 32,90", imagem: "livro1.png", promocao: "sim" }, ... ]`.
- Array 'generos' para gêneros de livros: `const generos = [ { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" }, ... ]`.
- Array 'livrosPopulares' para imagens de livros populares: `const livrosPopulares = [ "livro1.png", "livro2.png", "livro3.png", "livro4.png" ]`.
- Array 'promocoes' para imagens de promoções: `const promocoes = [ "promo1.png", "promo2.png", "promo3.png" ]`.
- Array 'maisProcurados' para livros mais procurados: `const maisProcurados = [ { imagem: "mais_vend1.png", titulo: "Manual de <br> Assassinato para <br> Boas Garotas", autor: "Holy Jackson", avaliacao: "4.5" }, ... ]`.
- Array 'livrosCarrinho' para itens no carrinho: `const livrosCarrinho = [ { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 35,50", imagem: "livro1.png" }, ... ]`.
- Array 'meusLivros' para livros do usuário: `const meusLivros = [ { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", preco: "R$ 30,50", imagem: "livro_vender1.jpg", estado: "Ótimo" }, ... ]`.

- Preenchimento de gêneros: Seleciona '.generos_juntos' e itera 'generos' para adicionar HTML: "generos.forEach(genero => { generosContainer.innerHTML += `<section class="sobre_gen"> <a href="${genero.link}" class="genero"> <img > </a> <h5> ${genero.nome} </h5> </section>`; })". Aplicado em livros.html.
- Preenchimento de promoções: Seleciona '.conj_promo' e adiciona imagens de 'promocoes.slice(0, 2)': `promocoes.slice(0, 2).forEach(promo => { promoContainer.innerHTML += `<img>`; })`. Aplicado em livros.html.
- Preenchimento de livros populares: Seleciona '.populares', cria duas seções com imagens de 'livrosPopulares': `livrosPopulares.forEach(livro => { primeiraSecao.innerHTML += `<img class="pop_livros"">`; })` e similar para segunda seção. Aplicado em livros.html.
- Preenchimento de promoção lateral: Seleciona '.promo' e adiciona 'promocoes[2]': `promoLateral.innerHTML = `<img>`;`. Aplicado em livros.html.
- Preenchimento de mais procurados: Seleciona '.mais_procurados' e itera 'maisProcurados' para adicionar HTML com imagem, título, autor e avaliação: "maisProcurados.forEach(livro => { maisProcuradosContainer.innerHTML += `<section class="livro_mais_vendido"> <img > <div class="sobre_livro"> <p> ${livro.titulo} </p> <h6> - ${livro.autor} </h6> <section class="avaliacao"> <img> <p> ${livro.avaliacao} </p> </section> </div> </section>`; })". Aplicado em livros.html.
- Preenchimento de livros em promoção: Seleciona '.livro_promo' e filtra 'livros' por promocao "sim": "livros.filter(a => a.promocao === "sim").forEach(a => { promo.innerHTML += `<img class="promo_livros" alt="${a.titulo}">`; })". Aplicado em index.html.
- Preenchimento de recomendados: Seleciona '.grid-recomendados' e itera 'livros': "livros.forEach(a => { recom.innerHTML += `<figure class="livro_recom"> <img class="recom_livros" alt="${a.titulo}"> <figcaption> <p class="titulo">${a.titulo}</p> <p class="autor">- ${a.autor}</p> <p class="valor">${a.preco}</p> </figcaption> </figure>`; })". Aplicado em index.html.
- Preenchimento de carrinho: Seleciona '.compras' e itera 'livrosCarrinho': "livrosCarrinho.forEach(livro => { comprasContainer.innerHTML += `<section class="livro_carrinho"> <img class="img_livro_carrinho"> <div class="sobre_livro_carrinho"> <section class="carrinho_autor"> <p> ${livro.titulo} </p> <h6> - ${livro.autor} </h6> </section> <section class="preco"> <p> ${livro.preco}</p> </section> </div> </section>`; })". Aplicado em carrinho.html.
- Preenchimento de meus livros: Seleciona todos '.vendidos', itera 'meusLivros' distribuindo em containers: "vendidosContainers.forEach(container => { ... for (let i = 0; i < 2 && livroIndex < meusLivros.length; i++) { const livro = meusLivros[livroIndex]; const estadoClass = livro.estado === "Ótimo" ? "#34C759" : ... ; container.innerHTML += `<section class="livro_vendido"> <img class="venda_livro"> <section class="vender"> <div class="estado"> <h5 style="background-color: ${estadoClass}"> ${livro.estado} </h5> </div> <div class="sobre_livro"> <p> ${livro.titulo} </p> <h6> - ${livro.autor} </h6> <h4> ${livro.preco} </h4> </div> </section> </section>`; livroIndex++; } })". Aplicado em meusLivros.html.

## Responsividade na Página index.html (Início)

A página index.html é responsiva ajustando layouts de promoções e recomendados via media query.

- No CSS base, 'article' para banner: `display: flex; justify-content: space-between; padding-left: 60px; padding-right: 60px; padding-bottom: 20px; padding-top: 20px;`. O 'flex' permite empilhamento automático em telas menores.
- '.livro_promo': `display: flex; margin-left: 70px; margin-right: 70px;`. Em telas menores, itens podem quebrar linha devido ao flex.
- '.recomendados': `display: flex; flex-direction: column; padding-left: 20px; padding-right: 60px; padding-bottom: 20px; padding-top: 5px;`. Mantém coluna para empilhamento vertical.

## Responsividade na Página livros.html (Livros)

A página livros.html ajusta seções de gêneros, promoções, populares e mais procurados para telas menores.

- '.busca': `width: 750px; margin-left: 70px; margin-top: 30px;`. Em media query, reduz margens.
- '.conj_promo': `width: 730px; margin-left: 80px; display: flex; justify-content: space-between;`. Itens podem empilhar se o espaço for insuficiente.
- '.populares': `width: 500px; margin-left: 80px; display: flex; justify-content: space-evenly; flex-direction: column;`. Mantém coluna para seções.
- '.livro_pop': `width: 500px; display: flex; justify-content: space-between;`. Em telas menores, imagens reduzem tamanho via media query.
- '.mais_procurados': `display: flex; flex-direction: column;`. Empilha itens verticalmente.

## Responsividade na Página meusLivros.html (Meus Livros)

A página meusLivros.html  lista livros do usuário, com ajustes para empilhamento.

- Na media query: '.venda': `flex-direction: column; align-items: flex-start; margin-right: 20px; margin-left: 20px; gap: 15px; height: auto;`. Empilha elementos verticalmente.
- '.vendidos': `flex-direction: column; margin-right: 20px; margin-left: 20px; gap: 20px;`. Empilha livros.
- '.livro_vendido': `margin-left: 0; margin-top: 20px; margin-bottom: 15px; flex-direction: column; align-items: center; text-align: center; height: auto;`. Centraliza e empilha.
- '.venda_livro': `width: 120px; margin-right: 0; margin-bottom: 10px;`. Reduz tamanho da imagem.
- '.popup-conteudo': `width: 95%; height: 90%; margin: 5% auto;`. Expande popup para tela cheia.
- '.agrup_form': `flex-direction: column; gap: 20px;`. Empilha formulário.
- '.ft_livro': `margin-left: 0; width: 100%;`. Imagem ocupa largura total.
- '.form_cad': `margin-right: 0; width: 100%;`. Formulário ocupa largura total.

## Responsividade na Página carrinho.html (Carrinho)

A página carrinho.html ajusta lista de itens e resumo para telas menores.

- '.titulo_carrinho': `display: flex; justify-content: space-between; margin-right: 300px;`. Permite adaptação.
- '.livro_carrinho': `height: 230px; margin-left: 20px; margin-top: 0px; margin-bottom: 30px; display: flex; align-items: flex-end;`. Alinha itens.
- '.sobre_livro_carrinho': `width: 600px; display: flex; flex-direction: row; justify-content: space-between; margin-left: 15px;`. Espaça as informações.
- Na media query: '.titulo_carrinho': `flex-direction: column; align-items: flex-start; gap: 10px; margin: 20px; text-align: left;`. Empilha títulos.
- '.pai_carrinho': `flex-direction: column; margin: 10px; gap: 30px;`. Empilha seções.
- '.compras': `width: 100%; padding: 0;`. Ocupa largura total.
- '.livro_carrinho': `flex-direction: row; align-items: center; text-align: left; margin-bottom: 20px; padding: 15px; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 2px 5px rgba(0,0,0,0.1); height: auto; margin-left: 0; margin-top: 0;`. Mantém row mas com padding.
- '.img_livro_carrinho': `width: 80px; height: auto; margin-right: 15px; margin-bottom: 0; flex-shrink: 0;`. Reduz imagem.
- '.sobre_livro_carrinho': `width: 100%; display: flex; flex-direction: column; justify-content: space-between; gap: 5px; margin-left: 0;`. Empilha as informações do livro.
- '.carrinho_autor p': `font-size: 14px; font-weight: 600; margin: 0;`. Reduz fonte.
- '.carrinho_autor h6': `font-size: 12px; margin: 2px 0;`. Reduz fonte.
- '.preco': `align-items: flex-start;`. Alinha preço.
- '.preco p': `font-size: 16px; font-weight: bold; color: #516EE3; margin: 0;`. Ajusta preço.
- '.resumo': `width: 100%; border-radius: 10px; padding: 10px;`. Ocupa largura total.
- '.caixa_resumo': `padding: 20px; margin: 0; display: flex; flex-direction: column; gap: 15px; background-color: #829BFF; color: initial;`. Empilha resumo.
- '.total': `font-size: 18px; font-weight: bold; color: #516EE3; border-top: 2px solid #ddd; padding-top: 15px; margin-top: 15px;`. Ajusta total.
- '.formu_carrinho': `margin-top: 10px; padding: 12px; font-size: 14px;`. Ajusta input.

## Ajustes Gerais de Responsividade no CSS

A media query principal aplica-se a todas as páginas: `@media (max-width: 768px) { ... }`.
- 'body': `margin-top: 25px; font-family: "Poppins"; margin: 0;`. Remove margens padrão. 
- 'nav': `display: flex; justify-content: space-between; margin-top: 20px; margin-left: 70px; margin-right: 70px;`. Ajusta para telas menores via media. 
- 'footer': `display: flex; justify-content: space-between; background-color: #7A7A7F; color: white; margin-top: 60px; padding: 30px; padding-left: 170px; padding-right: 170px;`. Empilha em telas menores devido ao flex.
