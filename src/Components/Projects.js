import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Row, Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitAlt, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faExclamationTriangle, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import projectData from '../projectData';

function ProjectExt() {
    function tech(stack) {
        return stack.map((item) => {
            let icon = ''
            if (item === "React") {
                icon = <a rel='noreferrer' target='_blank' href='https://reactjs.org/'><FontAwesomeIcon className='fa-2x' style={{ color: "#61DBFB" }} icon={faReact}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "JavaScript") {
                icon = <a rel='noreferrer' target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/javascript'><FontAwesomeIcon className='fa-2x' style={{ color: "#EAD64E" }} icon={faJsSquare}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Bootstrap") {
                icon = <a rel='noreferrer' target='_blank' href='https://getbootstrap.com/'><FontAwesomeIcon className='fa-2x' style={{ color: "#543B79" }} icon={faBootstrap}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "HTML") {
                icon = <a rel='noreferrer' target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FontAwesomeIcon className='fa-2x' style={{ color: "#E54C21" }} icon={faHtml5}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "CSS") {
                icon = <a rel='noreferrer' target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS'><FontAwesomeIcon className='fa-2x' style={{ color: "#264EE4" }} icon={faCss3Alt}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "GitHub") {
                icon = <a rel='noreferrer' target='_blank' href='https://github.com/'><FontAwesomeIcon className='fa-2x' style={{ color: '#000000' }} icon={faGithub}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "PHP") {
                icon = <a rel='noreferrer' target='_blank' href='https://www.php.net/'><FontAwesomeIcon className='fa-2x' style={{ color: "#8690BA" }} icon={faPhp}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Laravel") {
                icon = <a rel='noreferrer' target='_blank' href='https://laravel.com/'><FontAwesomeIcon className='fa-2x' style={{ color: "#E62D1F" }} icon={faLaravel}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Firebase") {
                icon = <a rel='noreferrer' target='_blank' href='https://firebase.google.com/'><FontAwesomeIcon className='fa-2x' icon={faFireAlt} style={{ color: "#F99504" }}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "MySQL") {
                icon = <a rel='noreferrer' target='_blank' href='https://www.mysql.com/'><FontAwesomeIcon className='fa-2x' icon={faDatabase} style={{ color: "#686A71" }}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Git") {
                icon = <a rel='noreferrer' target='_blank' href='https://git-scm.com/'><FontAwesomeIcon className='fa-2x' style={{ color: "#E74D33" }} icon={faGitAlt}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Heroku") {
                icon = <a rel='noreferrer' target='_blank' href='https://www.heroku.com/'><FontAwesomeIcon className='fa-2x' style={{ color: "#6D3EA3" }} icon={faKaggle}
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title={item} /></a>
            }
            else if (item === "Currently Refactoring to ReactJS") {
                icon =<FontAwesomeIcon className='fa-2x' style={{ color: "#FFC60A" }} icon={faExclamationTriangle}
                data-bs-toggle="tooltip" data-bs-placement="bottom" title={item}/>
            }

            return (
                <div className="col-sm-2 fa-lg mt-2 pl-0 d-inline" >
                    {icon}
                </div>
            )

        })
    }

    return (
        <Container>
            <Row>
                <Col className="col-md-8 mt-4">
                    {projectData.map((project, idx) => {
                        return (
                            <Row className='mb-3' key={idx}>
                                <Card className='text-left ml-4 border-0'>
                                    <CardBody>
                                        <CardTitle tag="h1" className='display-4'><a href={project.demo} rel='noreferrer' target='_blank'>{project.title}</a></CardTitle>
                                        <CardText tag='h4' className='my-3'>{project.description}</CardText>
                                        <CardText className='my-3'>{tech(project.techs)}</CardText>
                                        <Row>
                                            <Button href={project.demo} target="_blank" className='mx-3'>Demo</Button>
                                            <Button href={project.github} target="_blank" className='mx-2'>Github</Button>
                                        </Row>
                                    </CardBody>

                                </Card>
                            </Row>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
//                                 <p>{tech(item.techs)}</p>



export default ProjectExt;
