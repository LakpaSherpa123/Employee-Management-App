import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./pages/header/Header"
import DashBoard from './pages/dashboard/DashBoard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path='/' element = {<DashBoard/>}/>
              <Route path='/employee' element = {<PostUser/>}/>
              <Route path='/employee/:id' element = {<UpdateUser/>}/>
              <Route path='*' element = {<NoMatch/>}/>
              
          </Routes>

      </div>
   
  );
}

export default App;
