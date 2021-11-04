import React from 'react'

class RegisterForm extends React.Component {
  constructor() {
    super()
  
    this.state = {
      email:'',
      password:''
    };
  
    this.handleChange = this.handleChange.bind(this);  
  }
  

  
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
        <section className="register-form">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit}>

          <label htmlFor='name'>
              Name:
              <input 
              value= {name} 
              onChange= {this.handleChange}
              type="text" 
              name="name" 
              id="name" />
            </label>

            <label htmlFor='email'>
              Register:
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
  
            <button type="submit">Fazer Cadastro</button>
          </form>
        </section>
      );
    }
  
  }

export default RegisterForm;