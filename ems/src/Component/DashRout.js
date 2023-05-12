import React from 'react'
import Dashboard from './Dashboard'
import Student from './Student'
import Sidebar from 'cdbreact/dist/components/Sidebar/SidebarMenu ';

function DashRout() {
    return (
        <div>
            <Sidebar></Sidebar>
            <Dashboard></Dashboard>
            <Student></Student>


        </div>
    )
}

export default DashRout
