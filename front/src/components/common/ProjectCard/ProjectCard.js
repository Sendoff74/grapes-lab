import React from 'react';
import Card from 'react-bootstrap/Card';
import Vote from '../Vote/Vote';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

import './ProjectCard.css';
import { useSelector } from 'react-redux';

function ProjectCard({ project }) {

  const user = useSelector(store => store.user.isLogged)
  const history = useHistory();

  return (
    <>

      <Card  className="bg-dark text-white">
        <Card.Body>
          <Card.Title>{project.projectName}</Card.Title>
          <Card.Subtitle className='mb-2  text-muted'>{project.author.name}</Card.Subtitle>
          <Card.Text>
            {project.concept}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>{project.status}</small>
          {/*<small className="text-muted">{ project.rating }</small>*/}
          <small className='text-muted'>
            <Vote projectId={project._id} />
          </small>
          {user ? <Button className={'btn btn-light'} onClick={(e) => {
            e.preventDefault()
            history.push(`/project/${project._id}`);
          }}>Show more...</Button> : null}
        </Card.Footer>
      </Card>

    </>
  );
}

export default ProjectCard;
