import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';
import { basicFetch } from '../api/fetchFunctions';
import type {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import type { Movie, Credits, Crew, Cast} from '../api/types';
import Header from '../components/Header/Header';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';

const Movie: NextPage = () => (
  <main>
    <Header/>
    <MovieInfo/>
    <Grid>
      <Card/>
    </Grid>
  </main>
)

export default Movie;