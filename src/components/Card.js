import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#ededed',
  },
  heading: {
    background: '#ffb5ba',
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
function Card(props) {
  return (
    <div style={styles.card}>
      <div id='my-work' style={styles.heading}>{props.name}</div>
      <div style={styles.content}>
<p htmlFor={props.id}>Paragraph</p>
      </div>
    </div>
  );
}

export default Card;