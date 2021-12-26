import MovieCard from "./MovieCard"
import '../App.css';

function MoviesList({moviedata, search, rating, setMoviedata}){
   
    return( 
        <div className='container'>
            {moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>=rating) ).map((el,i)=><MovieCard el={el} key={el.id} setMoviedata={setMoviedata} moviedata={moviedata}  /> )}
            {(moviedata.filter(el=>el.title.toUpperCase().includes(search.toUpperCase()) &&(el.rate>rating) ).length<=0) &&   
            <img
            className="Not"
     src="https://zum-talent.ecore.com.sg/assets/frontend/image/no_result.jpeg"
      alt="First slide"
    />}
        </div>


    )
}

export default MoviesList