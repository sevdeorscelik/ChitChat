import React from "react"
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react"
import { Link } from "react-router-dom";
import styles from "./signup.module.css"


const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Grid textAlign="center" className={styles.container}>
            <Grid.Column style={{ maxWidth: 500, marginTop: "2 rem" }}>
                <h1 className={styles.formHeader}>ChitChat<span>.io</span> </h1>
                <Form className={styles.form} onSubmit={handleSubmit} >
                    <Segment>
                    <Form.Input
                            fluid
                            size="large"
                            icon="user"
                            iconPosition="left"
                            name="username"
                            placeholder="Username"
                            type="text"
                        />
                        <Form.Input
                            fluid
                            size="large"
                            icon="mail"
                            iconPosition="left"
                            name="email"
                            placeholder="E-mail Adresse"
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
                            Sign up
                        </Button>
                    </Segment>

                </Form>
                <Message>
                    <span> Do you already have an account? </span><Link to="/login">Login</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
};

export default SignUp;
