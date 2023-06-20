import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import {CommentIndex} from './pages/comment-Index';
import {Home} from './pages/home';

function App() {
  return (
    <Router>
    <div className="feed-app">
      <header className="app-header"/>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comment" element={<CommentIndex/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App;
