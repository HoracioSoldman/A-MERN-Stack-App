import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../components/header/header';
import './App.css';
import CreateResa from './reservations/create/create-resa';
import { ListResa } from './reservations/list/list-resa';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ListResa />} /> 
          <Route path="/create" element={<CreateResa />} /> 
        </Routes>
      </Router>
  );
}

export default App;
