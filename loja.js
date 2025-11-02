const substituir = document.querySelector(".corpo-substituir");
const botaoMudar1 = document.querySelector(".botao-home");
const botaoMudar2 = document.querySelector(".botao-loja");
const botaoMudar3 = document.querySelector(".botao-sobre");
const botaoMudar4 = document.querySelector(".botao-contato");

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 8000
});

/* PARTE DINÂMICA HOME */
botaoMudar1.addEventListener("click", () => {
  substituir.innerHTML = `
    <section class="banner"></section><!--FIM DO BANNER-->
    <section class="destaques1">
      <h1>CATEGORIAS DESTAQUES</h1>
      <div class="embrulho-destaque">
        <a class="caixa-destaque" href="mercado.html">
          <h1>ESPORTES</h1>
          <div style="background-image: url(imagens/sport-shoe.png);" class="icone"></div>
        </a>
        <a class="caixa-destaque" href="mercado.html">
          <h1>CASUAIS</h1>
          <div style="background-image: url(imagens/shoe.png);" class="icone"></div>
        </a>
        <a class="caixa-destaque" href="mercado.html">
          <h1>BOTAS</h1>
          <div style="background-image: url(imagens/boot.png);" class="icone"></div>
        </a>
      </div>
    </section><!--FIM DO DESTAQUES CATEGORIAS-->

    <section class="destaques2">
      <h1>Produtos Destaques</h1>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="imagens/esportista1.png">
            <h3>Tênis Esportista</h3>
            <p>R$ 999,90</p>
            <a href="mercado.html">Checar</a>
          </div>
          <div class="swiper-slide">
            <img src="imagens/sapato1.png">
            <h3>Sapato</h3>
            <p>R$ 699,90</p>
            <a href="mercado.html">Checar</a>
          </div>
          <div class="swiper-slide">
            <img src="imagens/teniscasual1.png">
            <h3>Tênis Casual</h3>
            <p>R$ 259,90</p>
            <a href="mercado.html">Checar</a>
          </div>
          <div class="swiper-slide">
            <img src="imagens/sandalia1.png">
            <h3>Sandália</h3>
            <p>R$ 149,90</p>
            <a href="mercado.html">Checar</a>
          </div>
          <div class="swiper-slide">
            <img src="imagens/bota1.png">
            <h3>Bota</h3>
            <p>R$ 329,90</p>
            <a href="mercado.html">Checar</a>
          </div>
        </div>
      </div>
    </section><!--FIM DO DESTAQUES PRODUTOS-->
  `;

  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 8000
  });
});

/* PARTE DINÂMICA MERCADO */
botaoMudar2.addEventListener("click", () => {
  substituir.innerHTML = `
    <section class="corpo-mercado">
      <sidebar>
        <h3>Categorias</h3>
        <ul>
          <li><span class="categoria casuais">Tênis Casuais</span></li>
          <li><span class="categoria">Tênis Esportistas</span></li>
          <li><span class="categoria">Botas</span></li>
          <li><span class="categoria">Sandálias</span></li>
          <li><span class="categoria">Sapatos Sociais</span></li>
        </ul>
      </sidebar>

      <div class="produtos">
        <div id="teniscasual" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/teniscasual1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Tênis Pra Troxa</h4>
            <span class="preco">259,90</span>
          </div>
        </div>

        <div id="sapato" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/sapato1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Sapato de Pisar em Pobre</h4>
            <span class="preco">R$ 699,90</span>
          </div>
        </div>

        <div id="bota" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/bota1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Bota Horrorosa</h4>
            <span class="preco">R$ 329,90</span>
          </div>
        </div>

        <div id="sandalia" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/sandalia1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Sandália de Jesus</h4>
            <span class="preco">R$ 149,90</span>
          </div>
        </div>

        <div id="tenisesportista" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/esportista1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Tênis de Otário</h4>
            <span class="preco">R$ 999,90</span>
          </div>
        </div>

        <div id="sandalia" class="produto">
          <div class="comprar-carro">
            <div class="carrinho-produto"></div>
            <div class="comprar"><span>Compre Agora</span></div>
          </div>
          <div style="background: url(imagens/sandalia1.png) center center / cover no-repeat;" class="imagem-produto"></div>
          <div class="produto-info">
            <h4>Sandália Casual Fit</h4>
            <span class="preco">R$ 149,90</span>
          </div>
        </div>
      </div>
    </section>
  `;

  const produtos = document.querySelectorAll(".produto");
  const carrinho = document.querySelector(".caixote-estoque");

  produtos.forEach(produto => {
    const comprarCarro = produto.querySelector(".comprar-carro");
    const btnCarrinho = produto.querySelector(".carrinho-produto");
    const nome = produto.querySelector(".produto-info h4").innerText;
    const preco = produto.querySelector(".produto-info .preco").innerText;
    const imagem = produto.querySelector(".imagem-produto").style.background;

    produto.addEventListener("mouseover", () => {
      comprarCarro.style.display = "flex";
    });
    produto.addEventListener("mouseout", () => {
      comprarCarro.style.display = "none";
    });

    btnCarrinho.addEventListener("click", () => {
      const novoProduto = document.createElement("div");
      novoProduto.classList.add("produto-carrinho");
      novoProduto.innerHTML = `
        <div class="imagem-produto-carrinho"></div>
        <div class="info-produto">
          <h3 class="nome">${nome}</h3>
          <span class="preco">${preco.replace("R$", "").trim()}</span>
          <input class="quantidade" type="number" value="1" min="1">
        </div>
        <button class="remover">✖</button>
      `;
      novoProduto.querySelector(".imagem-produto-carrinho").style.background = imagem;
      carrinho.appendChild(novoProduto);
      AtualizarEventosCarrinho();
      AtualizarValor();
    });
  });

  /* Lógica do Carrinho */
  function AtualizarEventosCarrinho() {
    const removedor = document.querySelectorAll(".remover");
    removedor.forEach(btn => {
      btn.removeEventListener("click", removerProduto);
      btn.addEventListener("click", removerProduto);
    });

    const quantidadeProduto = document.querySelectorAll(".quantidade");
    quantidadeProduto.forEach(input => {
      input.removeEventListener("input", AtualizarValor);
      input.addEventListener("input", AtualizarValor);
    });
  }

  function removerProduto(e) {
    e.target.parentElement.remove();
    AtualizarValor();
  }

  function AtualizarValor() {
    let precoTotal = 0;
    const produtosCarrinho = document.querySelectorAll(".produto-carrinho");

    produtosCarrinho.forEach(produto => {
      const preco = parseFloat(produto.querySelector(".preco").innerText.replace(",", "."));
      const quantidade = parseInt(produto.querySelector(".quantidade").value);
      precoTotal += preco * quantidade;
    });

    precoTotal = precoTotal.toFixed(2);
    document.querySelector(".total span").innerText = precoTotal;
  }

  AtualizarEventosCarrinho();
  AtualizarValor();
});

