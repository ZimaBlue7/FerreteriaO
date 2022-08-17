import React,{Component} from 'react'
import { Container } from '@mui/material'

// Styles
import '../../Styles/Home.css'

// Components
import Footer from './Footer';
import Navbar from './Navbar';


class Home extends Component{

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
            <Container>
        
            {/* Navbar */}
            
            <Navbar/>
            
            {/* Productos */}
            <section className='Footerr'>
            <Footer/>
            </section>
        
            {/* Footer */}
            <section>
        
            </section>
        
            <p className="App-intro">{this.state.apiResponse}</p>  
            
            </Container>
          )
    }
}
export default Home;
