import React from 'react'
import './dashboard.css'
import { useState } from 'react';
import { MDBCol } from "mdbreact";
// import Button from 'react-bootstrap/Button';
import { MDBTable, MDBTableHead, MDBTableBody, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBIcon } from 'mdb-react-ui-kit';
import { FaRegEdit, FaRegUserCircle, FaPlus, FaList } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import SidebarMenu from './SidebarMenu'
import { Row, Col, } from "react-bootstrap"

function ZoomClass() {
    const [iconsActive, setIconsActive] = useState('tab1');

    const handleIconsClick = (value: string) => {
        if (value === iconsActive) {
            return;
        }

        setIconsActive(value);
    };
    return (
        <>
            <SidebarMenu>

                <div className='NavButton row'>
                    <button class="button-8 col-2" role="button">Live Course</button>&nbsp;
                    <button class="button-8 col-2">Zoom Meeting</button>&nbsp;
                    <button class="button-8 col-2" >Zoom Instant Meeting</button>&nbsp;
                    <button class="button-8 col-2">Gmeet Live</button>&nbsp;
                    <FaRegUserCircle class="col-1" color="#ffffff" textAlign="right" marginLeft="250px" fontSize="2.2em" />
                    <h5 class="col-2" style={{ Color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}>User Name</h5>
                </div>
                <div className='list'>
                    <Row>
                        <Col>
                            <h2> <FaRegEdit /> &nbsp; Online Class</h2>
                        </Col>
                    </Row>
                </div >

                <MDBTabs className='mb-3 list1 d-inline'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
                            <MDBIcon className='me-2' /><h3> <FaList /> &nbsp; Zoom class</h3>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
                            <MDBIcon className='me-2' /> <h3> <FaPlus /> &nbsp; Schedule New</h3>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
                            <MDBIcon className='me-2' /> <h3> <CiSettings /> &nbsp; Settings</h3>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBCol>
                        <div className='float-end mt-5 w-25'>
                            <input className="form-control display-6" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </MDBCol>
                </MDBTabs>

                <MDBTabsContent >
                    <MDBTabsPane className="fade" style={{fade:"opacity: 1"}} show={iconsActive === 'tab1'}>Tab 2 content</MDBTabsPane>
                    <MDBTabsPane className="fade" style={{fade:"opacity: 1"}} show={iconsActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                    <MDBTabsPane className="fade" style={{fade:"opacity: 1"}} show={iconsActive === 'tab3'}>Tab 3 content</MDBTabsPane>
                </MDBTabsContent>
                        {/* <MDBTable align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>Sl No.</th>
                                    <th scope='col'>Topic</th>
                                    <th scope='col'>CLass Date</th>
                                    <th scope='col'>Join URL</th>
                                    <th scope='col'>Passcode</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                </tr>
                            </MDBTableBody>
                        </MDBTable> */}
                       
            </SidebarMenu>
        </>
    )
}

export default ZoomClass;
