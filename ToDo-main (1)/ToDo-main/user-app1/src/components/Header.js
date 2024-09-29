import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"; // Include CSS for styling

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faTasks} className="text-danger me-2" size="2x" />
            <div>
              <h5 className="mb-0">Tasks</h5>
              <small className="text-muted">All Tasks</small>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="btn-group ms-auto" role="group" aria-label="Basic example">
              <Link to="/add">
                <button type="button" className="btn btn-primary">New Task</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
