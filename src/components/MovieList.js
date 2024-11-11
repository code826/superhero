import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(props){
        super(props);
    }
   
    
    render(){
    
        const {movieArray} = this.props;
        console.log('movie',movieArray);
        return (
            <>
                {movieArray.map((item)=>{
                    return <MovieCard  key ={item.id} movie = {item} increaseStar = {this.props.increaseStar} decreaseStar = {this.props.decreaseStar} handleFavBtn={this.props.handleFavBtn} />
                })}
            </>
        )
       
      
    }
}

export default MovieList;