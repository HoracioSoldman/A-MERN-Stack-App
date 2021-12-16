import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../components/header/header';
import './App.css';
import { ListResa } from './reservations/list/list-resa';

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<ListResa />} /> 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
