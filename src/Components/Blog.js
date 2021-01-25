import React from 'react';
import coders from '../img/coders.jpg';
import { Card, CardText, CardBody, CardTitle, Row, Container, Col, CardHeader, CardSubtitle } from 'reactstrap';

const Blog = (props) => {
  return (
    <Container className='container-fluid'>
      <Row className='mt-4 mb-2'>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle><h3 className='text-left'>Life After Bootcamp</h3></CardTitle>
              <CardSubtitle><h5 className='text-left mt-3'>1/25/21</h5></CardSubtitle>
              <CardSubtitle><h5 className='text-left mt-3'>Reese Hudson</h5></CardSubtitle>
            </CardHeader>
            <CardBody>
              <CardText className='text-left'>
                <Row>
                  <Col>
                    <h5>What to Learn Next?</h5>
                    <p>
                      The next area I’m going to research and begin learning is <a target='blank' href='https://reactnative.dev/'>React Native</a>. When I finished bootcamp I knew I wanted to look into mobile development because of how prevalent mobile devices are. My first instinct was to begin working with Swift because I’ve always been an Apple user and am more familiar with iOS and macOS environments but I was advised by a developer during an interview to reconsider that path and look into React Native since it is built off of React which I am already very familiar with and will be applicable for both iOS and Android development.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Staying Active in Software Development.</h5>
                    <p>
                      Along with seeking to learn something new, I’ve tried to expand my use and understanding of git because during bootcamp we simply used git and GitHub for our projects as individuals, there was very little collaboration among classmates on the platform itself. Three of my classmates and I have started working on a team project to build a helper app for a variant of the popular board game Risk. The goal of the app will be to handle most of the bookkeeping tasks and keep track of the many ways that this variant of the game bends the rules so that players can focus on enjoying and playing the game. <a target='blank' href='https://github.com/dreesehudson/risk-player-aid'>GitHub Repo</a>.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>What I'm Reading.</h5>
                    <p>
                      This year I’ve set a goal to read 20 books throughout the year and the first one that I’ve completed is <i><a target='blank' href='https://www.amazon.com/gp/product/0735220565?pf_rd_r=4KB7SSDP1GG0XQG7JW6W&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8'>Coders: The Making of a New Tribe and the Remaking of the World</a></i>. I think it’s a great insight for anyone thinking of getting into software development or anyone interested in how the field of software and technology has morphed from the early days of ForTran and BASIC to today with machine learning and AI. It also explores how the demographics of programmers have shifted overtime and what drives those changes.
                    </p>
                  </Col>
                  <Col className='text-center'>
                  <a target='blank' href='https://www.amazon.com/gp/product/0735220565?pf_rd_r=4KB7SSDP1GG0XQG7JW6W&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8'><img height='300px' alt='Coders: The Making of a New Tribe and the Remaking of the World' src={coders} /></a>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <Row className='mt-4'>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle><h3 className='text-left'>Life After Bootcamp</h3></CardTitle>
              <CardSubtitle><h5 className='text-left mt-3'>1/25/21</h5></CardSubtitle>
              <CardSubtitle><h5 className='text-left mt-3'>Reese Hudson</h5></CardSubtitle>
            </CardHeader>
            <CardBody>
              <CardText className='text-left'>
                <Row>
                  <Col>
                    <h5>What to Learn Next?</h5>
                    <p>
                      The next area I’m going to research and begin learning is React Native. When I finished bootcamp I knew I wanted to look into mobile development because of how prevalent mobile devices are. My first instinct was to begin working with Swift because I’ve always been an Apple user and am more familiar with iOS and macOS environments but I was advised by a developer during an interview to reconsider that path and look into React Native since it is built off of React which I am already very familiar with and will be applicable for both iOS and Android development.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>Staying Active in Software Development.</h5>
                    <p>
                      Along with seeking to learn something new, I’ve tried to expand my use and understanding of git because during bootcamp we simply used git and GitHub for our projects as individuals, there was very little collaboration among classmates on the platform itself. Three of my classmates and I have started working on a team project to build a helper app for a variant of the popular board game Risk. The goal of the app will be to handle most of the bookkeeping tasks and keep track of the many ways that this variant of the game bends the rules so that players can focus on enjoying and playing the game.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>What I'm Reading.</h5>
                    <p>
                      This year I’ve set a goal to read 20 books throughout the year and the first one that I’ve completed is <i><a target='blank' href='https://www.amazon.com/gp/product/0735220565?pf_rd_r=4KB7SSDP1GG0XQG7JW6W&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8'>Coders: The Making of a New Tribe and the Remaking of the World</a></i>. I think it’s a great insight for anyone thinking of getting into software development or anyone interested in how the field of software and technology has morphed from the early days of ForTran and BASIC to today with machine learning and AI. It also explores how the demographics of programmers have shifted overtime and what drives those changes.
                    </p>
                  </Col>
                  <Col className='text-center'>
                  <a target='blank' href='https://www.amazon.com/gp/product/0735220565?pf_rd_r=4KB7SSDP1GG0XQG7JW6W&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8'><img height='50%' alt='Coders: The Making of a New Tribe and the Remaking of the World' src={coders} /></a>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
    </Container>

  )
}

export default Blog;