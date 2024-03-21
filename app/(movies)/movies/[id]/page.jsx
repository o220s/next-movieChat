import { Suspense } from "react";
// import MovieInfo from "../../../../component/movie-info";
import MovieVideos from "../../../../component/movie-videos";
import MovieInfo, { getMovie } from "../../../../component/movie-info";




  export async function generateMetadata({ params: { id } }) {
    const movie = await getMovie(id);
    return {
      title: movie.title,
    };
  }
  
  export default async function MovieDetailPage({ params: { id } }) {
    return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}