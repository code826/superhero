import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movieArray : [
                {
                    id:1,
                    movieName:'ironman',
                    imgUrl:'https://cdn-icons-png.flaticon.com/128/11891/11891916.png',
                    desc :'this is ironman',
                    stars:0,
                    isFav:true
                },
                {
                    id:2,
                    movieName:'batman',
                    imgUrl:'https://cdn-icons-png.flaticon.com/128/11891/11891927.png',
                    desc :'this is batman',
                    stars:0,
                    isFav:true

                }
            ]
        }
    }
    findIndexFromId = (id) =>{
       for(let i=0;i<this.state.movieArray.length;i++){
            if(this.state.movieArray[i].id == id){
                return i;
            }
       }
       return -1;
    }
    increaseStar = (id) =>{
        console.log('inside increase star');
        let index = this.findIndexFromId(id);
        

        //form 1
        // const {movieArray} = this.state;
        // movieArray[index].stars += 1;
        // //  this.setState((prevState) =>{
        // //     //
        // //     let newMovieArray = [...prevState.movieArray];
        // //     newMovieArray[index] = {... newMovieArray[index],stars:newMovieArray[index]['stars']+1};
            
        // //     return{
        // //         movieArray:newMovieArray
        // //     }
        // //  });
        // this.setState({
        //     movieArray
        // });
        this.setState((prevState) => {
            const updatedMovies = prevState.movieArray.map((movie, i) => 
                i === index ? { ...movie, stars: movie.stars + 1 } : movie
            );
            return { movieArray: updatedMovies };
        });
        
       
     }
     decreaseStar = (id) =>{
        console.log('inside decrease star');
        let index = this.findIndexFromId(id);
        if(index == -1){
            console.log('error');
        }
        const {movieArray} = this.state;
        movieArray[index].stars = movieArray[index].stars -1;

        // if(this.state.movieArray[index].stars < 1){
        //     return;
        // }
        // this.setState((prevState)=>{
        //     var newMovieArray = [... prevState.movieArray];
        //     newMovieArray[index] = {... newMovieArray[index],stars:newMovieArray[index].stars-1}
        //     return{
        //         movieArray:newMovieArray
        //     }
        // }) ;
        this.setState({
            movieArray:movieArray
        });
    }
    
    render(){
        console.log('render moveilist');
        return (
            <>
                {this.state.movieArray.map((item)=>{
                    return <MovieCard  key ={item.id} movie = {item} increaseStar = {this.increaseStar} decreaseStar = {this.decreaseStar}/>
                })}
            </>
        )
       
      
    }
}

export default MovieList;