import React, { Component, Fragment } from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Container } from "./pages/Home/styles";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <GlobalStyle />
          <Header />
          <Routes />
        </Container>
      </Fragment>
    );
  }
}

export default App;
