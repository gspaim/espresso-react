import React, { Component } from "react";
import { FormLogin } from "./styles";
import Api from "../../services/Api";
import ReactDOM from "react-dom";

export default class Login extends Component {
  state = {
    loading: false,
    userEmail: "",
    userPass: "",
    loginError: false,
    loginMessageError: ""
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({
      loading: false
    });
  }

  handleLogin = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: response } = await Api.post(`login`, {
        user: {
          email: this.state.userEmail,
          password: this.state.userPass
        }
      });

      this.setState({
        loginError: false,
        loginMessageError: ""
      });

      await localStorage.setItem(
        "@EspressoPosts:loginInfo",
        JSON.stringify([response])
      );

      this.props.history.push(`/Home`);
    } catch (err) {
      console.log(err);
      this.setState({
        loginError: true,
        loginMessageError:
          "opss...usuário inválido, verifique o email ou senha :)"
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      loading,
      userEmail,
      userPass,
      loginError,
      loginMessageError
    } = this.state;

    return (
      <FormLogin withError={loginError} onSubmit={this.handleLogin}>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={e => this.setState({ userEmail: e.target.value })}
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Password"
              value={userPass}
              onChange={e => this.setState({ userPass: e.target.value })}
            />
          </li>
          <li>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : "Login"}
            </button>
          </li>
        </ul>

        <span className="messageLoginError">{loginMessageError}</span>
      </FormLogin>
    );
  }
}
