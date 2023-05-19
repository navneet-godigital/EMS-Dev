import React from 'react'
import { Row, Col, Table, Button } from "react-bootstrap"
import { FiEdit, FiLogIn } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaEyeSlash, FaRegUserCircle } from "react-icons/fa";
import Sidebar from './SidebarMenu';
import { NavLink } from 'react-router-dom';


const Student = () => {
    return (
        <>
            <Sidebar>
                <div className='NavButton row'>
                    <button class="button-8 col-2" role="button">Totel Student: 43</button>&nbsp;
                    <button class="button-8 col-2">Pending Student: 0</button>&nbsp;
                    <button class="button-8 col-2" >Fees Submit for Student: 43</button>&nbsp;
                    <button class="button-8 col-2">Advance Wallet Balance: Rs5100</button>&nbsp;
                    <FaRegUserCircle class="col-1" color="#ffffff" textAlign="right" marginLeft="250px" fontSize="2.2em" />
                    <h5 class="col-2" style={{ Color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>User Name</h5>
                </div >

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
                    <Table style={{ width: "120%" }}>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Center Name</th>
                                <th>Roll No.</th>
                                <th>Student Name</th>
                                <th>Father Name</th>
                                <th>Charge Rate</th>
                                <th>Status</th>
                                <th>Payment Status</th>
                                <th>Options</th>
                                <th>Option2</th>
                                <th>Student Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="danger">Pending</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>1</td>
                                <td>Demo Full Name tuiyiu ouoiu </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>Demo Full Name </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FaEyeSlash color="Red" fontSize="1.5em" />
                                    </NavLink>
                                </td>
                                <td><Button variant="success">Received</Button> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiEdit color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                    <MdDelete color="#DC3545" fontSize="1.9em" />
                                </td>
                                <td> </td>
                                <td>
                                    <NavLink to="/editstudent">
                                        <FiLogIn color="green" fontSize="1.5em" /></NavLink>&nbsp;
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div >
            </Sidebar>
        </>
    )
}

export default Student
