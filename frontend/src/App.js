import React from "react";
import Header from "./components/Header.component";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.component";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
