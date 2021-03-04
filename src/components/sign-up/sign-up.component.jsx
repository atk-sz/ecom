import React from "react";
import './sign-up.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUser } from "../../firebase/firebase";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUser(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.log("err in signup",e.message)
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a accounct</h2>
                <span>Sign up with email</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} required label='displayName' handleChange={this.handleChange} />
                    <FormInput type="email" name="email" value={this.state.email} required label='email' handleChange={this.handleChange} />
                    <FormInput type="password" name="password" value={this.state.password} required label='password' handleChange={this.handleChange} />
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} required label='ConfirmPassword' handleChange={this.handleChange} />
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>

        )
    }
}

export default SignUp;