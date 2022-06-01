import React from "react"
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react"
import { Link } from "react-router-dom";
import styles from "./login.module.css"
import { useForm } from "react-hook-form";


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Grid textAlign="center" className={styles.container}>
            <Grid.Column style={{ maxWidth: 500, marginTop: "2rem" }}>
            <h1 className={styles.formHeader}>ChitChat<span>.io</span> </h1>
                <Form className={styles.form} onSubmit={handleSubmit} >
                    <Segment>
                        <Form.Input
                            fluid
                            size="large"
                            icon="mail"
                            iconPosition="left"
                            name="email"
                            placeholder="Email Adresse"
                            type="email"
                        />
                        <Form.Input
                            fluid
                            size="large"
                            icon="lock"
                            iconPosition="left"
                            name="password"
                            placeholder="********"
                            type="password"
                        />
                        <Button color="purple" fluid size="large">
                            Login
                        </Button>
                    </Segment>

                </Form>
                <Message>
                    <span> Don't have an account? </span><Link to="/signup">Sign up</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
};

export default Login;
