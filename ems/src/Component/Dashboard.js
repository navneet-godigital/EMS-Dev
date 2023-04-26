import React from 'react'
import SidebarMenu from './SidebarMenu'
import { FcPieChart, FcReadingEbook, FcInspection } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <SidebarMenu />
            <div className="container-fluid">
                <div className="row text-center">

                    <div className="col-6 mt-2 col-md-2 mt-md-5">
                    </div>



                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <NavLink to="/dashboard">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#00306e" }}>
                                <div className="d-flex align-items-center">
                                    <div className="m-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                        <span className="text-center">Dashbord</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <NavLink to="/student">
                            <div className="shadow bg-success text-white card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="m-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft"><FcReadingEbook /> </h4>
                                        <span className="text-center">Student</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188a6" }}>
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcInspection /> </h4>
                                    <span className="text-center">Exam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow bg-dark text-white card p-2">
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcInspection /> </h4>
                                    <span className="text-center">Final Exam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow bg-warning text-white card p-2">
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-5">
                    </div>

                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#3BC6AC" }}>
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow bg-success text-white card p-2">
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188a6" }}>
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow bg-dark text-white card p-2">
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow bg-warning text-white card p-2">
                            <div className="d-flex align-items-center">
                                <div className="m-3 w-100">
                                    <h4 className="mb-0 mt-0 textLeft"><FcPieChart /> </h4>
                                    <span className="text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
