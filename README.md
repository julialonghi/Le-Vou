# Lê-Vou

## Integrantes: 

Ana Lessa Ferreira - RA: 10732666

Artur Guarnieri do Amaral Rodrigues - RA: 10736207

Giovanna de Carvalho Almeida - RA: 10736132

Júlia Oliveira Longhi - RA: 10736801


# Processo de Ideação

O projeto "Lê-Vou!" é a criação de uma página web mobile para revenda de livros usados, semelhante a um sebo virtual. A ideia central é estabelecer uma plataforma que conecte, de maneira intuitiva e segura, pessoas que desejam desapegar de livros que já leram com outros que buscam novas histórias e conhecimento a um preço acessível.

A concepção do projeto se mostrou interessante por abordar uma necessidade real e não completamente atendida pelo mercado. Percebemos que muitas pessoas enfrentam dificuldades para encontrar livros em bom estado e com preço justo, além de terem o desafio de encontrar um local para vender ou doar os livros que já não utilizam. As alternativas existentes, como sebos físicos, nem sempre estão acessíveis ou têm o acervo desejado. E as lojas virtuais genéricas não oferecem um ambiente focado na comunidade de leitores, o que acaba gerando problemas de confiança em seus produtos para os clientes.

Decidimos criar esse projeto justamente para solucionar essas questões. Entendemos que os usuários buscam, além da economia, a praticidade de um processo de compra e venda simplificado, a segurança de saber a real condição do livro, e a satisfação de contribuir para um consumo sustentável. O projeto se justifica como a resposta a esses desejos, oferecendo uma experiência otimizada e um espaço dedicado para a comunidade de leitores.

# Imagens do Protótipo

<img width="1440" height="2048" alt="Frame 21" src="https://github.com/user-attachments/assets/84ebe8b5-ff57-4b96-bf68-ede4f1c78369" />
<img width="1440" height="1024" alt="Wireframe - 14" src="https://github.com/user-attachments/assets/46a20f7f-3c67-4cdf-9419-8aafb60e50a5" />
<img width="1440" height="1024" alt="Wireframe - 10" src="https://github.com/user-attachments/assets/edaeae44-c36d-44ad-b04b-8e7a5d4c7688" />
<img width="1440" height="1024" alt="Cadastro" src="https://github.com/user-attachments/assets/6f0693d1-aef6-4d0d-b5d0-72404fff56f6" />
<img width="1536" height="1194" alt="Perfil (1)" src="https://github.com/user-attachments/assets/4762f1b9-dc55-41d5-adea-7abe2a19c745" />
<img width="1536" height="2259" alt="Carrinho (1)" src="https://github.com/user-attachments/assets/7270db0d-d6df-4c12-bbaa-445b997bd105" />


# Caráter Extensionista

Este projeto tem caráter extensionista, por atender uma demanda da comunidade, por meio do desenvolvimento de um ambiente online, que facilitará a conexão entre pessoas que buscam novos livros e pessoas que desejam desapegar de seus livros. Promovendo a economia circular, o retorno do livro para a comunidade traz diversos benefícios econômicos e ecológicos.

# Explicação do Código
 - Estruturas incluídas em todas as páginas .html
<img width="576" height="187" alt="Captura de Tela 2025-10-02 às 16 13 37" src="https://github.com/user-attachments/assets/89088d64-5cdb-4016-8619-3876c734f60d" />

`<!DOCTYPE html>` → indica que o documento segue o padrão HTML5.

`<html lang="pt-BR">` → define que a língua usada na página é o português do Brasil.
 
`<meta charset="UTF-8">` → garante que caracteres especiais (acentos, cedilhas, etc.) sejam exibidos corretamente.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">` → faz a página se adaptar bem em telas de celular.

`<title>` → define o título da aba do navegador.
 
`<link rel="stylesheet" href="style.css">` → conecta o HTML ao arquivo CSS.

`<script src="script.js" defer></script>` → conecta o JavaScript, que será executado somente depois que o HTML for carregado. 

<img width="552" height="257" alt="Captura de Tela 2025-10-02 às 16 29 54" src="https://github.com/user-attachments/assets/edf5e9ff-2596-410d-b498-96b9679056f1" />

O menu é estruturado dentro da tag `<nav id="site-menu">`.

