import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <h3 className="footer-title">To Do List</h3>
          <p className="footer-description">
            Organize your tasks and get things done efficiently.
          </p>
          <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
          <p className="footer-copy">&copy; {new Date().getFullYear()} To Do List App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
