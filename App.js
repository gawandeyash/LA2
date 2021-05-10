import React, {components} from 'react';
import './App.css';
import us from './components/us';
import ReactDOM from 'react-dom';
 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Yash" />
      <Welcome name="LA2" />
      <Welcome name="2018BTECS00113" />
      <us></us>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

// import React ,{Component} from 'react';
// import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
// import './App.css';

// // import Form from './components/form.js'


// class App extends Component{

//   constructor(props){
//     super(props);

//     this.state = {
      
      
//         name:null,
//         branch:null,
//         prn:null,
//         clg:null,
//         info:null
     
      
//   };
//   this.nameHandler=this.nameHandler.bind(this);
//   this.branchHandler=this.branchHandler.bind(this);
//   this.prnHandler=this.prnHandler.bind(this);
//   this.clgHandler=this.clgHandler.bind(this);
//   this.submit=this.submit.bind(this);


// };

// nameHandler(event){
 
//   this.setState({
//     name:event.target.value
//   });
//   console.log(this.state.name);

// }
// branchHandler(event){
 
//   this.setState({
//     branch:event.target.value
//   });

// }
// prnHandler(event){
 
//   this.setState({
//     prn:event.target.value
//   });

// }
// clgHandler(event){
 
//   this.setState({
//     clg:event.target.value
//   });

// }
// submit(){

//   window.location.href="/display"




// }

// render(){

//   return (


//         <div>
//           <h1>Yash Gawande(2018BTECS00113)</h1>
//           <div>  
//              <br></br> <br></br>
//             <div id="header" className="yash">
//                 Details
//             </div>

//             <br></br>
//             <br></br>
//             <br></br>

//              <div id="form1" className="yash">

//              <form>
//                 <label> Enter your Name :</label> <br></br>
//                 <input type="text" onChange={this.nameHandler} ></input><br></br><br></br>
//                 <label> Branch :</label> <br></br>
//                 <input type="text"  onChange={this.branchHandler} ></input> <br></br><br></br>
//                 <label> PRN :</label> <br></br>
//                 <input type="text" onChange={this.prnHandler} ></input> <br></br><br></br>
//                 <label> Mobile number :</label> <br></br>
//                 <input type="text"  onChange={this.clgHandler}></input>
//             </form>
//             <br></br><br></br>
           
//             </div>
          

//             <div className="yash">
//              <br></br><br></br>
//               User's data 
//             </div > 
//            <div id="display" className="yash">
//             <label> Enter your Name :</label> <br></br>
//                 <input type="text" value={this.state.name}  ></input><br></br><br></br>
//                 <label> Branch :</label> <br></br>
//                 <input type="text"  value={this.state.branch} ></input> <br></br><br></br>
//                 <label> PRN :</label> <br></br>
//                 <input type="text" value={this.state.prn} ></input> <br></br><br></br>
//                 <label> Mobile no :</label> <br></br>
//                 <input type="text" value={this.state.clg} ></input>
           

//              </div>

//              <br></br>
//              <br></br>
//              <br></br>

//         </div> 
           
//         </div>
//   );

// }
  
// }

// export default App;


