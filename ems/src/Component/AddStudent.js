import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function AddStudent() {
    return (
        <>
            <div className='list'>
                <Row>
                    <Col>
                        <h2>Add Student</h2>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        {/* <Button style={{ backgroundColor: "#1188A6", fontFamily: "'Montserrat', sans-serif" }}>Add Student</Button>&nbsp; */}
                    </Col>
                </Row>
            </div >



            <Form className="form-container mt-2 p-5" style={{ backgroundColor: "#D9ECF1", borderRadius: "5px" }}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control placeholder='User ID' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder='City' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Selery</Form.Label>
                            <Form.Control placeholder='Selery' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control placeholder='User ID' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder='City' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Selery</Form.Label>
                            <Form.Control placeholder='Selery' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control placeholder='User ID' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder='City' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Selery</Form.Label>
                            <Form.Control placeholder='Selery' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control placeholder='User ID' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Name' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder='City' />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Selery</Form.Label>
                            <Form.Control placeholder='Selery' />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" className='mt-3 mb-5'>Submit</Button>{' '}
            </Form>
        </>
    )
}

export default AddStudent
