import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import PageDark from "./components/PageDark";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Class01 from "./screens/Class01";
import Class01Details from "./screens/Class01Details";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import HomeDark from "./screens/HomeDark";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/quiero-viviendas"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/dark"
          render={() => (
            <PageDark>
              <HomeDark />
            </PageDark>
          )}
        />
        <Route
          exact
          path="/quiero-inquilinos"
          render={() => (
            <PageDark>
              <HomeDark />
            </PageDark>
          )}
        />

      </Switch>
    </Router>
  );
}

export default App;
