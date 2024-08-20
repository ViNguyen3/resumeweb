import { Alert } from "react-bootstrap";
import { useState, useEffect} from "react";

export const Newsletter = ({onValidated, status, message}) => {
    
    const [email,setEmail] = useState('');
    //validating the email address
    const handleSubmit = () => {
        e.prevenDetail();
        email &&
        email.indexOf("@") > -1
        onValidated({
            EMAIL:email
        })
    }

    const clearFields = () => {

    }

    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant >Sending...</Alert>}    
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}></form>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                            <button type="submit">Submit</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}