import React from 'react'
import './Body.css'
import { Card, Row, Col, Accordion, Button, ListGroup } from 'react-bootstrap'
import logo from '../assets/python_logo.png'

export default function Body(props) {
    return (
        <div className="Content">
            <Card className="CardCenterWidth CourseOverview">
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <Card.Img src={logo} />
                        </Col>

                        <Col xs={9}>
                            <Card.Title>
                                Python 3 Tutorial
                            </Card.Title>

                            <Card.Text>
                                <p>Learn Python in the most social and fun way, with SoloLearn!</p>
                                <p>Learn Python, one of today's most in-demand programming languages on-the-go, while playing, for FREE! Compete and collaborate with your fellow SoloLearners, while surfing through short lessons and fun quizzes. Practice writing Python code within the app, collect points, and show off your skills. </p>
                                <p>When you complete the course, you'll win a Certificate of Completion as a trophy!</p>
                                <p>So don’t wait; dive right in! Start coding with Python!</p>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="CardCenterWidth CourseContent">
                <Card.Body>
                    <div className="LessonTitle">
                        <div className="LessonCount">
                            <p>Lessons: <span>92</span></p>
                        </div>
                        <div className="LessonOverview">
                            <span>275 Quizes</span>
                        </div>
                    </div>

                    <div className="LessonContext">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Module 1: Basic Concepts
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card>
                                        <Card.Body>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>
                                                    <Card.Link href="#">What is Python</Card.Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Card.Link href="#">Your First Program</Card.Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Card.Link href="#">Simple Operations</Card.Link>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Module 2: Control Structures
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <Card.Link href="#">Boolean</Card.Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Card.Link href="#">if Statement</Card.Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Card.Link href="#">else Statement</Card.Link>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}