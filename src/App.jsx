import Home from './components';
import Posts from './components/posts';
import Comments from './components/comments';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/comments' element={<Comments />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
