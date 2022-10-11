import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import '../comp/index.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = localStorage.getItem("uid");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/todo");
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        localStorage.setItem("uid", resolve.user.uid);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <section className="main">
        
      <Form onSubmit={loginHandler}>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label className="label">Email address:</Form.Label><br/>
          <Form.Control 
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
         
        </Form.Group>
        <br/>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Label className="label">Password:</Form.Label><br/>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group><br/>
       
        <Button className="sub" type="submit">
          Submit
        </Button>
      </Form>
      
    </section>
  );
}








export default Login;