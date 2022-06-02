import React, { useState, useEffect } from "react"
import { useFirebase } from 'react-redux-firebase'
import { Form, Segment, Button, Grid, Message } from "semantic-ui-react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./signup.module.css"


const SignUp = () => {
    const firebase = useFirebase()
    const { register, formState: { errors }, handleSubmit, setValue } = useForm()
    const [fbErrors, setFbErrors] = useState([])
    const [submitting, setSubmitting] = useState(false)


    useEffect(() => {
        register("username", { required: true })
        register("email", { required: true });
        register("password", { required: true, minLength: 6 });
    }, [])

    const onSubmit = ({ username, email, password }, e) => {
        setSubmitting(true)
        setFbErrors([]) //her submit apildiginda hata mesajlarini sifirlar

        const [first, last] = username.split(' ') //basharflerden bir avatar olusturmak icin

        firebase.createUser(
            { email, password },
            {
                name: username,
                avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`
            }
        )
            .then((user) => {
                console.log(user)
                setSubmitting(false)
            })
            .catch((error) => {
                setFbErrors([{ message: error.message }])
                setSubmitting(false)
            })
    }


    /*
    //bu fonksiyonu 116. satirda cagirarak error message display yapmak istedik ama olmadi. Neden???
    const displayErrors = () => {
        fbErrors.map((error, index) => {
            return(
                <p key={index}>{error.message}</p>
            )
        })
    }
    */

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
                            error={errors.username ? true : false}

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
                            error={errors.email ? true : false}
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
                            error={errors.password ? true : false}
                        />
                        <Button color="purple" fluid size="large" disabled={submitting}>
                            Sign up
                        </Button>
                    </Segment>

                </Form>

                {
                    fbErrors.length > 0 && (
                        <Message error >
                            {
                                fbErrors.map((error, index) => {
                                    return(
                                        <p key={index}>{error.message}</p>
                                    )
                                })
                            }
                        </Message>
                    )
                }
                <Message>
                    <span> Do you already have an account? </span><Link to="/login">Login</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
};

export default SignUp;
