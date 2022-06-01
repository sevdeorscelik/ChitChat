import React, {useEffect} from "react"
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./signup.module.css"


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm()

    useEffect(() => {
        register("username", { required: true })
        register("email", { required: true });
        register("password", { required: true, minLength: 6 });
    }, [])

    const onSubmit = (data, e) => {
        console.log(data);
    }

    return (
        <Grid textAlign="center" className={styles.container}>
            <Grid.Column style={{ maxWidth: 500, marginTop: "2 rem" }}>
                <h1 className={styles.formHeader}>ChitChat<span>.io</span> </h1>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
                    <Segment>
                        <Form.Input
                            fluid
                            size="large"
                            icon="user"
                            iconPosition="left"
                            name="username"
                            placeholder="Username"
                            type="text"
                            autoComplete='on'
                            onChange={(e, { name, value }) => {
                                setValue(name, value)
                            }}
                            error = {errors.username ? true : false}
                           
                        />
                        <Form.Input
                            fluid
                            size="large"
                            icon="mail"
                            iconPosition="left"
                            name="email"
                            placeholder="E-mail Adresse"
                            type="email"
                            autoComplete='on'
                            onChange={(e, { name, value }) => {
                                setValue(name, value)
                            }}
                            error = {errors.email ? true : false}
                        />
                        <Form.Input
                            fluid
                            size="large"
                            icon="lock"
                            iconPosition="left"
                            name="password"
                            placeholder="********"
                            type="password"
                            autoComplete='on'
                            onChange={(e, { name, value }) => {
                                setValue(name, value)
                            }}
                            error = {errors.password ? true : false}
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
