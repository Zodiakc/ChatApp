import "../styles/Login.scss";
const Login = () => {
  return (
    <div className="login">
      <h1>Register</h1>
      <form action="#" className="login__form">
        <input
          type="email"
          name=""
          id=""
          className="login__input"
          placeholder="Email"
        />
        <input
          type="password"
          className="login__input"
          placeholder="Password"
        />
        <input type="file" name="" id="file" className="login__file"/>
        <label htmlFor="file" className="login__img-label">
            <img src="./images/choose.png" alt="" className="login__img"/>
            <span>Add an avatar</span>
        </label>
        <button type="submit" className="login__btn">Register</button>
      </form>
      <p>
        Or <a href="#">Register</a>
      </p>
    </div>
  );
};

export default Login;
