import { Component } from "react";
import  style from "../test.module.css";

import styled from "styled-components";
// const TestHeader = styled.h1`
//     color:green;
//     font-size: 20px;
// `;
// // console.log(`my name is ${name}`);
// const TestPara = styled.p`
//     color:${(props) => props.color?props.color:"blue"};
//     font-size:${(props) => props.size};
// `

class Test extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <h1 className={style['header-test']}>I am Header</h1>
            
            {/* <TestHeader> Hi To The World</TestHeader>
            <TestPara  size={"20px"} >I am p</TestPara> */}
            </>
            
        )
    }
}

// const style = {
//     h1:{
//         color:'red',
//         fontSize:25
//     },
//     p:{
//         color:"blue"
//     }
// }
export default Test;