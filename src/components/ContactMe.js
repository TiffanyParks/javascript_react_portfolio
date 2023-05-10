import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#ededed',
  },
  heading: {
    background: '#ffb5bc',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: '#555',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function ContactMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Contact Me</div>
      <div style={styles.content}>
    <p>Hello</p>
      </div>
    </div>
  );
}

export default ContactMe;