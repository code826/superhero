// const Navbar = () =>{
//     return (
//         <h1>Nav</h1>
//     )
// }

// export default Navbar;

import React from "react";

class Navbar extends React.Component {
    constructor(){
        super();
    }
    render(){
        console.log('render navbar');
        return (
           <nav><h1 className="header">Superhero</h1></nav>
        )
    }
}

export default Navbar;
