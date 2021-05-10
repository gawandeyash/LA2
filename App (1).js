import React ,{Component} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import v1 from './v1.mp4'





class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      
      
      
     
      
  };



};


render(){

  return (
<div> 

  <div>
    Image 1
  </div>
  <br></br>

  <img src={img1} width="40%" height="300px"></img>

  <br></br> 
  <br></br> 

  <img src={img2} width="40%" height="300px"></img>

  <br></br>  <br></br> 

  <video src={v1} width="750" height="500" controls>
    </video>



</div>

  );

}
  
}

export default App;

