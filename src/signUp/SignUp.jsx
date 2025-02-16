import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUp.module.css";
import Customizedbutton from "../customButton/customButton";
import axios from "axios";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [userRole, setUserRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const payload = {
        userName,
        email,
        password,
        contact,
        userRole,
        companyName: userRole === "SELLER" ? companyName : null,
        businessAddress: userRole === "SELLER" ? businessAddress : null,
      };

      const response = await axios.post(
        "http://localhost:8000/api/register/user/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setUserName("");
        setEmail("");
        setPassword("");
        setContact("");
        setUserRole("");
        setCompanyName("");
        setBusinessAddress("");
        alert("Registration successful");

        navigate("/Login");
      } else {
        alert("Please complete the form.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className={styles.mainform}>
      <div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your username"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <select
              name="userRole"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              className={styles.input}
              required
            >
              <option value="">Select User Role</option>
              <option value="BUYER">Buyer</option>
              <option value="SELLER">Seller</option>
            </select>
          </div>

          {/* Conditional Fields for Seller */}
          {userRole === "SELLER" && (
            <>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter Company Name"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="businessAddress"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                  placeholder="Enter Business Address"
                  className={styles.input}
                  required
                />
              </div>
            </>
          )}

          <Customizedbutton
            style={styles.button}
            type="submit"
            textContent="Submit"
            onClick={handleSignUp}
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles/SignUp.module.css";
// import Customizedbutton from "../customButton/customButton";
// import axios from "axios";

// function SignUp () {
//     const [firstName , setFirstName] = useState("");
//     const [lastName , setLastName] = useState ("");
//     const [contact , setContact] = useState("");
//     const [email , setEmail] = useState("");
//     const [birthDate , setBirthday] = useState("");
//     const [password , setPassword] = useState("");

//     const navigate = useNavigate();

//     const handleSignUp = async (event)=>{
//     event.preventDefault();

//     try {
//       const payload = {
//         firstName,
//         lastName,
//         contact,
//         email,
//         birthDate,
//         password,
//       };
//         const response = await axios.post(
//         "http://localhost:8080/e_commerce/api/Buyer_register_api/",
//         payload,
//         {
//             headers: {
//             "Content-Type": "application/json",
//             },
//         }
//         );

//         if (response.status === 201 || response.status === 200) {

//           setFirstName("")
//           setLastName("")
//           setContact("")
//           setEmail("")
//           setBirthday("")
//           setPassword("")
//           alert("Registered successful")

//           navigate("/Login");
//         }else{
//             alert("Please complete the form.");
//         }
//     } catch(error){
//         console.error("Error during registration:", error);
//         // alert("Failed to register. Please check your details and try again.");
//         console.log(error)
//         }
//     }
//   return (
//     <div className={styles.mainform}>
//       <div>
//         <form className={styles.form} >
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//             //   id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="Enter your firstName"
//               className={styles.input}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//             //   id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Enter your lastName"
//               className={styles.input}
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="email"
//             //   id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className={styles.input}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="password"
//             //   id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className={styles.input}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//             //   id="contact"
//               name="contact"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Enter your contact"
//               className={styles.input}
//               required
//             />
//           </div>

//           <Customizedbutton
//             style={styles.button}
//             type="submit"
//             textContent="Submit"
//             onClick={handleSignUp}
//           />
//           {/* <div className={styles.button} onClick={handleSignUp}>Submit</div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
