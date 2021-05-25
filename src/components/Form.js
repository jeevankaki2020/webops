import React, { Component } from 'react';

const validEmailRegex = RegExp(
    /.+@smail.iitm.ac.in/
  );
  const validateForm =({ errors}, ...rest) => {
    let valid = true;
    Object.values(errors).forEach(val => {val.length > 0 && (valid = false);});
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
  };

  class Form extends Component {
    constructor(props) {
        super(props);   
        this.state={
            Name:'',
            rollno:'',
            contactno:'',
            email:'',
            password:'',
            confirmpwd:'',
            errors: {
                Name:'',
                rollno:'',
                contactno:'',
                email:'',
                password:'',
                confirmpwd:''
            }
        };
    }
    
    handleSubmit = event => {
      event.preventDefault();
  
      if (validateForm(this.state)) {
        console.log(`
          --SUBMITTING--
          Name: ${this.state.Name}
          Roll no: ${this.state.rollno}
          Contact no: ${this.state.contactno}
          Email: ${this.state.email}
          Password: ${this.state.password}
          Cpassword: ${this.state.confirmpwd}
        `);
        window.location.replace("/List");
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    }; 
   

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = {...this.state.errors};

    switch (name) {
        case 'Name': 
          errors.Name = 
            value.length < 3
              ? 'Full Name must be at least 3 characters long!'
              : '';
          break;
        case 'rollno':
            errors.rollno = 
              value.length === 8 ? "" : "Invalid Roll Number";
          break; 
          case 'contactno':
            errors.contactno = 
              value.length === 10 ? "" : "Invalid Contact Number";
          break;   
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be at least 8 characters long!'
              : '';
          break;
          case 'confirmpwd': 
          errors.confirmpwd = 
            value === this.state.password
              ? ''
              : 'Not matching with password';
          break;
        default:
          break;
      }
      this.setState({errors, [name]: value}, () => console.log(this.state));
    };
  

    render() {
        const {errors} = this.state;
        return (
        <div className = 'wrapper'>
         <div className = 'form-wrapper'>
            <form onSubmit = {this.handleSubmit} noValidate>
                <div className = 'Name'>
                    <label htmlFor = "Name">Name:</label>
                    <input 
                    type = "text"
                    name = "Name"
                    placeholder = "Enter your Name"
                    onChange = {this.handleChange} noValidate />
                    {errors.Name.length > 0 && 
                <span className='error'>{errors.Name}</span>}
                </div>
                <div className = 'rollno'>
                    <label htmlFor = "rollno">Roll Number:</label>
                    <input
                    type = "text"
                    placeholder = "Enter your Roll Number"
                    name = 'rollno'
                    onChange = {this.handleChange} noValidate />
                    {errors.rollno.length > 0 && 
                <span className='error'>{errors.rollno}</span>}
                </div>
                <div className='contactno'>
                    <label className="contactno">Contact Number:</label>
                    <input
                    type="number"
                    name = 'contactno'
                    placeholder="Enter your Contact No."
                    onChange={this.handleChange} noValidate  />
                    {errors.contactno.length > 0 && 
                <span className='error'>{errors.contactno}</span>}
                </div>
                <div className='email'>
                    <label className="email">Email:</label>
                    <input
                    type="text"
                    name = 'email'
                    placeholder="rollno@smail.iitm.ac.in"
                    onChange={this.handleChange} noValidate />
                    {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                </div>
                <div className='password'>
                    <label className="password">Password:</label>
                    <input
                    type="password"
                    name = 'password'
                    placeholder="Enter Password"
                    onChange={this.handleChange} noValidate />
                    {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
                </div>
                <div className='confirmpwd'>
                    <label className="confirmmpwd">Confirm Password:</label>
                    <input
                    type="password"
                    name = 'confirmpwd'
                    placeholder="Re-enter the password"
                    onChange={this.handleChange} noValidate />
                    {errors.confirmpwd.length > 0 && 
                <span className='error'>{errors.confirmpwd}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
         </div>
         </div> 
        );
    }
}

export default Form;
