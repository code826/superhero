import { Component } from "react";
import styled from "styled-components";

const MovieCardBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`
class MovieCard extends Component{
   
    constructor(props){
        super(props);
    }

    
    handleFavBtn = () =>{
        this.setState({
            isFav:!this.state.isFav
        });
    }
    render(){
        console.log('render moviecard');
        console.log("rendering !!",this.props);
        const {id,movieName,desc,stars,imgUrl,isFav} = this.props.movie;
        return(
            <div className="movie-card">
                <div className="left-img">
                    <img src={imgUrl} alt="ironman"/>
                </div>
                <div>
                    <h3>{movieName}</h3>
                    <span>{desc}</span>
                    <MovieCardBtn onClick={()=>{
                        this.props.increaseStar(id);
                    }}>
                        <img  className="img"src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                    </MovieCardBtn>
                    <span>{stars}</span>
                    <MovieCardBtn onClick={()=>{
                        this.props.decreaseStar(id);
                    }}><img  className="img" src="https://cdn-icons-png.flaticon.com/128/11047/11047899.png"/></MovieCardBtn>
                    {/* {isFav ?<button id="unfav-btn">Remove From Fav</button>:<button id="fav-btn">Add To Fav</button> } */}
                    <MovieCardBtn onClick={this.handleFavBtn} id = {isFav?"unfav-btn":"fav-btn"}>{isFav?"Remove From Fav":"Add To Fav"}</MovieCardBtn>
                </div>
                

            </div>
        )
    }
}

export default MovieCard;
