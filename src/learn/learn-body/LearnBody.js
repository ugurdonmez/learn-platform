import React from 'react'
import './LearnBody.css'
import { Card, Row, Col, Accordion, Button, ListGroup } from 'react-bootstrap'

export default function LearnBody(props) {
    return (
        <>
            <div className="Content">
                <Card className="CardCenterWidth CourseOverview">
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                                logo
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
            </div>
        </>
    )
}