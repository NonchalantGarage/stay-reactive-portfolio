import React from "react";

function Project(project) {
  const projects = [
     {
      title: "lookmeup",
      name: "Look Me Up",
      description: "Share your social media with QR scanner",
    },
    {
      title: "rockpaperscissors",
      name: "Rock Paper Scissors",
      description: "Classic Rock Paper Scissors",
    },
    {
      title: "dinnerforyou",
      name: "Dinner For You",

      description: "Find a random recipe for dinner",
    },
    {
      title: "runbuddy",
      name: "Run Buddy",
      description: "Find a running coach",
    },
  ];

  return (
    <React.Fragment>
      {projects.map((project) => (
        <div>
           <p>{project.name}</p>
          <p>{project.description}</p>
          <img
            src={require(`../../assets/${project.title}.jpg`)}
            alt={project.title}
            className="img-thumbnail mx-1"
            href="https://nonchalantgarage.github.io/run-buddy/"
            key={project.title}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Project;