O botão de alternância usa class="menu-toggle" para abrir/fechar o menu em telas pequenas.

O título do site é exibido em `<h1 class="nome-site">`.

Os links de navegação usam `<a>` para redirecionar às páginas principais (Início, Livros, Meus Livros, Conta, Carrinho).

A classe ativo identifica qual página está em uso (exemplo: conta.html) e aplica negrito a sua fonte.

O ícone do carrinho é um `<img class="carrinho">` posicionado como link.


<img width="755" height="361" alt="Captura de Tela 2025-10-02 às 16 29 14" src="https://github.com/user-attachments/assets/dd675006-de04-4a83-86bd-f453b998da1f" />

O rodapé (`<footer>`) contém três colunas (`.rodape`):

Nome do site + slogan.

Informações de contato (endereço e e-mail).

Área de inscrição, com campo de e-mail e botão enviar.

O campo de inscrição utiliza um `<input type="email">` obrigatório (required), garantindo validação de formulário no navegador.

#### - index.html

Depois das estruturas que estão em todas as páginas, acontece a estruturação das seções de promoções e recomendações de livros

`<article>` → representa um bloco de conteúdo, usado para agrupar a seção de promoções.

`<section class="sc_promo">` → cria uma área específica para promoções, com classe sc_promo que será estilizada pelo CSS.

`<img class="promocao" src="promocao.png">` → insere uma imagem de promoção, com largura definida no CSS.

`<button class="cupom">` → botão estilizado para destacar o cupom de desconto.

`<a href="#"> Use o cupom </a>` → link dentro do botão, que pode levar a outra página ou ação.

`<img class="livros" src="livros.png">` → adiciona uma imagem de livros para complementar a promoção.

`<h2>` → título da seção, indicando "Promoções".

`<section class="livro_promo"></section>` → espaço reservado para mostrar livros em promoção, organizado pelo CSS e js.

#### - livros.html
Essa página organiza uma área de livros, com campos de busca, listagem de gêneros, seções de promoções, livros populares e os mais procurados.

A seção principal é agrupada em `<container class="pai_livros">`, que no CSS usa `display: flex; flex-direction: column;` para organizar os elementos em coluna.

O campo de busca está dentro de `<section class="busca">`, que contém um campo de pesquisa `<input class="perg" type="search">` com `placeholder="digite"`, e um botão de envio `<input class="form" type="submit" value="Buscar">`.

Os títulos das seções `<h2> Gêneros </h2>` e `<h2> Livros Populares </h2>` servem para destacar cada bloco de conteúdo. O CSS aplica margens (`margin-top, margin-left`) para espaçar os títulos.

A lista de gêneros é reservada em `<section class="generos_juntos">`, enquanto promoções aparecem em `<section class="conj_promo">`.

A parte de livros populares é organizada em `<container class="conj_pop">`, que contém `<container class="populares">` para os livros e `<section class="promo">` para promoções.

A seção final `<container class="mais_procurados">` cria o bloco de “Mais Procurados”. No CSS, `.mais_procurados` usa `display: flex; flex-direction: column;` para empilhar elementos verticalmente.

O destaque de livros mais vendidos é feito por `.livro_mais_vendido`, que define altura fixa (`height: 167px`), espaçamento externo (`margin`) e alinha os itens no rodapé da caixa com `align-items: flex-end`.


#### - meusLivros.html
A seção inicial `<section class="venda">` cria o cabeçalho “Livros à venda”, com o botão Cadastrar novo livro. No CSS, `.venda` usa `display: flex; justify-content: space-between;` para alinhar o título à esquerda e o botão à direita.

O formulário de cadastro aparece em `<div id="Popup" class="popup">`, que contém o conteúdo centralizado em `.popup-conteudo`. O botão de fechar (`<span class="fechar-popup"> &times; </span>`) permite encerrar a janela, enquanto os dados são organizados em `<container class="agrup_form">`.

O pop-up aparece e desaparece com o uso de funções no js. A função `abrirPopup()` seleciona o elemento com `id="Popup"` e altera seu estilo para `display: "block"`, fazendo a janela de cadastro aparecer na tela. A função `fecharPopup()` faz o contrário: muda o `display` para `"none"`, ocultando a janela.

