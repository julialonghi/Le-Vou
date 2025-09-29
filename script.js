const livros = [
  { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 32,90", imagem: "livro1.png", promocao: "sim" },
  { titulo: "Leitura de Verão", autor: "Emily Henry", preco: "R$ 32,90", imagem: "livro2.png", promocao: "nao" },
  { titulo: "Daisy Jones & The Six", autor: "Taylor Jenkins Reid", preco: "R$ 32,90", imagem: "livro3.png", promocao: "sim" },
  { titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", preco: "R$ 32,90", imagem: "livro4.png", promocao: "nao" },
  { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 32,90", imagem: "livro1.png", promocao: "sim" },
  { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 32,90", imagem: "livro1.png", promocao: "sim" },
  { titulo: "Leitura de Verão", autor: "Emily Henry", preco: "R$ 32,90", imagem: "livro2.png", promocao: "nao" },
  { titulo: "Daisy Jones & The Six", autor: "Taylor Jenkins Reid", preco: "R$ 32,90", imagem: "livro3.png", promocao: "sim" },
  { titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", preco: "R$ 32,90", imagem: "livro4.png", promocao: "nao" },
  { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", preco: "R$ 32,90", imagem: "livro1.png", promocao: "sim" }
];

const generos = [
  { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" },
  { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" },
  { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" },
  { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" },
  { nome: "FANTASIA", imagem: "fant.png", link: "fantasia.html" }
];

const livrosPopulares = [
  "livro1.png",
  "livro2.png", 
  "livro3.png",
  "livro4.png"
];

const promocoes = [
  "promo1.png",
  "promo2.png",
  "promo3.png"
];

const maisProcurados = [
  { 
    imagem: "mais_vend1.png", 
    titulo: "Manual de <br> Assassinato para <br> Boas Garotas", 
    autor: "Holy Jackson", 
    avaliacao: "4.5" 
  },
  { 
    imagem: "mais_vend2.png", 
    titulo: "Six of Crows", 
    autor: "Leigh Bardugo", 
    avaliacao: "4.6" 
  },
  { 
    imagem: "mais_vend3.png", 
    titulo: "Todo Esse Tempo", 
    autor: "Mikki Daughtry", 
    avaliacao: "4.6" 
  },
  { 
    imagem: "mais_vend4.png", 
    titulo: "Trono de Vidro", 
    autor: "Sarah J. Maas", 
    avaliacao: "4.6" 
  }
];

const livrosCarrinho = [
  { 
    titulo: "Corte de Espinhos e Rosas", 
    autor: "Sarah J. Maas", 
    preco: "R$ 35,50", 
    imagem: "livro1.png" 
  },
  { 
    titulo: "Corte de Espinhos e Rosas", 
    autor: "Sarah J. Maas", 
    preco: "R$ 35,50", 
    imagem: "livro1.png" 
  },
  { 
    titulo: "Corte de Espinhos e Rosas", 
    autor: "Sarah J. Maas", 
    preco: "R$ 35,50", 
    imagem: "livro1.png" 
  }
];

const meusLivros = [
  { 
    titulo: "Harry Potter e a Pedra Filosofal", 
    autor: "J.K. Rowling", 
    preco: "R$ 30,50", 
    imagem: "livro_vender1.jpg", 
    estado: "Ótimo" 
  },
  { 
    titulo: "Harry Potter e a Pedra Filosofal", 
    autor: "J.K. Rowling", 
    preco: "R$ 30,50", 
    imagem: "livro_vender1.jpg", 
    estado: "Ótimo" 
  },
    { 
    titulo: "Harry Potter e a Pedra Filosofal", 
    autor: "J.K. Rowling", 
    preco: "R$ 30,50", 
    imagem: "livro_vender1.jpg", 
    estado: "Ótimo" 
  },
    { 
    titulo: "Harry Potter e a Pedra Filosofal", 
    autor: "J.K. Rowling", 
    preco: "R$ 30,50", 
    imagem: "livro_vender1.jpg", 
    estado: "Ótimo" 
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Menu Responsivo
  const nav = document.getElementById('site-menu')
  const toggle = nav.querySelector('.menu-toggle')

  const setOpen = (open) => nav.setAttribute('aria-expanded', String(open))

  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('aria-expanded') === 'true'
    setOpen(!open)
  })

  document.addEventListener('click', (e) => {
    const open = nav.getAttribute('aria-expanded') === 'true'
    if (open && !nav.contains(e.target)) setOpen(false)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })

  // Preenchendo os gêneros
  const generosContainer = document.querySelector(".generos_juntos");
  if (generosContainer) {
    generos.forEach(genero => {
      generosContainer.innerHTML += `
        <section class="sobre_gen">
          <a href="${genero.link}" class="genero"> <img src="${genero.imagem}"> </a>
          <h5> ${genero.nome} </h5>
        </section>
      `;
    });
  }

  // Preenchendo as promoções
  const promoContainer = document.querySelector(".conj_promo");
  if (promoContainer) {
    promocoes.slice(0, 2).forEach(promo => {
      promoContainer.innerHTML += `<img src="${promo}">`;
    });
  }

  // Preenchendo livros populares
  const popularesContainer = document.querySelector(".populares");
  if (popularesContainer) {
    // Primeira seção de livros populares
    const primeiraSecao = document.createElement("section");
    primeiraSecao.className = "livro_pop";
    livrosPopulares.forEach(livro => {
      primeiraSecao.innerHTML += `<img class="pop_livros" src="${livro}">`;
    });
    popularesContainer.appendChild(primeiraSecao);

    // Segunda seção de livros populares (repetindo os mesmos)
    const segundaSecao = document.createElement("section");
    segundaSecao.className = "livro_pop";
    livrosPopulares.forEach(livro => {
      segundaSecao.innerHTML += `<img class="pop_livros" src="${livro}">`;
    });
    popularesContainer.appendChild(segundaSecao);
  }

  // Preenchendo promoção lateral
  const promoLateral = document.querySelector(".promo");
  if (promoLateral && promocoes[2]) {
    promoLateral.innerHTML = `<img src="${promocoes[2]}">`;
  }

  // Preenchendo mais procurados
  const maisProcuradosContainer = document.querySelector(".mais_procurados");
  if (maisProcuradosContainer) {
    maisProcurados.forEach(livro => {
      maisProcuradosContainer.innerHTML += `
        <section class="livro_mais_vendido">
          <img src="${livro.imagem}">
          <div class="sobre_livro">
            <p> ${livro.titulo} </p>
            <h6> - ${livro.autor} </h6> 
            <section class="avaliacao">
              <img src="estrela.png">
              <p> ${livro.avaliacao} </p>
            </section>
          </div>
        </section>
      `;
    });
  }

  // Preenchendo os livros em promoção e recomendados 
  const promo = document.querySelector(".livro_promo");
  const recom = document.querySelector(".grid-recomendados");

  if (promo) {
    livros.filter(a => a.promocao === "sim").forEach(a => {
      promo.innerHTML += `
        <img class="promo_livros" src="${a.imagem}" alt="${a.titulo}">
      `;
    });
  }

  if (recom) {
    livros.forEach(a => {
      recom.innerHTML += `
        <figure class="livro_recom">
          <img class="recom_livros" src="${a.imagem}" alt="${a.titulo}">
          <figcaption>
            <p class="titulo">${a.titulo}</p>
            <p class="autor">- ${a.autor}</p>
            <p class="valor">${a.preco}</p>
          </figcaption>
        </figure>
      `;
    });
  }

  // Preenchendo carrinho
  const comprasContainer = document.querySelector(".compras");
  if (comprasContainer) {
    livrosCarrinho.forEach(livro => {
      comprasContainer.innerHTML += `
        <section class="livro_carrinho">
          <img class="img_livro_carrinho" src="${livro.imagem}">
          <div class="sobre_livro_carrinho">
            <section class="carrinho_autor">
              <p> ${livro.titulo} </p>
              <h6> - ${livro.autor} </h6> 
            </section>
            <section class="preco">
              <p> ${livro.preco}</p>
            </section>
          </div>
        </section>
      `;
    });
  }

  // Preenchendo meus livros
  const vendidosContainers = document.querySelectorAll(".vendidos");
  if (vendidosContainers.length > 0) {
    let livroIndex = 0;
    vendidosContainers.forEach(container => {
      container.innerHTML = "";
      for (let i = 0; i < 2 && livroIndex < meusLivros.length; i++) {
        const livro = meusLivros[livroIndex];
        const estadoClass = livro.estado === "Ótimo" ? "#34C759" : 
                           livro.estado === "Bom" ? "#FFB800" : "#FF6B6B";
        
        container.innerHTML += `
          <section class="livro_vendido">
            <img class="venda_livro" src="${livro.imagem}">
            <section class="vender">
              <div class="estado">
                <h5 style="background-color: ${estadoClass}"> ${livro.estado} </h5>
              </div>
              <div class="sobre_livro">
                <p> ${livro.titulo} </p>
                <h6> - ${livro.autor} </h6> 
                <h4> ${livro.preco} </h4>
              </div>
            </section>
          </section>
        `;
        livroIndex++;
      }
    });
  }
})

function abrirPopup() {
  document.getElementById("Popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("Popup").style.display = "none";
}

