
import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar"
import Test from "./Test";
import WelcomeMessage from "./WelcomeMessage";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      movieArray : [
            {
                id:1,
                movieName:'ironman',
                imgUrl:'https://cdn-icons-png.flaticon.com/128/11891/11891916.png',
                desc :'this is ironman',
                stars:0,
                isFav:false
            },
            {
                id:2,
                movieName:'batman',
                imgUrl:'https://cdn-icons-png.flaticon.com/128/11891/11891927.png',
                desc :'this is batman',
                stars:0,
                isFav:false
            }
        ],
        totalFav:0
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
 handleFavBtn = (id) =>{
     const indexGiven = this.findIndexFromId(id);
     if(indexGiven == -1){
         console.log('error');
     }
     let favTemp = 0;
    this.setState((prevState) =>{
         let newMoviesArray = prevState.movieArray.map((item,index)=>{
             if(index == indexGiven){
                 favTemp =  !item.isFav?+1:-1
                return  {... item,isFav:!item.isFav};
             }
             return item;
         });
         return {
             movieArray:newMoviesArray,
             totalFav:prevState.totalFav+ favTemp
         }
    })
 }
  render(){
    return(
      <>
      <Navbar totalFav = {this.state.totalFav}/>
       <MovieList movieArray = {this.state.movieArray} increaseStar = {this.increaseStar} decreaseStar = {this.decreaseStar} handleFavBtn={this.handleFavBtn}/>
      </>

    )
   

  }
}
// const App = () =>{
//   console.log('render App');
//   return(
//     <div>
//       <Navbar/>
//       <MovieList/>
//       {/* <WelcomeMessage  rollNo = {1}/>
//       <WelcomeMessage name="vishal" /> */}

//     </div>

//   )
// }

export default App;