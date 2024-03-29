import React from 'react';

export default function Footer() {
    return (
    <footer id="contact">
        <ul class="contact-links">
            <li class="link"><a href="https://www.linkedin.com/in/chris-tierney-833611180/">LinkedIn</a></li>
            <li class="link"><a href="https://github.com/christierney3">GitHub</a></li>
            <li class="link"><a href={`${process.env.PUBLIC_URL}/images/CT_Apex_Resume.pdf`} download='ct_resume'>Resume</a></li>
        </ul>
    </footer>
    )
}