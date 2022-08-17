import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../src/Styles/App.css';

/* Components */
import Home from './components/Home/Home'
import Productos from './components/Products/Productos'


function App() {

  return (  
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<Productos/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;

/* class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
render(){
  return (  
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}
  
} */