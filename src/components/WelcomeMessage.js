import { Component } from "react";

class WelcomeMessage extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {name,} = this.props;
        return(
            <h1> Welcome {name}, Your Roll No Is {this.props.rollNo}</h1>
        )
    }
}
WelcomeMessage.defaultProps = {
    name:'unknown',
    rollNo:-1
}
// const WelcomeMessage = (props)=>{
//     const {name,rollNo} = props;
//     return(
//         <h1> Welcome {name}, Your Roll No Is {rollNo}</h1>
//     )
// }

export default WelcomeMessage;