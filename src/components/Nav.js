import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {projectsList} from '../redux/actions';

export  const Nav = () =>{
	const dispatch = useDispatch();
	const getProjects = () =>{
		dispatch(projectsList())
	}
	const logout = () =>{
		window.localStorage.clear();
		window.location.href = "http://localhost:3000"
	}
	return(
		<nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>

  </button>
  <button onClick={logout}>Logout</button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <Link to="/home" className="nav-link">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fa fa-home"></i>
          Home
          <span class="sr-only">(current)</span>
          </a>
      </li>
      </Link>
      <li class="nav-item dropdown">
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav ">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-bell">
            <span class="badge badge-info">11</span>
          </i>
          Notifications
        </a>
      </li>
     <Link to="/projects" className="nav-link"  onClick = {getProjects}>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="fa fa-briefcase">
            <span class="badge badge-success">11</span>
          </i>
          Projects
        </a>
      </li>
      </Link>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
)
} 