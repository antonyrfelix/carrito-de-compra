import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import "./App.css";
import ProductosPage from "./pages/productos";
import HomePage from "./pages/home";
import Carrito from "./pages/carrito";
import Nosotros from "./pages/nosotros";
export default function App() {
  const links = [
    {
      nombre: "Productos",
      url: "/productos",
    },
    {
      nombre: "Nosotros",
      url: "/nosotros",
    },
    {
      nombre: "Carrito de compras",
      url: "/carrito-de-compra",
    },
    {
      nombre: "Cuenta",
      url: "/cuenta",
    },
  ];
  return (
    <Router>
      <div className="container">
        <div className="main-container">
          <Header linksHeader={links} />
          <div className="pages">
            <Switch>
              <Route path="/Productos">
                <ProductosPage />
              </Route>
              <Route path="/carrito-de-compra">
                <Carrito />
              </Route>
              <Route path="/nosotros">
                <Nosotros />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
