import "./App.css";

export default function App() {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     firstname: "",
  //     lastname: "",
  //     email: "",
  //     password: "",
  //     formErrors: {firstname: '', lastname: '', email: '', password: ''},
  //     firstnameValid: false,
  //     lastnameValid: false,
  //     emailValid: false,
  //     passwordValid: false,
  //   };
  // }

  // handleUserInput (e) {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   this.setState({[name]: value},
  //   () => {this.validateField(name, value) });
  // }

  return (
    <div className="App">
      <div className="left">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="right">
        <div className="free">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        {/* <div className="panel panel-default"> */}
        <form className="demoForm">
          <input type="text" name="firstname"  placeholder="First Name" />
          <p className="errmsg"></p>

          <input type="text" name="lastname"  placeholder="Last Name" />
          <p className="errmsg"></p>

          <input type="email" name="email"  placeholder="Email Address" />
          <p className="errmsg"></p>

          <input type="password" name="password" placeholder="Password" />
          <p className="errmsg"></p>

          <button type="submit" className="btn">
            Click your free trial
          </button>
          <p>
            By clicking the button, you are agreeing to{" "}
            <span>Terms and Services</span>
          </p>
        </form>
        {/* </div> */}

      </div>
    </div>
  );
}