import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './App.css';
import Home from './views/Home/Home.js';
import Help from './views/Help/Help.js';
import About from './views/About/About.js';

class app extends component {
  constructor(){
    super();
    //inisial state view
    this.state = {
      view : 'home'
    }
  }

  render(){
    const View = ()=>{
      if(this.state.view == 'home')
        return <Home name="Eden Hazard" />
        else if (this.state.view = 'about')
        return <About />
        else if (this.state.view = 'help')
        return <Help />
  
    }

    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <a onClick={()=> this.setState({view : "home"})} className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : "about"})} className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a onClick={()=> this.setState({view : "help"})} className="nav-link" href="#">Help</a>
            </li>.
          </ul>
  
        </nav>
        <View />
      </div>
    )
      
    
  }
}
// function Message(props){
//   return <p>Hello {props.name}</p>
// }

// class App extends Commponent{
//   render(){
//     return (
//       <div>
//         <message />
//         <home />
//       </div>
//     );
//   }
// }


//contoh penulisan react

// function App() {

//   var h1 = <i>Lannister</i>
//   const title = "Praktek Pengembangan Aplikasi WEB";
//   var text = "ReactHs merupakan framework atau pustaka javascript untuk membangun komponen interaksi pengguna interaktif dan dapa t digunakan ulang";
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="content">
        
//           <h1 style={{textalign: 'center', color: 'rgb(252, 146, 158)'}}>Hai, {h1}</h1>
//           <h2 className="title">Praktek Pengembangan Aplikasi Web</h2>
//         <p className="content-text">ReactHs merupakan framework atau pustaka javascript untuk membangun komponen interaksi pengguna interaktif dan dapa t digunakan ulang</p>
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aplikasi Pengembangqan Web
//         </a>
//         <img src={logo} />
//       </header>
//     </div>
//   );
// }

export default App;
