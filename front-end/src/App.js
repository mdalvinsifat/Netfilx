
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componties/Home/Home';
import Sign from './componties/Auth/Sign';
import SignUp from './componties/Auth/SignUp';
import Movie from './componties/view/Movie';
import Movies from './componties/view/Movies/Movies';
import Series from './componties/view/Series/Series';
import LoginNOtSuccessfully from './componties/Error/LoginNOtSuccessfully';
import Create from './componties/Admin/Create';
import SomeEdit from './componties/Admin/SomeEdit';
import ViewAdminDetelis from './componties/Admin/ViewAdminDetelis';
import AdminDashboard from './componties/Admin/AdminDashboard';
import AdminMovies from './componties/Admin/AdminMovies';
import CreateMovies from './componties/Admin/CreateMovies';
import ViewSeries from './componties/Admin/ViewSeries';
import AdminSeries from './componties/Admin/AdminSeries';
import EditSomeMovie from './componties/Admin/EditSomeMovie';
import SeriesEdit from './componties/Admin/SeriesEdit';
import HomeMovieDetelis from './componties/view/HomeMovieDetelis';
import Detetlis from './componties/view/Movies/Detetlis';
import SeriesDeteils from './componties/view/Series/SeriesDeteils';
import AdminLogin from './componties/Admin/AdminLogin';
import NotFound from './componties/Error/NotFound';
import Protected from './componties/Admin/Protected';


function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/movie/:id" element={<HomeMovieDetelis/>}/>
    <Route path="/movies/detelis/:id" element={<Detetlis/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path='/admin/edit/:id' element={<SomeEdit/>}/> 
    <Route path="/series" element={<Series/>}/>
    <Route path="/admin/dashboard" element={<Protected Compoties={AdminDashboard}/>}/>
    <Route path="/admin" element={<AdminLogin/>}/>
    <Route path="/admin/dashboar/view-movies" element={<ViewAdminDetelis/>}/>
    <Route path="/admin/dashboar/create-movies" element={<Create/>}/>
    <Route path="/admin/dashboar/movies" element={<AdminMovies/>}/>
    <Route path="/admin/dashboar/movies-view" element={<CreateMovies/>}/>
    <Route path="/admin/dashboar/movies-movie/:id" element={<EditSomeMovie/>}/>
    <Route path="/admin/dashboar/series-movie" element={<AdminSeries/>}/>
    <Route path="/admin/dashboar/series-view" element={<ViewSeries/>}/>
    <Route path="/series/:id" element={<SeriesDeteils/>}/>
    <Route path="/admin/dashboar/series-view-edit/:id" element={<SeriesEdit/>}/>
    <Route path="/notcurret" element={<LoginNOtSuccessfully/>}/>
    <Route path="*" element={<NotFound/>}/>
  
   </Routes>
    </div>
  );
}

export default App;
