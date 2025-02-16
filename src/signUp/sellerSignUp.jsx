// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// // import HomePage from "../auth/homePage";
// import styles from "../styles/sellerSignUp.module.css";
// import Customizedbutton from '../customButton/customButton';
// import axios from "axios";


// function SellerSignup() {
//    const [firstName, setFirstName] = useState("");
//    const [lastName, setLastName] = useState("");
//    const [contact, setContact] = useState("");
//    const [email, setEmail] = useState("");
//    const [companyName, setCompanyName] = useState("");
//    const [password, setPassword] = useState("");
//    const [businessAddress, setBusinessAddresss] = useState("");

//    const navigate = useNavigate();

//    const handleSellerSignUp = async (event) => {
//      event.preventDefault();

//      try {
//        const payload = {
//          firstName,
//          lastName,
//          contact,
//          email,
//          companyName,
//          password,
//          businessAddress
//        };
//        const response = await axios.post(
//          "http://localhost:8080/e_commerce/api/seller-sign_up/",
//          payload,
//          {
//            headers: {
//              "Content-Type": "application/json",
//            },
//          }
//        );

//        if (response.status === 201 || response.status === 200) {
//          setFirstName("");
//          setLastName("");
//          setContact("");
//          setEmail("");
//          setCompanyName("")
//          setPassword("");
//          setBusinessAddresss("")
//          alert("Your Registered has been successful");

//          navigate("/sellerLogin");
//        } else {
//          alert("Something went wrong. Please try again.");
//        }
//      } catch (error) {
//        console.error("Error during registration:", error);
//        // alert("Failed to register. Please check your details and try again.");
//        console.log(error);
//      }
//    };
//   // const navigate = useNavigate();
//   // const handleNavigate = () => {
//   //   navigate("/sellerLogin"); // Navigate to the home page route
//   // };

//   // const [dob, setDob] = useState("");
//   // const [profileCreatedDate, setProfileCreatedDate] = useState("");

//   // useEffect(() => {
//   //   // Simulate fetching data from the backend
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch("/api/profile"); // Replace with your backend API
//   //       const data = await response.json();

//   //       // Assuming backend sends ISO format dates
//   //       setDob(data.dob);
//   //       setProfileCreatedDate(
//   //         new Date(data.profileCreatedDate).toLocaleString()
//   //       );
//   //     } catch (error)
//   //      {
//   //       console.error("Error fetching profile data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);
  
//   return (
//     <div className={styles.mainform}>
//       <div>
//         <h1>
//           <b>
//             <i>HI SELLER</i>
//           </b>
//         </h1>
//         <h2>
//           <b>Please fill in the details below for registration</b>
//         </h2>
//         <form className={styles.form}>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="name" className={styles.label}>
//               Name:
//             </label> */}
//             <input
//               type="text"
//               // id="firstName"
//               name="firstName"
//               placeholder="Enter your firstName"
//               onChange={(e) => setFirstName(e.target.value)}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="name" className={styles.label}>
//               Name:
//             </label> */}
//             <input
//               type="text"
//               // id="lastName"
//               name="lastName"
//               placeholder="Enter your lastName"
//               onChange={(e) => setLastName(e.target.value)}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="name" className={styles.label}>
//               Name:
//             </label> */}
//             <input
//               type="text"
//               // id="contact"
//               name="contact"
//               onChange={(e) => setContact(e.target.value)}
//               placeholder="Enter your contact"
//               // onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="email" className={styles.label}>
//               Email:
//             </label> */}
//             <input
//               type="email"
//               // id="email"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               // onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               // id="text"
//               name="text"
//               placeholder="CompanyName "
//               onChange={(e) => setCompanyName(e.target.value)}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="password" className={styles.label}>
//               Password:
//             </label> */}
//             <input
//               type="password"
//               // id="password"
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               // onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.formGroup}>
//             {/* <label htmlFor="password" className={styles.label}>
//               Password:
//             </label> */}
//             <input
//               type="text"
//               // id="companyName"
//               name="businessAddress"
//               placeholder="businessAddress"
//               onChange={(e) => setBusinessAddresss(e.target.value)}
//               className={styles.input}
//             />
//           </div>

//           <Customizedbutton
//             style={styles.button} // Use className for styling
//             type="button"
//             textContent="Submit"
//             onClick={handleSellerSignUp} // Trigger navigation on click
//             route="sellerLogin/"
//           />
//         </form>
//       </div>

//       {/* <div className={styles.linkToMainMenu}>
//               <h2>
//                   Go back to the main menu {">>>"}
//                 < Link to="/HomePage" className={styles.link}>
//                  Click me
//                 </Link>
//               </h2>
//             </div> */}
//     </div>
//   );
// }

// export default SellerSignup;

