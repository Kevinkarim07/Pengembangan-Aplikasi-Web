import React from 'react';


export default class Home extends React.Component{


render(){
    return(
        <div>
            <h2>Title Home Component</h2>
            <p>Hello my name is {this.props.name}</p>
        </div>
    )
}
    
// constructor(props){
//     super(props);
//     this.state = {name : this.props.name}
// }

// render(){
//     return(
//         <div>
//             <h2>Title Home Component</h2>
//             <p>Hello my name is {this.state.name}</p>
//             <button onClick={()=> this.setState({name : "Tyrion Lannister"})}>Ubah Nama</button>
//         </div>
//     );
// }
    // render(){
    //     return(
    //         <div>
    //             <h2>Title Home Component</h2>
    //             <p>Hello my name is {this.props.name}</p>
    //         </div>
    //     );
    // }
}