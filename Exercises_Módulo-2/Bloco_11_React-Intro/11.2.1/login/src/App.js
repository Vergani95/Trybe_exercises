import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

class App extends React.Component {
  render() {
    return (
      <main className="App">
    <LoginForm />
    <RegisterForm />
      </main>
    );
  }
}

export default App;
