import React from 'react';


const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
    },
    footer: {
        background: '#ffb5ba',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: '#f19cbb',
        padding: '0 20px',
    },
};

function Footer() {
    return (
        <div style={styles.card}>
            <div style={styles.footer}>
                <footer className="footer">
                    <a href='https://github.com/TiffanyParks'>GitHub Link</a>
                </footer>
            </div>
        </div>
    );
}

export default Footer;