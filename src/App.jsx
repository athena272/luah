import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Alert from "@mui/material/Alert";
import Hamburger from "hamburger-react";
import * as Popover from "@radix-ui/react-popover";

import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./App.css";

/* Todos os produtos */
const products = [
  {
    id: 1,
    name: "T-shirt Seja Forte",
    price: 40.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/sejaForte.jpg",
      "media/roupas/sejaForte2.jpeg",
    ],
    description: "🧣 T-shirt Seja Forte.",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 2,
    name: "T-shirt Flores",
    price: 40.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/Flores.jpeg",
      "media/roupas/Flores2.jpeg",
    ],
    description: "🧣 T-shirt Flores.",
    descSize: "📐 Tamanho GG disponível",
  },
  {
    id: 3,
    name: "T-shirt Flores Amarelas",
    price: 40.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/floresAmarelas.jfif",
      "media/roupas/floresAmarelas2.jfif",
    ],
    description: "🧣 T-shirt Flores Amarelas.",
    descSize: "📐 Tamanho G disponível",
  },
  {
    id: 4,
    name: "T-shirt corações",
    price: 40.0,
    quant: 50,
    size: ["P"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/coracoes.jfif",
      "media/roupas/coracoes2.jfif",

    ],
    description: "🧣 T-shirt corações",
    descSize: "📐 Tamanho P disponível",
  },
  {
    id: 5,
    name: "T-shirt Confio, Aceito e Agradeço!",
    price: 40.0,
    quant: 50,
    size: ['GG'],
    categories: ["tShirt"],
    image: [
      "media/roupas/confioAgradeco.jfif",
      "media/roupas/confioAgradeco2.jfif",
    ],
    description:
      "🧣 T-shirt Confio, Aceito e Agradeço!",
    descSize: "📐 Tamanho GG disponível",
  },
  {
    id: 6,
    name: "T-shirt Protege-me como a menina dos teus olhos",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt"],
    image: [
      "media/roupas/meninaOlhos.jfif",
      "media/roupas/meninaOlhos2.jpeg",
      "media/roupas/meninaOlhos3.jpeg",
    ],
    description:
      "🧣 T-shirt Protege-me como a menina dos teus olhos.",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 7,
    name: "T-shirt se permita sonhar!",
    price: 40.0,
    quant: 50,
    size: ["P"],
    categories: ["tShirt"],
    image: [
      "media/roupas/permitaSonhar.jpeg",
      "media/roupas/permitaSonhar2.jpeg",
    ],
    description: "🧣 T-shirt se permita sonhar!",
    descSize:
      "📐 Tamanho P disponível",
  },
  {
    id: 8,
    name: "T-shirt vida leve!",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt"],
    image: [
      "media/roupas/vidaLeve.jpeg",
      "media/roupas/vidaLeve2.jpeg",
    ],
    description: "🧣 T-shirt vida leve!",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 9,
    name: "T-shirt crie motivos para sorrir!",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt"],
    image: [
      "media/roupas/motivosSorrir.jpeg"
    ],
    description: "🧣 T-shirt crie motivos para sorrir!",
    descSize:
      "📐 Tamanho M disponível",
  },
  {
    id: 10,
    name: "T-shirt voe alto!",
    price: 40.0,
    quant: 50,
    size: ["G", "GG"],
    categories: ["tShirt"],
    image: [
      "media/roupas/voeAlto.jpeg"
    ],
    description:
      "🧣 T-shirt voe alto!",
    descSize:
      "📐 Tamanhos G e GG disponíveis",
  },
  {
    id: 11,
    name: "T-shirt não tenha medo, tenha fé!",
    price: 40.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt"],
    image: [
      "media/roupas/medoFe.jpeg", 
    ],
    description: "🧣 T-shirt não tenha medo, tenha fé!",
    descSize: "📐 Tamanho GG disponível",
  },
  {
    id: 12,
    name: "T-shirt sinta a emoção!",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: ["media/roupas/sintaEmocao.jpeg"],
    description: "🧣 T-shirt sinta a emoção!",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 13,
    name: "T-shirt margaridas",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/margaridas.jpeg",
    ],
    description: "🧣 T-shirt margaridas",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 14,
    name: "Regata bem me quero!",
    price: 38,
    quant: 50,
    size: ["M"],
    categories: ["vestido", "novidades"],
    image: [
      "media/roupas/bemQuero.jpeg",
    ],
    description: "🧣 Regata bem me quero.",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 15,
    name: "Regata seja forte!",
    price: 38.0,
    quant: 50,
    size: ["M"],
    categories: ["calcaSaia", "novidades"],
    image: [
      "media/roupas/sejaForteRegata.jpeg",
    ],
    description: "🧣 Regata seja forte!",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 16,
    name: "Regata rosa",
    price: 38.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "queridinhos"],
    image: ["media/roupas/regataRosa.jpeg"],
    description:
      "🧣 Regata rosa",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 17,
    name: "Regata preta",
    price: 38.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "queridinhos"],
    image: ["media/roupas/regataPreta.jpeg"],
    description:
      "🧣 Regata preta",
    descSize: "📐 Tamanho M disponível",
  },
  {
    id: 18,
    name: "T-shirt para cada coisa, o seu tempo!",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/seuTempo.jpeg",
    ],
    description: "🧣 T-shirt para cada coisa, o seu tempo!",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 19,
    name: "T-shirt regata branca",
    price: 40.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/regataBranca.jpeg",
    ],
    description: "🧣 T-shirt regata branca",
    descSize: "📐 Tamanho GG disponível.",
  },
  {
    id: 20,
    name: "Blusinha florida lilás",
    price: 55.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/blusaRoxa.jpeg",
      "media/roupas/blusaRoxa2.jpeg",
    ],
    description: "🧣 Blusinha florida roxa",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 21,
    name: "Blusinha florida margaridas",
    price: 55.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/cinzaMargaridas.jpeg",
      "media/roupas/cinzaMargaridas2.jpeg",
    ],
    description: "🧣 Blusinha florida margaridas",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 22,
    name: "Blusinha corações rosa",
    price: 55.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/coracoesRosa2.jpeg",
      "media/roupas/coracoesRosa.jpeg",
    ],
    description: "🧣 Blusinha corações rosa",
    descSize: "📐 Tamanho GG disponível.",
  },
  {
    id: 23,
    name: "Blusinha borboleta vermelha",
    price: 55.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/borboleta.jpeg",
      "media/roupas/borboleta2.jpeg",
    ],
    description: "🧣 Blusinha borboleta vermelha",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 24,
    name: "Blusinha flores vermelha",
    price: 55.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/floresVermelha.jpeg",
      "media/roupas/floresVermelha2.jpeg",
    ],
    description: "🧣 Blusinha flores vermelha",
    descSize: "📐 Tamanho GG disponível.",
  },
  {
    id: 25,
    name: "Blusinha corações bege",
    price: 55.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/coracoesBege.jpeg",
      "media/roupas/coracoesBege2.jpeg",
    ],
    description: "🧣 Blusinha corações bege",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 26,
    name: "Blusinha corações marrom",
    price: 55.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/coracoesMarrom.jpeg",
      "media/roupas/coracoesMarrom2.jpeg",
    ],
    description: "🧣 Blusinha corações marrom",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 27,
    name: "Blusinha borboletas escura",
    price: 55.0,
    quant: 50,
    size: ["GG"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/borboletasEscura.jpeg",
      "media/roupas/borboletasEscura2.jpeg",
    ],
    description: "🧣 Blusinha borboletas escura",
    descSize: "📐 Tamanho GG disponível.",
  },
  {
    id: 28,
    name: "Blusinha poderosa",
    price: 40.0,
    quant: 50,
    size: ["M"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/blusinhaPoderosa.jpeg",
      "media/roupas/blusinhaPoderosa2.jpeg",
    ],
    description: "🧣 Blusinha poderosa",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 29,
    name: "Blusinha inspire amor!",
    price: 40.0,
    quant: 50,
    size: ["P"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/inspireAmor2.jpeg",
      "media/roupas/inspireAmor.jpeg",
    ],
    description: "🧣 Blusinha inspire amor!",
    descSize: "📐 Tamanho P disponível.",
  },
  {
    id: 30,
    name: "Blusinha flores laranja",
    price: 55.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/floresLaranja2.jpeg",
      "media/roupas/floresLaranja.jpeg",
    ],
    description: "🧣 Blusinha flores laranja",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 31,
    name: "Blusinha lisa lilás",
    price: 45.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/lisaLisas.jpeg",
      "media/roupas/lisaLisas2.jpeg",
    ],
    description: "🧣 Blusinha lisa lilás",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 32,
    name: "Blusinha flores amarela",
    price: 55.0,
    quant: 50,
    size: ["G"],
    categories: ["tShirt", "novidades"],
    image: [
      "media/roupas/floresAmaralela.jpeg",
      "media/roupas/floresAmaralela2.jpeg",
    ],
    description: "🧣 Blusinha flores amarela",
    descSize: "📐 Tamanho G disponível.",
  },
];

