import React from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Row, Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import projectData from '../projectData';

function ProjectExt() {

    function splitStack(stack) { 
        // console.log(stack)
        stack.map((item) => {
            // console.log(item)
            let icon = ''
            if (item === "React") {
                icon = <FontAwesomeIcon style={{ color: "#61DBFB" }} icon={faReact} />
            }
            else if (item === "JS") {
                icon = <FontAwesomeIcon style={{ color: "#EAD64E" }} icon={faJsSquare} />
            }
            else if (item === "Bootstrap") {
                icon = <FontAwesomeIcon style={{ color: "#543B79" }} icon={faBootstrap} />
            }
            else if (item === "HTML") {
                icon = <FontAwesomeIcon style={{ color: "#E54C21" }} icon={faHtml5} />
            }
            else if (item === "CSS") {
                icon = <FontAwesomeIcon style={{ color: "#264EE4" }} icon={faCss3Alt} />
            }
            else if (item === "GitHub") {
                icon = <FontAwesomeIcon icon={faGithub} />
            }
            else if (item === "PHP") {
                icon = <FontAwesomeIcon style={{ color: "#8690BA" }} icon={faPhp} />
            }
            else if (item === "Laravel") {
                icon = <FontAwesomeIcon style={{ color: "#E62D1F" }} icon={faLaravel} />
            }
            else if (item === "Firebase") {
                icon = <FontAwesomeIcon icon={faFireAlt} style={{ color: "#F99504" }} />
            }
            else if (item === "MySQL") {
                icon = <FontAwesomeIcon icon={faDatabase} style={{ color: "#686A71" }} />
            }
            else if (item === "Git") {
                icon = <FontAwesomeIcon style={{ color: "#E74D33" }} icon={faGitAlt} />
            }
            else {console.log('none')}

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
                    {projectData.map((item, idx) => {
                        return (
                            <Row className="mb-3 key={idx}">
                                <Card className='text-left ml-4 border-0'>
                                    <CardBody>
                                        <CardTitle tag="h1" className='display-4'><a href={item.demo} rel='noreferrer' target='_blank'>{item.title}</a></CardTitle>
                                        <CardText tag='h4' className='my-2'>{item.description}</CardText>
                                        <CardText className='my-2'>{splitStack(item.techs)}</CardText>
                                        <Row>
                                            <Button href={item.demo} target="_blank" className='mx-3'>Demo</Button>
                                            <Button href={item.github} target="_blank" className='mx-2'>Github</Button>
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
