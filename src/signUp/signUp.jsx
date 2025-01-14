import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/signUp.module.css";
import axios from "axios";


// const Signup = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     userName: "",
//     password: "",
//     fullName: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const registerHandle = async (e) => {
//     e.preventDefault();
//     console.log(form);
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/recipes/User-Sign-Up",
//         form
//       );
//       console.log(response.status); //201
//       if (response.data.message.includes("Registered successful")) {
//         navigate("/login");
//         console.log("working");
//       } else {
//         alert("user exists...");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className={styles.container}>
//       <form  className={styles.form}>
//         <div className={styles.formGroup}>
//           {/* <label htmlFor="name" className={styles.label}>
//             Name:
//           </label> */}
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             placeholder="Enter your name"
//             // onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
//         <div className={style.formGroup}>
//           {/* <label htmlFor="userName" className={styles.label}>
//             UserName:
//           </label> */}
//           <input
//             type="text"
//             id="userName"
//             name="userName"
//             placeholder="Enter your name"
//             // onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           {/* <label htmlFor="email" className={styles.label}>
//             Email:
//           </label> */}
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             // onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           {/* <label htmlFor="password" className={styles.label}>
//             Password:
//           </label> */}
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             // onChange={handleChange}
//             className={styles.input}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Sign Up
//         </button>
//       </form>
//       <p>
//         Already have an account?{" "}
//         <Link to="/login" className={styles.link}>
//           Log In
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;

