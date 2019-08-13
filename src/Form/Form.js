import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        });
    };

    
    render() {
        return (
            <div className="form">
                <h1>Fill in the form below and we will get back to you</h1>
                <form autoComplete="disabled">
                    <input
                        autoComplete="off"
                        name="firstName"
                        placeholder='first name'
                        value={this.state.value}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        autoComplete="off"
                        name="lastName"
                        placeholder='last name'
                        value={this.state.value}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        autoComplete="disabled"
                        name="username"
                        placeholder='username'
                        value={this.state.value}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        autoComplete="off"
                        name="email"
                        placeholder='Email'
                        value={this.state.value}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <input
                        autoComplete="off"
                        name="password"
                        type="password"
                        placeholder='password'
                        value={this.state.value}
                        onChange={e => this.change(e)}
                    />

                    <br />

                    <label>
                       <h4> Select your specialty:</h4>
                        
                            <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">React.js</option>
                            <option value="lime">WordPress</option>
                            <option value="coconut">UI Design</option>
                            <option value="mango">Python</option>
                            </select>
                    </label>

                    <br />
                    <br />

                    <button onClick={e => this.onSubmit(e)}>
                        Submit
                    </button>
                    
                </form>
            </div>
        )
    }

}