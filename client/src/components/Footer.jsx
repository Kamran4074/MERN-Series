export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container grid grid-three-cols">
                <div className="footer-brand">
                    <h3>Kamronix</h3>
                    <p>Reliable, scalable software & modern tech services.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email: <a href="mailto:info@kamronix.com">info@kamronix.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    <div className="social">
                        <a href="#" aria-label="Twitter" title="Twitter">
                            {/* simple SVG icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.1 1.53-1.9-.68.4-1.44.68-2.24.84C18.6 4.6 17.33 4 16 4c-2.36 0-4.27 1.9-4.27 4.24 0 .33.04.66.11.97-3.55-.18-6.7-1.88-8.81-4.48-.37.62-.58 1.34-.58 2.11 0 1.46.74 2.75 1.86 3.51-.68-.02-1.32-.21-1.88-.52v.05c0 2.04 1.45 3.74 3.37 4.12-.35.1-.72.15-1.1.15-.27 0-.54-.03-.8-.08.54 1.66 2.08 2.87 3.91 2.9-1.43 1.12-3.23 1.78-5.19 1.78-.34 0-.67-.02-1-.06 1.86 1.19 4.07 1.88 6.44 1.88 7.72 0 11.94-6.4 11.94-11.94v-.54c.82-.6 1.53-1.35 2.09-2.2-.76.34-1.57.57-2.42.67z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" title="LinkedIn" style={{ marginLeft: 8 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5v15H0v-15zM8.5 8.98h4.78v2.05h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.33 6 7.66v8.89h-5V17.7c0-2.28-.04-5.21-3.18-5.21-3.18 0-3.67 2.5-3.67 5.06v6.46h-5v-15z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {year} Kamronix. All rights reserved.</p>
            </div>
        </footer>
    );
};
