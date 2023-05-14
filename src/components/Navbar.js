import React from 'react';
import { useState } from 'react';
import Card from './Card';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#555',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: '#f19cbb',
    padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {


  return (
    <div style={styles.card}>
      <div style={styles.heading}>
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>About Me</span>
          <span className="visually-hidden"> card</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>My Work</span>
          <span className="visually-hidden"> card</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Contact Me</span>
          <span className="visually-hidden"> card</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
