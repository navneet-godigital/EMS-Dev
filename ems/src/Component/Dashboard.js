import React from 'react'
import {
    FcPieChart,
    FcReadingEbook,
    FcInspection,
    FcTodoList,
    FcCollaboration
} from "react-icons/fc";
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <NavLink to="/dashboard">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                        <span className="link_text text-center">Dashbord</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <NavLink to="/student">
                            <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                                <div className="d-flex align-items-center">
                                    <div className="mt-2 mb-3 w-100">
                                        <h1 className="mb-0 mt-0 textLeft"><FcReadingEbook /> </h1>
                                        <span className="link_text text-center">Student</span>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcInspection /> </h1>
                                    <span className="link_text text-center">Exam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcInspection /> </h1>
                                    <span className="link_text text-center">Final Exam Request</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcTodoList /> </h1>
                                    <span className="link_text text-center">Notice</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcCollaboration /> </h1>
                                    <span className="link_text text-center">Inbox</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2 col-md-2 mt-md-4">
                        <div className="shadow text-white card p-2" style={{ backgroundColor: "#1188A6" }}>
                            <div className="d-flex align-items-center">
                                <div className="mt-2 mb-3 w-100">
                                    <h1 className="mb-0 mt-0 textLeft"><FcPieChart /> </h1>
                                    <span className="link_text text-center">Dashbord</span>
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
