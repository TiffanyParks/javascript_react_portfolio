import React from 'react';
import profileImage from '../images/profile_image.png';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#ededed',
  },
  heading: {
    background: '#ffb8bf',
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
function AboutMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>

        <p>Summary</p>
        <img src={profileImage} className='items' alt="self protrait" />
        <p>
          Testing
        </p>



        {/* <img src="https://media.licdn.com/dms/image/C560BAQGeCPin8jl-nA/company-logo_100_100/0/1600460945136?e=1691020800&v=beta&t=ACT5d3FtH-gCYPSXWI1AbAiNOPrwk5CLDHpGXPV7qX8"
          length="20" width="20" class="sub-container-2" /> <p>Product Engineering Manager</p>

        <br />

        <img src="https://media.licdn.com/dms/image/C4D0BAQHAVFWZ_wcHWA/company-logo_100_100/0/1519856272591?e=1691020800&v=beta&t=v3Y4Lw31iz3D99_zbqYSFFCCSR9DOZ6cOhcpMUCKzjs"
          length="20" width="20" class="sub-container-2" /> <p>Lake Forest Graduate School of Management</p>
        <p>Master's degree, Leadership in Analytic DataMaster's degree</p> 
        <p>2018 - 20222018 - 2022</p>
        <p>Grade: GPA 3.8</p>

        <br />

        <img src="https://media.licdn.com/dms/image/C4D0BAQHbQlM3aoqpmQ/company-logo_100_100/0/1649171103326?e=1691020800&v=beta&t=yxj1QzQE7ItD6kkYa0TN8gXYnMLb7YXjFr6MmyBpOT4"
          length="20" width="20" class="sub-container-2" />
       <p> Pfeiffer UniversityPfeiffer University
        Bachelor of Applied Science - BASc, Management Information Systems, GeneralBachelor of Applied Science -
        BASc, Management Information Systems, General
        2010 - 20132010 - 2013
        Grade: GPA 3.5Grade: GPA 3.5
        Activities and societies: Phi Zeta Chapter Member
        Activities and societies: Alpha Sigma Lambda, Phi Zeta Chapter</p> */}
      </div>
    </div>
  );
}

export default AboutMe;
