import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            {/* Header Section */}
            <header
                className="text-center py-5 text-white"
                style={{
                    backgroundColor: "#C586A5",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h1 className="fw-bold">Privacy Policy</h1>
                <p className="mt-2" style={{color: "white"}}>Last Updated: January 24, 2025</p>
            </header>

            {/* Main Content Section */}
            <section className="container my-5">
                <div className="content bg-light p-4 rounded shadow-sm">
                    <h2 className="text-primary">
                        <i className="bi bi-file-earmark-text me-2"></i>1. Information We
                        Collect
                    </h2>
                    <p>We collect the following types of information when you use our services:</p>
                    <ul>
                        <li>
                            <strong>Personal Information:</strong> Name, email, phone number,
                            etc.
                        </li>
                        <li>
                            <strong>Non-Personal Information:</strong> Device, browser info,
                            etc.
                        </li>
                    </ul>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-gear me-2"></i>2. How We Use Your Information
                    </h2>
                    <p>Your data is used for the following purposes:</p>
                    <ul>
                        <li>Provide and improve services</li>
                        <li>Respond to your inquiries</li>
                        <li>Send marketing communications (only if you opt-in)</li>
                        <li>Analyze website usage to enhance user experience</li>
                    </ul>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-cookie me-2"></i>3. Cookies
                    </h2>
                    <p>We use cookies to enhance your browsing experience. You can control cookies via your browser settings.</p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-person-badge me-2"></i>4. Third-Party Services
                    </h2>
                    <p>
                        We may use third-party services like Google Analytics for monitoring
                        user behavior and serving ads.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-shield-lock me-2"></i>5. Data Security
                    </h2>
                    <p>
                        We employ reasonable security measures to protect your data but
                        cannot guarantee complete security due to inherent risks in online
                        data transmission.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-people me-2"></i>6. Your Rights
                    </h2>
                    <p>
                        You have the right to access, update, or delete your personal data.
                        To do so, contact us at: <strong>support@mamamia.com</strong>
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-person-x me-2"></i>7. Children's Privacy
                    </h2>
                    <p>
                        Our site is not intended for children under 13. We do not knowingly
                        collect personal data from children.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-pencil me-2"></i>8. Changes to This Privacy
                        Policy
                    </h2>
                    <p>
                        We may update this policy from time to time. All changes will be
                        posted on this page with the date of the latest revision.
                    </p>

                    <h2 className="text-primary mt-4">
                        <i className="bi bi-envelope me-2"></i>9. Contact Us
                    </h2>
                    <p>If you have any questions or concerns, feel free to reach out to us at:</p>
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

export default PrivacyPolicy;
