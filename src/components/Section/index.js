import React from "react";
import SectionContent from "../Sectioncontent";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Resume from "../Resume"

function Section({currentSection}){
    const renderPage = ()=>{
        switch(currentSection.name) {
            case "About Me" :
                return <About/>
            case "Projects" :
                return <Project/>
            case "Contact" :
                return <Contact/>
            case "Resume" :
                return <Resume/>
        }

    }

    return(
        <section>
            <h2>
                {currentSection.name}
            </h2>

            <SectionContent>
                {renderPage()}
            </SectionContent>
        </section>

    )
}
export default Section