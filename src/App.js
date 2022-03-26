import React, {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Navigation';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [sections] = useState([
  {
   name: "About Me" 
  },
  {
   name: "Projects" 
  },
  {
   name: "Contact" 
  },
  {
   name: "Resume" 
  },
])

  
  const [currentSection, setCurrentSection] = useState(sections[0])
  
  return (
    <div className="">
       <Header>
         {/* pass state as props in Nav */}
        <Nav
        sections = {sections}
        setCurrentSection = {setCurrentSection}
        currentSection = {currentSection}
        ></Nav>
       </Header>
       <main>
         {/* switch statement to render different components */}
         {/* pass current state to select section  */}
         <Section currentSection = {currentSection}></Section>
       </main>
       {/* <About/>
       <Project ></Project> */}
        <Footer></Footer>

    </div>
  );
}

export default App;
