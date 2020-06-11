import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import Footer from "../../components/layout/Footer";
import {Link} from "react-router-dom";


class PrivacyPolicyPage extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container mt-lg-5 mb-lg-5 main-text">
                    <div className="pl-lg-5">
                        <h2>Privacy Policy</h2>
                        <p>This privacy policy is meant to help you understand what information we collect, use, and how
                            we
                            protect your information.</p>
                        <p>If you have questions about our privacy practices that are not addressed in this Privacy
                            Policy,
                            please contact us.</p>
                        <h4>What personal information do we collect from the people that visit our website?</h4>
                        <p>We collect information about you that you voluntarily provide us when you: (i) Make a
                            reservation
                            through our website (ii) Submit a comment to us through our contact us page. (iii) Contact
                            our
                            customer service. This information may include your name, email, phone number mailing
                            address and
                            any other information you choost to provide us when submitting a comment through our website
                            or via
                            email.</p>
                        <h4>How do we use your information?</h4>
                        <p>We may use your information in the following ways:</p>
                        <p>To follow up after correspondence (comments, suggestions and help requests;
                            To process your transactions;
                            To send you a reservation confirmation email and information regarding your stay with us;
                            and
                            To protect STARS of Boston Services and the right of Users and others to enforce the terms
                            of the
                            STARS of Boston Services.</p>
                        <h4>Sharing of Information</h4>
                        <p>We share information with:</p>
                        <p>Other companies that we have hired to provide services on our behalf;
                            Businesses and members of the public, when data is aggregated and does not personally
                            identify you;
                            Other third parties where necessary for our business purposes or as required by law; and
                            Otherwise with your consent.</p>
                        <h4>Security</h4>
                        <p>Your personal information is contained behind secured networks and is only accessible by a
                            limited
                            number of persons who have special access rights to such systems, and are required to keep
                            the
                            information confidential. In addition, all sensitive/credit information you supply is
                            encrypted via
                            Secure Socket Layer (SSL) technology. We maintain technical, physical, and administrative
                            security
                            measures designed to provide reasonable protection for your information against loss,
                            misuse,
                            unauthorized access, disclosure, and alteration. The security measures include firewalls,
                            data
                            encryption, physical access controls to our data centers, and information access
                            authorization
                            controls.</p>
                        <h4>Payment</h4>
                        <p>We use BrainTree for processing payments. We/BrainTree do not store your card data on
                            our/their
                            servers. The data is encrypted through the Payment Card Industry Data Security Standard
                            (PCI-DSS)
                            when processing payment. Your purchase transaction data is only used as long as is necessary
                            to
                            complete your purchase transaction. After that is complete, your purchase transaction
                            information is
                            not saved.</p>
                        <p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security
                            Standards
                            Council, which is a joint effort of brands like Visa, MasterCard, American Express and
                            Discover.</p>
                        <p>PCI-DSS requirements ensures the secure handling of credit card information by our store and
                            its
                            service providers.</p>
                        <p>For more insight, you may also want to read the privacy policy of BrainTree</p>
                        <h4>Information you share</h4>
                        <p>When you provide us with personal information to complete a transaction, verify your credit
                            card,
                            pay for an online consultation, we imply that you consent to our collecting it and using it
                            for that
                            specific reason only.</p>
                        <h4>Disclosure</h4>
                        <p>We may disclose your personal information if we are required by law to do so, or if you
                            violate our
                            Terms of Service</p>
                        <h4>Third-party links</h4>
                        <p>Occasionally, at our discretion, we may include or offer third-party products or services on
                            our
                            website. These third-party sites have separate and independent privacy policies. We
                            therefore have
                            no responsibility or liability for the content and activities of these linked sites.
                            Nonetheless, we
                            seek to protect the integrity of our site and welcome any feedback about these sites.</p>
                        <h4>California Online Privacy Protection Act</h4>
                        <p>CalOPPA is the first state law in the nation to require commercial websites and online
                            services to
                            post a privacy policy. The law's reach stretches well beyond California to require any
                            person or
                            company in the United States (and conceivably the world) that operates websites collecting
                            Personally Identifiable Information from California consumers to post a conspicuous privacy
                            policy
                            on its website stating exactly the information being collected and those individuals or
                            companies
                            with whom it is being shared. You can see more at CalOPPA</p>
                        <p>According to CalOPPA, we agree to the following:</p>
                        <p>Users can visit our site anonymously.</p>
                        <p>Once this privacy policy is created, we will add a link to it on our home page or as a
                            minimum, on
                            the first significant page after entering our website.</p>
                        <p>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified
                            above.</p>
                        <p>You will be notified of any Privacy Policy changes on our Privacy Policy Page</p>
                        <p>Can change your personal information:</p>
                        <p>By emailing us<br/>
                            By calling us<br/>
                            Sending us a comment through our contact us page.</p>
                        <h4>Children's Privacy</h4>
                        <p>STARS of Boston services are intended for a general audience and are not directed at
                            individuals
                            under the age of majority. We do not knowinlgy collect information from children and do not
                            specifically advertise to children. If we obtain knowledge that we have collected
                            information from a
                            child, we will promptly delete it. If you believe we have mistakenly or unintentionally
                            collected
                            information from a child, contact us.</p>
                        <h4>Contact</h4>
                        <p>If you have general questions about our Privacy Policy and practices or questions about your
                            personal data, you may <Link to="/Contact">contact us</Link>.</p>
                    </div>
                </div>
                <Footer/>
            </header>
        )
    }


}

export default PrivacyPolicyPage