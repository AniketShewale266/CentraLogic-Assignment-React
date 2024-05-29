import React from "react";

function Cards({ title, description, technologies, liveUrl, githubUrl }) {
  return (
    <>
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <strong>Technologies Used:</strong> {technologies.join(", ")}
        </p>
        <div className="card-buttons">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Live URL
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
