import React from 'react'

class LoginForm extends React.Component {
constructor() {
  super()

  this.state = {
    name: '',
    email:'',
    password:''
  };

  this.handleChange = this.handleChange.bind(this);  
}

// handleChange(event) {
//   this.setState({
//     email: event.target.value,
//   })
// }

// handleChangePassword = (event) => {
//   this.setState({
//     password: event.target.value,
//   })
// }

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

handleSubmit = () => {
  
  alert('Login efetuado com sucesso bo email' + email);
  const { email } = this.state
}

  render() {
    const { email, password } = this.state
    return (
      <section className="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='email'>
            Email:
            <input 
            value= {email} 
            onChange= {this.handleChange}
            type="email" 
            name="email" 
            id="email" />
          </label>

          <label htmlFor='password'>
            Password:
            <input 
            value= {password} 
            // onChange= {this.handleChangePassword}
            onChange= {this.handleChange}
            type="password" 
            name="password" 
            id="password" />
          </label>

          <button type="submit">Fazer Login</button>
        </form>
      </section>
    );
  }

}

export default LoginForm;