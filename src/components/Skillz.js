

import React,{Component}  from 'react';
import react from '../images/React.png';
import jst from '../images/js.png';
import net from '../images/net.svg';
import Html from '../images/html.png';
import ts from  '../images/ts.png';




class Skillz extends React.Component  {
    constructor(props) {
        super(props);
        this.state={
            showMe:false,
         };
          
          }
        operation(){
        
          this.setState({
            showMe:! this.state.showMe
        
          });
          
        }
        
        
    render() { 
      
        
     
        return(
            <section className="page-section" id="services">
             

            <div className="container">
          <h2 className="text-center mt-10 mb-4 h1">Skillz</h2>
          <hr className="divider my-4" />
          <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                            <div className="skillCard" > <img className="skillCard1" src={react} /> </div>     
                                      <h3 className="h4 mb-2">React Hooks</h3>
                      <p className="text mb-0"style={{color:"#ffffff"}}>I basicly only code in react hooks and I am very good at it</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >  <img src={Html} className="skillCard" /></div>
  
        <h3 className="h4 mb-2">Html/CSS</h3>
                      <p className="text mb-0" style={{color:"white",}}>Very good understanding but loeth. I want a challange</p>
                
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >   <img src={jst} className="skillCard" /></div>
  
  
  <h3 className="h4 mb-2">Javascript/jquery</h3>
                      <p className="text mb-0"style={{color:"#ffffff"}}>I really like jquery and i would easely say thats where my greatest Skillz catagory lies under. Atleast a month a go I would, but I realy like React and will probably say that is it soon. </p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >    <img src={ts} className="skillCard" /></div>
                      <h3 className="h4 mb-2">React Native</h3>
                      <p className="text mb-0"style={{color:"#ffffff"}}>Good understanding and I just created a app using react native soon to be released at play store</p>
                  </div>
              </div>
          </div>
      </div>


  </section>  );
    }
}
 
export default Skillz