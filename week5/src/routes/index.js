import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movie from "../components/Movies.jsx";
import TV from "../components/Tv.jsx";
import Person from "../components/Celebrity.jsx";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import MovieDetail from "../components/Moviedetails.jsx";
import NotFound from '../components/NotFound.jsx';


const RootRoute = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Celebrity' element={<Person/>} />

                <Route path='/movie' element={<Movie/>} />
                <Route path="/movie/:query" element={<MovieDetail/>} />

                <Route path='/tv' element={<TV/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;