No lado esquerdo do formulário, `<section class="ft_livro">` mostra a imagem (`add_livro.png`) e um botão de cadastrar.

No lado direito, `<section class="form_cad">` agrupa os campos de entrada: título, autor, número de páginas, valor, condição (com checkbox), descrição e fotos. Cada item vem dentro de `<p class="f">`, e os campos usam a classe `.formu` para padronizar estilo.

Após o formulário, há duas áreas `<container class="vendidos">`, que no CSS estão configuradas com `display: flex; justify-content: space-between;` para distribuir os livros cadastrados horizontalmente.

Cada livro é representado por `.livro_vendido`, que define altura fixa (`167px`) e usa `display: flex; align-items: flex-end;` para alinhar as informações no rodapé da caixa.

O bloco de informações adicionais aparece em `.sobre_livro h4`, com margens ajustadas.

A classe `.venda_livro` define largura (`150px`) e espaçamento lateral.

O estado de conservação do livro é destacado em `.estado`, alinhado à direita com `justify-content: flex-end;`. O rótulo de estado (`.estado h5`) tem cor de fundo dependendo da condição, letras brancas, padding e bordas arredondadas (`border-radius: 30px`).

Por fim, o bloco `.vender p` aplica espaçamento extra no texto com `margin-top: 70px`.

#### - conta.html.css
##### Perfil do Usuário
A seção principal do conteúdo é agrupada em `<section class="conta">`, que centraliza e limita a largura da página no CSS (`max-width: 1000px; margin: auto`).

No topo do perfil, `<section class="perfil_decima">` organiza lado a lado (`display: flex`) o botão de compartilhar (`.share-icon`) e o botão de editar perfil (`.editar_perfil`). 

O avatar é exibido com a classe `.avatar`, que aplica `border-radius: 50%` para criar o círculo e uma borda dourada (`border: 4px solid #f2c94c`).

As informações do usuário (nome e email) ficam dentro de `.perfil-info`, com título em `<h2>` e subtítulo em `<p>`.

##### Status do Usuário
A área de status é construída com `<section class="status">`, que usa `display: flex` no CSS para exibir os blocos lado a lado.

Cada bloco (`.status1`) contém: 

`.value` → valor principal em destaque (exemplo: número de livros ou avaliação média).

`.label` → legenda explicativa em fonte menor.

A cor de fundo dos blocos é `#eaf2ff`, com bordas arredondadas e centralização do texto.

##### Botão de Pedidos
Criado com `<button class="pedidos">Seus Pedidos</button>`.

No CSS, ocupa toda a largura (`width: 100%`) e aplica cor azul clara (`color: #32ADE6`) com sombra (`box-shadow`) para destacar.

A borda arredondada (`border-radius: 20px`) segue o padrão visual do site.

##### Bio do Usuário
A seção de bio usa `<section class="sessão">`.

No topo (`.sessão-topo`), há um título `<h3>` e um botão para editar (`button`). O CSS usa `display: flex e justify-content: space-between` para alinhar lado a lado.

O texto da bio é exibido em `<p class="bio-texto">`, estilizado com fonte menor e cor cinza (`color: #555`).

##### Gêneros Favoritos
Os gêneros são exibidos dentro da classe `.generos`.

Cada gênero recebe uma cor diferente definida no CSS:

`.generos.romance` → fundo rosa (`#f9b3d1`).

`.generos.suspense` → fundo verde (`#a8d5a2`).

`.generos.ficcao` → fundo azul (`#a3d2f0`).

Os elementos são distribuídos com `display: flex`, espaçamento (`gap`) e suporte a múltiplas linhas (`flex-wrap`).

##### Favoritos
A seção `favoritos` exibe um título (`<h2>`) e o ícone de coração (`<img>`).

A lista de livros favoritados (`.favoritos-lista`) é organizada em linha (`display: flex`), com `overflow-x: auto` para permitir rolagem horizontal caso haja muitos livros, pois por enquanto não aplicamos o map nela.

Cada capa tem largura fixa (`width: 120px`) e cantos arredondados (`border-radius: 8px`).

#### - carrinho.html
Títulos do Carrinho

`<section class="titulo_carrinho">` Agrupa os títulos da página: “Meu carrinho” e “Resumo”.

`<h2> Meu carrinho: </h2>` → título da lista de produtos.

