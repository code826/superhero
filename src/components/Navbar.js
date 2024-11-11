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
        const {totalFav} = this.props;
        return (
           <nav>
            <h2>Super Hero</h2>
            <div>
            <img src ="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" style={{height:40,width:40}} />
            <span>{totalFav}</span>
            </div>
          
           </nav>
        )
    }
}

export default Navbar;
