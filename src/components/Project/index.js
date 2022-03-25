import React from 'react'

function Project (project) {
    return(
        <div>

              <p>{project.description}</p>
              <p>{project.title}</p>
          <img
            src={require(`../../assets/dinnerforyou.jpg`)}
            alt={project.title}
            className="img-thumbnail mx-1"
            href="https://nonchalantgarage.github.io/run-buddy/"
            key={project.title}
          />

        </div>
    )

}

export default Project