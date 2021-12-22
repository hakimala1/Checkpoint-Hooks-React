import MovieCard from "./MovieCard"
import '../App.css';

function MoviesList({moviedata, search, rating}){
   
    return( 
        <div className='container'>
            {moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>rating) ).map((el,i)=><MovieCard el={el} key={i}  /> )}
            
        </div>


    )
}

export default MoviesList