`<h2> Resumo </h2>` → título da seção de resumo da compra.

##### Container Principal (`<container class="pai_carrinho">`)
Contém duas seções principais:

`<section class="compras">` Área destinada a exibir os itens adicionados ao carrinho.

`<section class="resumo">` Área de resumo da compra:

`<section class="caixa_resumo">` → caixa que agrupa informações:

`<p> Valor: </p>` → mostra o valor total dos produtos.

`<p> Endereço: </p>` → indica onde o usuário deve digitar o endereço.

`<input class="formu_carrinho" type="text" placeholder="Digite o endereço">` Campo de texto para digitar endereço.

`<p> Frete: </p>` → exibe o valor do frete.

`<p class="total"> Total: </p>` → valor final da compra.

##### Estilização CSS
Títulos do Carrinho → `.titulo_carrinho`:

`display: flex` → organiza os títulos horizontalmente.

`justify-content: space-between` → separa os títulos com espaço igual.

`margin-right: 300px` → afasta a seção do lado direito da página.



Itens do Carrinho → `.livro_carrinho`:

`display: flex` → alinha imagem e informações do livro em linha.

`align-items: flex-end` → alinha elementos ao final verticalmente.

`margin` → define espaço externo entre os itens.



Imagem do carrinho → `.img_livro_carrinho`:

`width: 150px` → define a largura da imagem.

`border-radius: 5px` → bordas arredondadas para suavizar o visual.



Organiza produtos → `.sobre_livro_carrinho:`

`display: flex` e `justify-content: space-between` → organiza título, autor e preço separados horizontalmente.

`width: 600px` → define largura da área de informações.

`margin-left: 15px` → separa visualmente do lado esquerdo.



Alinha preço a produtos → `.preco`:

`display: flex e align-items: flex-end` → mantém preço alinhado ao final.

`.preco p` → fonte em negrito (`font-weight: 700`) e cor azul (`#516EE3`).



Definem estilo do título e do autor→ `.carrinho_autor h6` e `p`

`margin-top e margin-bottom` controlam espaçamento.

`font-weight: 600` → negrito médio.

`color: #3E3C3C` → cor do texto.

#### - Resumo da Compra
`.caixa_resumo`:

`background-color: #829BFF` → fundo azul.

`color: white` → texto branco.

`border-radius: 20px` → cantos arredondados.

`width: 350px` e `height: 250px` → tamanho fixo da caixa.


`padding: 15px; padding-left: 30px` → cria espaço interno para conteúdo.

`margin-left: 100px` → afasta da borda esquerda.


`.formu_carrinho`:

`width: 320px` → largura do campo de texto.

`border-radius: 30px` → bordas arredondadas.

`border-style: none` → remove borda visível.

`background-color: #f8f7f7` → fundo claro.

`padding: 10px` → espaço interno.

`.total` → deixa o texto em negrito para destaque.


### - JavaScript e media queries


#### Visão Geral da Responsividade

A responsividade é implementada principalmente através de uma media query no CSS que ajusta estilos para telas com largura máxima de 768px. Essa media query modifica layouts, tamanhos de elementos e alinhamentos para dispositivos menores, como tablets e smartphones. No JavaScript, o menu responsivo é gerenciado com eventos para abrir e fechar o menu em telas menores, e arrays são usados para preencher dinamicamente conteúdos em várias páginas.

#### Implementação do Menu Responsivo via JavaScript

O código JavaScript gerencia o menu responsivo adicionando ouvintes de eventos para alternar a visibilidade do menu em telas menores.

- O evento 'DOMContentLoaded' garante que o DOM esteja carregado antes de executar o código: `document.addEventListener('DOMContentLoaded', () => { ... })`.
- Seleciona o elemento de navegação: `const nav = document.getElementById('site-menu')`.
- Seleciona o botão de alternância: `const toggle = nav.querySelector('.menu-toggle')`.
- Define uma função para alternar o atributo 'aria-expanded': `const setOpen = (open) => nav.setAttribute('aria-expanded', String(open))`.
- Adiciona ouvinte de clique no toggle para inverter o estado aberto: `toggle.addEventListener('click', () => { const open = nav.getAttribute('aria-expanded') === 'true'; setOpen(!open); })`.
- Fecha o menu ao clicar fora dele: `document.addEventListener('click', (e) => { const open = nav.getAttribute('aria-expanded') === 'true'; if (open && !nav.contains(e.target)) setOpen(false); })`.
- Fecha o menu com a tecla Escape: `document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); })`.

