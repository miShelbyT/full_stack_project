import { Switch, Route, Link } from 'react-router-dom'
import Bye from './components/Bye';
import Hi from './components/Hi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from my new project</h1>
        <Link to="/hi">click for hi</Link>
        <br></br>
        <Link to="/bye">click for bye</Link>
        {/* <Link to="/">click for home</Link> */}
      </header>
      <Switch>
        <Route path="/hi">
          <Hi />
        </Route>

        <Route path="/bye">
          <Bye />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
