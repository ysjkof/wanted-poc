import { useEffect } from "react";
import Movie from "../components/Movie";
import { useMe } from "../hook/useMe";
import { useMovie } from "../hook/useMovie";
import { Container, Movies, Worning } from "./Home";

function Favorite() {
  const { movies, getMovie, getLike } = useMovie();
  const { me, getMe } = useMe();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    getLike(me?.likes ?? [0]);
  }, [me]);

  return (
    <Container>
      <Movies>
        {movies.length === 0 && <Worning>즐겨찾기 목록이 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
          <Movie
            key={movie.id + idx}
            movie={movie}
            onClick={() => getMovie(movie.id)}
          />
        ))}
      </Movies>
    </Container>
  );
}

export default Favorite;
