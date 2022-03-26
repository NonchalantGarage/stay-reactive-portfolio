import React, {useEffect} from 'react'


function Nav (props) {

  const {
    sections = [],
    setCurrentSection,
    currentSection
  } = props
  
  useEffect(()=>{
    document.title = currentSection.name;

  }, [currentSection])

  
    return(
      <nav>
      <ul className = "flex-row">
        {sections.map((Section) => (
          <li
            className={`mx-5 ${
              currentSection.name === Section.name && 'navActive'
              }`}
            key={Section.name}
          >
            <span
              onClick={() => setCurrentSection(Section)}
            >
              {Section.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
    )

}

export default Nav

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse" id="navbarNav">
//   <ul className="navbar-nav">
//     {sections.map((section)=>{
//        <li className="nav-item"
//        key = {section.name}
//     >
//        {/* <a className="nav-link" href="#about-me"></a> */}
//        <span onClick = {()=>setCurrentSection(section)} >
//       {section.name}
//        </span>
//        </li>
//     })}
//     </ul>
    
 
// </div>
// </nav>

/* <li className="nav-item">
              <a className="nav-link" href="#about-me"></a>
              <span onClick = {()=>setCurrentSection(sections)} >
              About Me
              </span>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#resume">Resume</a>
            </li> */
          