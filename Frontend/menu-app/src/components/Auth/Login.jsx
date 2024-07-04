import React, {useState} from "react";
import { loginUser } from "../../API/api";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(data);
        if (response.success) {
            alert('Login success');
            console.log("Cookies after login:", document.cookie);
        }
        console.log(response)
    }
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Row className="w-100">

                <Col xs={12} md={6} lg={4} className="mx-auto">

                    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm mb-5 bg-warning">
                    {/* <h2 >Login</h2> */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={data.email}
                                onChange={handleChange}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login