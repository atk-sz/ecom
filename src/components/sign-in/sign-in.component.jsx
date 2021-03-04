import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.log("error in sign in with email & pass")
            console.log(err.message)
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with google</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required label='email' handleChange={this.handleChange} />
                    <FormInput type="password" name="password" value={this.state.password} required label='password' handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <div onClick={signInWithGoogle}>
                            <CustomButton isGoogleSignIn>
                                Google
                            </CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;