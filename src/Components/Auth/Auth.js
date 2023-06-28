import React, { Component } from "react";
import Input from "../Input/Input";
import classes from "./Auth.module.css";



class Auth extends Component {
state = {
controls: {
email: {
  elementType: "input",
  elementConfig: {
    type: "email",
    placeholder: "Mail Address",
  },
  value: "",
  validation: {

          required: true,

          isEmail: true,

        },

        valid: false,

        touched: false,

      },

    },

    login: false,

  };



  checkValidity(value, rules) {

    let isValid = true;

    if (!rules) {

      return true;

    }

    if (rules.required) {

      isValid = value.trim() !== "" && isValid;

    }

    if (rules.minLength) {

      isValid = value.length >= rules.minLength && isValid;

    }



    if (rules.maxLength) {

      isValid = value.length <= rules.maxLength && isValid;

    }



    if (rules.isEmail) {

      const pattern =

        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;



      isValid = pattern.test(value) && isValid;

    }



    if (rules.isNumeric) {

      const pattern = /^\d+$/;



      isValid = pattern.test(value) && isValid;

    }



    return isValid;

  }



  inputChangedHandler = (event, controlName) => {

    const updatedControls = {

      ...this.state.controls,



      [controlName]: {

        ...this.state.controls[controlName],



        value: event.target.value,



        valid: this.checkValidity(

          event.target.value,

          this.state.controls[controlName].validation

        ),



        touched: true,

      },

    };



    this.setState({ controls: updatedControls });

  };



  contineLoginHandler = () => {

    this.setState({

      controls: {

        password: {

          elementType: "input",

          elementConfig: {

            type: "password",

            placeholder: "Password",

          },

          value: "",

          validation: {

            required: true,

            minLength: 6,

          },

          valid: false,

          touched: false,

        },

      },

      login: true,

    });

  };



  render() {

    const formElementsArray = [];



    for (let key in this.state.controls) {

      formElementsArray.push({

        id: key,



        config: this.state.controls[key],

      });

    }



    const form = formElementsArray.map((formElement) => (

      <Input

        key={formElement.id}

        elementType={formElement.config.elementType}

        elementConfig={formElement.config.elementConfig}

        value={formElement.config.value}

        invalid={!formElement.config.valid}

        shouldValidate={formElement.config.validation}

        touched={formElement.config.touched}

        changed={(event) => this.inputChangedHandler(event, formElement.id)}

      />

    ));

    let button = (

      <button className={classes.Button} onClick={this.contineLoginHandler}>

        Continue

      </button>

    );



    if (this.state.login) {

      button = <button className={classes.Button} onClick={this.props.loginContinued}>Log in</button>;

    }



    return (

      <div className={classes.Auth}>

        <form onSubmit={this.submitHandler}>

        <h2 className={classes.login}>Login</h2>

          {form}

        </form>

        {button}

      </div>

    );

  }

}



export default Auth;

