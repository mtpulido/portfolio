import './App.css';
import { Route, Switch } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./screens/home/Home"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          
          <Route path="/">
        <Home />
          </Route>
      
          

      </Switch>
      </Layout>
    </div>
  );
}

export default App;
