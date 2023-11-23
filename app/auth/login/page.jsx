import CustomInput from "@/utils/custominput/customInput";
import "./login.css";
import googlelogo from '../../../assets/images/google_logo.png'
// import coffeemug from '../../../assets/images/coffeemug.png'
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login-card">
        <div className="login-card_title">
          <h2>Login</h2>
          {/* <Image src={coffeemug} height={150} width={150}/> */}
        </div>
        <form>
          <CustomInput placeholder="Enter Username" />
          <CustomInput placeholder="Enter Password" />
          <button type="button">LOGIN</button>
        </form>
        <h3>or</h3>
        <div className="login-card_google">
          <Image src={googlelogo} height={40} width={40} />
          <p>Login With Google</p>
        </div>
      <Link href="/auth/signup" style={{ textDecoration: "none" }}>
        <h4>Don't have Account? Signup</h4>
      </Link>
      </div>
    </div>
  );
};

export default Login;
