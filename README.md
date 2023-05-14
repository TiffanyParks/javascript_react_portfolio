Description:

The React Portfolio highlights my accomplishments while pursuing a Computer Programmer Certificate of Completion from UNC Charlotte. This knowledge has enabled me to operate in JavaScript and Node.js platforms and master multiple client-side and server-side principles. Users may visit my GitHub URL provided in this README.md and the footer of my portfolio. Thank you for visiting!

User Story:

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

Acceptance Criteria:

GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)



GitHub URL: https://github.com/TiffanyParks/javascript_react_portfolio.git

Dependencies:
* Testing-library/jest-dom: 5.16.4,
* Testing-library/react: 11.1.0,
* Testing-library/user-event: 13.5.0,
* Axios: 1.4.0,
* Bootstrap: 5.2.3,
* Dotenv: 16.0.3,
* React: 17.0.2,
* React-dom: 17.0.2,
* React-scripts: 5.0.1,
* Web-vitals: 2.1.4
  
  Scripts: 
* Start: react-scripts start,
* Build: react-scripts build,
* Best: react-scripts test,
* Eject: react-scripts eject

  eslintConfig: 
* Extends: [
      "react-app",
      "react-app/jest"
    ]
  
  Browserslist: 
* Production: [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],

    Development: 
    * Last 1 Chrome Version",
    * Last 1 Firefox Version",
    * Last 1 Safari Version"
 