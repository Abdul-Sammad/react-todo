
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = localStorage.getItem("uid");

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/todo");
    }
  }, []);
   const signupHandler = (e) => {
    e.preventDefault();
    console.log("submit form");
    const dbCollection = collection(db, "users");

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        const obj = {
          fullName,
          email,
          uid: resolve.user.uid,
        };
        // await addDoc(dbCollection, obj);
        await setDoc(doc(db, "users", resolve.user.uid), obj);
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };return(
   <section className="main">
   
    
     
      <br/>
      <Form onSubmit={signupHandler}>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label className="label">FULL NAME:</Form.Label><br/>
          <Form.Control
            type="text"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            placeholder="Enter FullName"
          />
           </Form.Group><br/>
        <Form.Group className="" controlId="formBasicEmail">
          <Form.Label className="label">Email address:</Form.Label><br/>
          <Form.Control
            type="email"
            
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group><br/>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password:</Form.Label><br/>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            
          />
        </Form.Group><br/>
        
        <Button className="sub" type="submit">
          Submit
        </Button><br/><br/>
        <p className="hello" onClick={()=>navigate('login')}>already have an account?</p>
      </Form>
      
    </section>

  )
}







export default Signup;