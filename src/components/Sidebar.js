import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Student-Details</div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to='dasshboard'>
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        {/* <i className="fas  fa-grid-horizontal"></i> */}
        <span>Dashboard</span></a></Link>
</li>


{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
<li className="nav-item active">
    <Link to='createstudent'>
    <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>

        <span>Create-Student</span></a></Link>
</li>

</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Nav Item - Pages Collapse Menu --> */}

{/* <!-- Divider --> */}
<hr className="sidebar-divider d-none d-md-block"/>

{/* <!-- Sidebar Toggler (Sidebar) --> */}
<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>

{/* <!-- Sidebar Message --> */}
<div className="sidebar-card d-none d-lg-flex">
    <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
    <p className="text-center mb-2"><strong>Students</strong> </p>
    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>

</ul>
  </>
    
}

export default Sidebar