/* Novidades */
const novidades = products.filter((product) =>
  product.categories.includes("novidades")
);

/* Queridinhos */
const queridinhos = products.filter((product) =>
  product.categories.includes("queridinhos")
);

/* Body / Cropped */
const tShirt = products.filter((product) =>
  product.categories.includes("tShirt")
);

/* Calça / Saia */
const calcaSaia = products.filter((product) =>
  product.categories.includes("calcaSaia")
);

/* Vestidos */
const vestido = products.filter((product) =>
  product.categories.includes("vestido")
);

function App() {
  const [cartShop, setCartShop] = useState([]);
  const countCart = cartShop.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState();
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);
  const [name, setName] = useState("");

  /* Adiciona item no carrinho de compras */
  function addItem(item, numSize) {
    if (numSize !== "") {
      const nArray = [...cartShop];
      const nIndex = nArray.findIndex(
        (product) => product.id == item.id && product.size == numSize
      );
      if (nIndex >= 0) {
        nArray[nIndex].price += nArray[nIndex].price / nArray[nIndex].count;
        nArray[nIndex].count += 1;
        setCartShop(nArray);
      } else {
        setCartShop([
          ...nArray,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            size: numSize,
            image: item.image,
            count: 1,
          },
        ]);
      }
    }
  }

  /* Remove item no carrinho de compras */
  function removeItem(item, numSize) {
    const nArray = [...cartShop];
    const nIndex = nArray.findIndex(
      (product) => product.id == item.id && product.size == numSize
    );
    if (nIndex >= 0) {
      nArray[nIndex].price -= nArray[nIndex].price / nArray[nIndex].count;
      nArray[nIndex].count -= 1;
    }
    if (item.count === 0) {
      nArray.splice(nIndex, 1);
    }
    setCartShop(nArray);
  }

  /* Alerta de adição de itens no carrinho */
  const showAlert = (numSize) => {
    if (numSize !== "") {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleClickOpen = (item) => {
    setOpen1(true);
    setProd(item);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  /* SEARCH */

  function searchFilter(valueSearch) {
    setProds(
      products.filter((prod) => prod.name.toLowerCase().includes(valueSearch))
    );
    setName(valueSearch);
  }

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
        addItem={addItem}
        searchFilter={searchFilter}
      />
      <BrowserRouter>
        <div className="filter">
          <Link className="filterLink" to="/">
            Todos os produtos
          </Link>
          {/* <Link className="filterLink" to="/body-cropped">
            T-shirt
          </Link>
          <Link className="filterLink" to="/calças-saias">
            Calças / Saias
          </Link>
          <Link className="filterLink" to="/vestidos">
            Vestidos
          </Link> */}
        </div>

        <Popover.Root>
          <Popover.Trigger className="hamburguer">
            <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent">
              <Popover.Close className="filterClose" aria-label="Close">
                <h3 className="filterTitle">Categorias</h3>
                <div className="filter1">
                  <Link to="/" className="filterEsc">
                    ● Todos os produtos
                  </Link>
                  {/* <Link to="/body-cropped" className="filterEsc">
                    ● T-shirt
                  </Link>
                  <Link to="/calças-saias" className="filterEsc">
                    ● Calças / Saias
                  </Link>
                  <Link to="/vestidos" className="filterEsc">
                    ● Vestidos
                  </Link> */}
                </div>
              </Popover.Close>

              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {prods.length === products.length && <Slide />}
                {name === "" ? (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title="Todos os Produtos"
                  />
                ) : (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title={"Resultado de busca para '" + name + "'"}
                  />
                )}
              </>
            }
          ></Route>
          <Route
            path="/body-cropped"
            element={
              <Product
                products={tShirt}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="T-shirt"
              />
            }
          ></Route>
          <Route
            path="/calças-saias"
            element={
              <Product
                products={calcaSaia}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Calças / Saias"
              />
            }
          ></Route>
          <Route
            path="/vestidos"
            element={
              <Product
                products={vestido}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Vestidos"
              />
            }
          ></Route>
          <Route
            path="/novidades"
            element={
              <Product
                products={novidades}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Novidades"
              />
            }
          ></Route>
          <Route
            path="/queridinhos"
            element={
              <Product
                products={queridinhos}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Queridinhos"
              />
            }
          ></Route>
        </Routes>

        {error && (
          <Alert className="alertAdd" variant="filled" severity="error">
            Informe um tamanho
          </Alert>
        )}

        {open && (
          <Alert className="alertAdd" variant="filled" severity="success">
            Produto adicionado no carrinho
          </Alert>
        )}

        <Footer />

        {open1 && (
          <Modal
            item={prod}
            open={open1}
            handleClose={handleClose}
            addItem={addItem}
            showAlert={showAlert}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
