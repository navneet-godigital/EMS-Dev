import React from 'react'
import { Row, Col, Table, Button } from "react-bootstrap"
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Student = () => {
    return (
        <>
            <div className='list'>
                <Row>
                    <Col>
                        <h2>Student List</h2>
                    </Col>
                    <Col>
                        <input type="search" placeholder='Search' class="form-control" style={{ width: "80%" }} />
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <NavLink to="/addStudent">
                            <Button style={{ backgroundColor: "#1188A6", fontFamily: "'Montserrat', sans-serif" }}>Add Student</Button>&nbsp;
                        </NavLink>
                        <MdDelete color="#DC3545" fontSize="2.8em" />
                    </Col>
                </Row>
            </div >


            <div className='tableList'>
                <Table style={{ width: "200%" }}>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Roll Number</th>
                            <th>Father Name</th>
                            <th>Mother Name</th>
                            <th>Section</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pin Code</th>
                            <th>Country</th>
                            <th>Mobile Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name tuiyiu ouoiu </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <NavLink to="/editstudent">
                                    <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>#73929929 </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>Demo Full Name </td>
                            <td>
                                <FiEdit color="green" fontSize="1.5em" />&nbsp;
                                <MdDelete color="#DC3545" fontSize="1.9em" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </>
    )
}

export default Student
