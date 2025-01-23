import React from "react";

const TermsOfService = () => {
    return (
        <div className="terms-of-service-container">
            {/* Header Section */}
            <header
                className="text-center py-5 text-white"
                style={{
                    backgroundColor: "#C586A5",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h1 className="fw-bold">Terms of Service</h1>
                <p className="mt-2" style={{color: "white"}}>Last Updated: January 24, 2025</p>

            </header>

            {/* Main Content Section */}
            <section className="container my-5">
                <div className="content bg-light p-4 rounded shadow-sm">
                    <h2 className="text-primary mt-3">
                        <i className="bi bi-check-circle me-2"></i>1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing or using the MamaMia website and services, you agree to
                        comply with and be bound by these Terms of Service. If you do not
                        agree with these terms, you may not use the website.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-globe me-2"></i>2. Use of the Website
                    </h2>
                    <p>
                        You may use the website for lawful purposes only. You are prohibited
                        from using the website in any way that could damage, disable, or
                        impair its functionality or interfere with any other user's ability
                        to use the website.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-person-circle me-2"></i>3. User Accounts
                    </h2>
                    <p>
                        If you create an account on MamaMia, you are responsible for
                        maintaining the confidentiality of your login credentials and are
                        fully responsible for all activities that occur under your account.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-image me-2"></i>4. Content
                    </h2>
                    <p>
                        All content on the MamaMia website, including text, images, logos,
                        and videos, is owned by MamaMia or its content providers and is
                        protected by copyright and intellectual property laws. You may not
                        use this content without permission.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-link me-2"></i>5. Third-Party Links
                    </h2>
                    <p>
                        Our website may contain links to third-party websites. We do not
                        control, and are not responsible for, the content or practices of
                        these external websites. By using these links, you acknowledge that
                        you are leaving MamaMia's website.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-shield-lock me-2"></i>6. Privacy
                    </h2>
                    <p>
                        Your use of the website is governed by our Privacy Policy, which is
                        incorporated into these Terms of Service. Please review the Privacy
                        Policy for information on how we collect, use, and protect your
                        data.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-exclamation-circle me-2"></i>7. Limitation of
                        Liability
                    </h2>
                    <p>
                        MamaMia will not be liable for any direct, indirect, incidental,
                        special, or consequential damages resulting from your use or
                        inability to use the website.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-x-circle me-2"></i>8. Termination
                    </h2>
                    <p>
                        We may suspend or terminate your access to the website at any time,
                        without notice, for conduct that we believe violates these Terms of
                        Service or is harmful to other users or the website.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-file-earmark-text me-2"></i>9. Changes to Terms
                        of Service
                    </h2>
                    <p>
                        MamaMia reserves the right to update or change these Terms of
                        Service at any time. The most current version will be posted on this
                        page with the date of the last update.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-gavel me-2"></i>10. Governing Law
                    </h2>
                    <p>
                        These Terms of Service are governed by and construed in accordance
                        with the laws of [Your Country/State]. Any disputes arising from
                        these terms shall be resolved in the courts located in [Your
                        Jurisdiction].
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-envelope me-2"></i>11. Contact Information
                    </h2>
                    <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
                    <ul className="list-unstyled">
                        <li>Email: <strong>support@mamamia.com</strong></li>
                        <li>Phone: <strong>04-456 9834</strong></li>
                        <li>Address: University Sains Malaysia</li>
                    </ul>
                </div>
            </section>

            {/* Footer Section */}
            <footer
                className="text-center py-4 text-white"
                style={{ backgroundColor: "#343a40" }}
            >
                <p className="mb-0">© 2025 MamaMia. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TermsOfService;