Essa implementação aplica-se a todas as páginas que incluem o menu de navegação, como index.html, livros.html, meusLivros.html e carrinho.html, tornando o menu acessível e responsivo.

#### Preenchimento Dinâmico de Conteúdos via Arrays no JavaScript

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

#### Responsividade na Página index.html (Início)

A página index.html é responsiva ajustando layouts de promoções e recomendados via media query.

- No CSS base, 'article' para banner: `display: flex; justify-content: space-between; padding-left: 60px; padding-right: 60px; padding-bottom: 20px; padding-top: 20px;`. O 'flex' permite empilhamento automático em telas menores.
- '.livro_promo': `display: flex; margin-left: 70px; margin-right: 70px;`. Em telas menores, itens podem quebrar linha devido ao flex.
- '.recomendados': `display: flex; flex-direction: column; padding-left: 20px; padding-right: 60px; padding-bottom: 20px; padding-top: 5px;`. Mantém coluna para empilhamento vertical.

#### Responsividade na Página livros.html (Livros)

A página livros.html ajusta seções de gêneros, promoções, populares e mais procurados para telas menores.

- '.busca': `width: 750px; margin-left: 70px; margin-top: 30px;`. Em media query, reduz margens.
- '.conj_promo': `width: 730px; margin-left: 80px; display: flex; justify-content: space-between;`. Itens podem empilhar se o espaço for insuficiente.
- '.populares': `width: 500px; margin-left: 80px; display: flex; justify-content: space-evenly; flex-direction: column;`. Mantém coluna para seções.
- '.livro_pop': `width: 500px; display: flex; justify-content: space-between;`. Em telas menores, imagens reduzem tamanho via media query.
- '.mais_procurados': `display: flex; flex-direction: column;`. Empilha itens verticalmente.

#### Responsividade na Página meusLivros.html (Meus Livros)

A página meusLivros.html  lista livros do usuário, com ajustes para empilhamento.

- Na media query: '.venda': `flex-direction: column; align-items: flex-start; margin-right: 20px; margin-left: 20px; gap: 15px; height: auto;`. Empilha elementos verticalmente.
- '.vendidos': `flex-direction: column; margin-right: 20px; margin-left: 20px; gap: 20px;`. Empilha livros.
- '.livro_vendido': `margin-left: 0; margin-top: 20px; margin-bottom: 15px; flex-direction: column; align-items: center; text-align: center; height: auto;`. Centraliza e empilha.
- '.venda_livro': `width: 120px; margin-right: 0; margin-bottom: 10px;`. Reduz tamanho da imagem.
- '.popup-conteudo': `width: 95%; height: 90%; margin: 5% auto;`. Expande popup para tela cheia.
- '.agrup_form': `flex-direction: column; gap: 20px;`. Empilha formulário.
- '.ft_livro': `margin-left: 0; width: 100%;`. Imagem ocupa largura total.
- '.form_cad': `margin-right: 0; width: 100%;`. Formulário ocupa largura total.

#### Responsividade na Página carrinho.html (Carrinho)

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

#### Ajustes Gerais de Responsividade no CSS

A media query principal aplica-se a todas as páginas: `@media (max-width: 768px) { ... }`.
- 'body': `margin-top: 25px; font-family: "Poppins"; margin: 0;`. Remove margens padrão. 
- 'nav': `display: flex; justify-content: space-between; margin-top: 20px; margin-left: 70px; margin-right: 70px;`. Ajusta para telas menores via media. 
- 'footer': `display: flex; justify-content: space-between; background-color: #7A7A7F; color: white; margin-top: 60px; padding: 30px; padding-left: 170px; padding-right: 170px;`. Empilha em telas menores devido ao flex.

# Conclusão

Após a realização da etapa da lagarta, percebemos que a criação de um site é complexa, tivemos muita dificuldade em JavaScript e no momento de organizar o código, foi um trabalho de muito aprendizado, conseguimos explorar diversas maneiras de implementar o código, e trazer um impacto na sociedade pois o projeto tinha um caráter extensionista.
