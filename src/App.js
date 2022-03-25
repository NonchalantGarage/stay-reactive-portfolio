import './App.css';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  return (
    <div className="">
        <Nav></Nav>
        <Header></Header>
        <About/>
        <Project description = "Lorem Ipsum" title='Project Title'></Project>
        <Footer></Footer>

    </div>
  );
}

export default App;
