import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Container, Col, CardHeader, CardFooter, CardSubtitle } from 'reactstrap';
import { posts } from '../utilities/posts'

const Blog = (props) => {
  return (
    <Container className='container-fluid mt-4'>
      <Row>
        {
          posts.map((post, key) => {
            return (
              <Col key={key}>
                <Card>
                  <CardHeader>
                    <CardTitle><h3 className='text-left'>{post.title}</h3></CardTitle>
                    <CardSubtitle><h5 className='text-left mt-3'>{post.date}</h5></CardSubtitle>
                    <CardSubtitle><h5 className='text-left mt-3'>{post.author}</h5></CardSubtitle>
                  </CardHeader>
                  <CardBody>
                    <CardText className='text-left'>
                      <p>
                        {post.body}
                      </p>
                    </CardText>
                  </CardBody>
                  {/* <CardFooter className=''>
              <Button>Button</Button>
            </CardFooter> */}
                </Card>
              </Col>

            )

          })
        }
      </Row>
    </Container>

  );
}

export default Blog;