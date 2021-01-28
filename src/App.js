import React, { Component } from 'react';
import Info from './components/Info';
import Header from './components/header';
import Github from './components/github';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';
import './scss/style.scss';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>






class App extends Component{
constructor(){
super();
  this.state={
    showMe:true,
    post: [
      { id: 1, src: "./images/perdyg.svg" },
      
    ] };
  
  }
operation(){

  this.setState({
    showMe:! this.state.showMe

  });
  
}

render() {
  const { search } = this.state;
  const bootstrap = require('bootstrap')
  return (
    <div className="App" >
               <Nav/>  

         
        <Header/>
          <Info/> 

		 <Github data={this.state.post}/>

		 <ContactInfo />
          <Footer/>
       
    </div>
  )
}

}
export default App;
