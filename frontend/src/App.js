import React from "react";
import Header from "./components/Header.component";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.component";
import HomeScreen from "./screens/HomeScreen.component";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
