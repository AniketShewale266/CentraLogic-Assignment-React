import React from 'react';

const Skills = () => (
  <section id="skills" className="skills-container">
    <h2>SKILLS</h2>
    <div className="skills-content">
      <div className="skills-column">
        <div className="skill">
          <h3>HTML</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>React</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      <div className="skills-column">
        <div className="skill">
          <h3>Java</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>MySQL</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>SQL</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>MongoDB</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="skill">
          <h3>Git</h3>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
