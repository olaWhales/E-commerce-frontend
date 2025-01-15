import React from 'react';
import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../styles/buyerSignUp.module.css";
import Customizedbutton from '../customButton/customButton';

const BuyerSignUp = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/"); // Navigate to the home page route
  };

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
  const [dob, setDob] = useState("");
  const [profileCreatedDate, setProfileCreatedDate] = useState("");

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/api/profile"); // Replace with your backend API
        const data = await response.json();

        // Assuming backend sends ISO format dates
        setDob(data.dob);
        setProfileCreatedDate(
          new Date(data.profileCreatedDate).toLocaleString()
        );
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.mainform}>
      <div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            {/* <label htmlFor="name" className={styles.label}>
              Name:
            </label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your firstName"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="name" className={styles.label}>
              Name:
            </label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your lastName"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="name" className={styles.label}>
              Name:
            </label> */}
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="email" className={styles.label}>
              Email:
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="email" className={styles.label}>
              Email:
            </label> */}
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder="Date of birth "
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          {/* <div className={styles.formGroup}>
              <input
                type="text"
                value={profileCreatedDate}
                readOnly
                className={styles.input}
              />
            </div> */}
          <div className={styles.formGroup}>
            {/* <label htmlFor="password" className={styles.label}>
              Password:
            </label> */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            {/* <label htmlFor="password" className={styles.label}>
              Password:
            </label> */}
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="CompanyName"
              // onChange={handleChange}
              className={styles.input}
            />
          </div>

          <Customizedbutton
            style={styles.button} // Use className for styling
            type="button"
            textContent="Submit"
            onClick={handleNavigate} // Trigger navigation on click
            route="buyerLogin/"
          />
        </form>
      </div>

      {/* <div className={styles.linkToMainMenu}>
              <h2>
                  Go back to the main menu {">>>"}
                < Link to="/HomePage" className={styles.link}>
                 Click me
                </Link>
              </h2>
            </div> */}
    </div>
  );
}

export default BuyerSignUp