/* PARTE DINÂMICA SOBRE */
botaoMudar3.addEventListener("click", () => {
  substituir.innerHTML = `
    <section class="sobre">
      <div class="historia">
        <h1>Nossa História</h1>
        <p>Há alguns anos, um jovem apaixonado por design e estilo masculino percebeu algo: homens procuram mais do que apenas calçados — procuram confiança, conforto e uma forma de expressar quem são através do que vestem nos pés.
        Foi assim que nasceu a Vértice, uma marca criada para homens que não se contentam com o comum. Cada par de sapatos é pensado com cuidado, combinando materiais de alta qualidade, acabamentos impecáveis e design que acompanha a vida urbana moderna.
        Nossa missão vai além de vender calçados: queremos que cada passo de quem usa Vértice seja firme, elegante e memorável. Seja em uma reunião importante, em um passeio pela cidade ou em momentos que definem histórias, nossos sapatos acompanham você — no topo, sempre.
        Vértice: Porque cada passo importa.</p>
      </div>
      <div class="conceitos">
        <div class="visao">
          <h1>Visão</h1>
          <div style="background: url(imagens/shared-vision.png) center center / cover no-repeat;" class="icone"></div>
        </div>
        <div class="missao">
          <h1>Missão</h1>
          <div style="background: url(imagens/mission.png) center center / cover no-repeat;" class="icone"></div>
        </div>
      </div>
    </section>
  `;

  const visao = document.querySelector(".visao");
  const missao = document.querySelector(".missao");
  let visaoVirada = false;
  let missaoVirada = false;

  visao.addEventListener("click", function () {
    gsap.to(".visao", {
      rotationY: "+=360",
      duration: 1
    });

    if (!visaoVirada) {
      visao.innerHTML = `
        <p>Ser referência nacional em calçados masculinos, reconhecida por design exclusivo, excelência em materiais e experiência de compra diferenciada, inspirando homens a se destacarem com estilo e segurança.</p>
      `;
      visaoVirada = true;
    } else {
      visao.innerHTML = `
        <h1>Visão</h1>
        <div style="background: url(imagens/shared-vision.png) center center / cover no-repeat;" class="icone"></div>
      `;
      visaoVirada = false;
    }
  });

  missao.addEventListener("click", function () {
    gsap.to(".missao", {
      rotationY: "+=360",
      duration: 1
    });

    if (!missaoVirada) {
      missao.innerHTML = `
        <p>Oferecer calçados masculinos de alta qualidade que unem conforto, estilo e sofisticação, proporcionando confiança e elegância em cada passo do dia a dia dos nossos clientes.</p>
      `;
      missaoVirada = true;
    } else {
      missao.innerHTML = `
        <h1>Missão</h1>
        <div style="background: url(imagens/mission.png) center center / cover no-repeat;" class="icone"></div>
      `;
      missaoVirada = false;
    }
  });
});

/* PARTE DINÂMICA CONTATO */
botaoMudar4.addEventListener("click", () => {
  substituir.innerHTML = `
    <section class="corpo-contato">
      <h1>Entre em Contato</h1>
      <form class="formulario-contato">
        <div class="embrulho-enviar">
          <input type="text" required placeholder="Nome Completo">
          <input type="email" required placeholder="Email">
        </div>
        <textarea required placeholder="Digite sua mensagem"></textarea>
        <div class="alinhar"><button>Enviar</button></div>
      </form>
    </section>
  `;
});

/* FECHAR E APARECER CARRINHO */
const botaoCarrinho = document.querySelector(".carrinho");
const aparecerCarrinho = document.querySelector(".carrinho-container");
const fecharCarrinho = document.querySelector(".fechar");

botaoCarrinho.addEventListener("click", () => {
  gsap.to(aparecerCarrinho, {
    y: "-107%",
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });
});

fecharCarrinho.addEventListener("click", () => {
  gsap.to(aparecerCarrinho, {
    y: "108%",
    opacity: 1,
    duration: 1.5,
    ease: "power2.out"
  });
});
