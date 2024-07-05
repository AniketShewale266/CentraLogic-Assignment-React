import logo from './logo.svg';
import './App.css';
import GetDemo from './components/GetDemo';
import PostDemo from './components/PostDemo';
import PutDemo from './components/PutDemo';

function App() {
  return (
    <>
    <h2>Get, Post and Put Request Demonstration</h2>
    <div className="container">
    <GetDemo/>
    <PostDemo/>
    <PutDemo/>
    </div>
   
    </>
  );
}

export default App;
