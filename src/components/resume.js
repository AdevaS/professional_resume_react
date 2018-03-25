import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map((educationData) => {
        return (
          <div key={educationData.school} className="row item">
            <div className="twelve columns">
              <h3>{educationData.school}</h3>
              <p className="info">{educationData.degree} <span>&bull;</span> <em className="date">{educationData.graduated}</em></p>
              <p>{educationData.description}</p>
            </div>
          </div>
        ); 
      });
      
      var works = this.props.data.works.map((work) => {
        var accomplishments = work.accomplishments.map((accomplishment) => {
          return <li key={accomplishment.description}>{accomplishment.description} <br/></li>;
        });
        var responsibilities = work.responsibilities.map((responsibility) => {
          return <li key={responsibility.description}>{responsibility.description} <br/></li>;
        });
          
        return (
          <div key={work.company} className="row item">
            <div className="twelve columns">
              <h3>{work.company}</h3>
              <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
              <dt className="subtitle"><b>Accomplishments:</b></dt>
              <ul className="disc">
                {accomplishments}
              </ul>
              <dt className="subtitle"><b>Responsibilities:</b></dt>
              <ul className="disc">
                {responsibilities}
              </ul>
            </div>
          </div>
        );
      });
      
      var skills = this.props.data.skills.map((skill) => {
        var className = 'bar-expand '+skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            <span style={{width: skill.level}} className={className}></span><em>{skill.name}</em>
          </li>
        );
      });
    }
    
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {education}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <ul>
              {works}                
            </ul>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            {/*<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>*/}
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}