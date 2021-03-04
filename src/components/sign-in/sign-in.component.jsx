import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
        // console.log(e.target)
    }

    handleChange = e => {
        const { value, name } = e.target;
        // console.log(e.target)
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