import CustomInput from "@/utils/custominput/customInput";
import "./signup.css";
import googlelogo from "../../../assets/images/google_logo.png";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="signup_container">
      <div className="signup-card">
        <div className="signup-card_title">
          <h2>Create An Account</h2>
        </div>
        <form>
          <div className="signup_card-form">
            <CustomInput placeholder="First Name" />
            <CustomInput placeholder="Last Name" />
          </div>
          <CustomInput placeholder="Enter Username" />
          <CustomInput placeholder="Enter Password" />
          <button type="button">Create an Account</button>
        </form>
        <h3>or</h3>
        <div className="signup-card_google">
          <Image src={googlelogo} height={40} width={40} />
          <p>Create an Account With Google</p>
        </div>

        <Link href="/auth/login" style={{ textDecoration: "none" }}>
          <h4> Already Have an Account? Login</h4>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
