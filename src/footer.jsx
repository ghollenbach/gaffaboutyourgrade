import React from 'react';

function Footer() {
    return (
        <footer style={{
            marginTop: '40px',
            padding: '16px 0',
            background: '#c8bbe0',
            color: '#331879',
            textAlign: 'center',
            fontSize: '0.95rem'
        }}>
            © {new Date().getFullYear()} Gaff About Your Grade. All rights reserved.
        </footer>
    );
}

export default Footer;