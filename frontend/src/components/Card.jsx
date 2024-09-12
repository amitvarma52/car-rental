/** @format */

import React from "react";
import "../stylesheets/card.css";
import "../stylesheets/filter.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
const Card = ({ fromVendor, url, name, year, price, location }) => {
  const user=useSelector(state=>state.user)
  const handleRent = (e) => {
    e.preventDefault()
    console.log(fromVendor)
    axios
      .post(
        "http://localhost:8080/api/v1/car-rental/user/sendMessage",
        {
          vendor: fromVendor,
          user: user.name,
          vehicleName: name,
          email: user.email,
          location: user.location,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("rental-token"),
          },
          timeout: 10000,
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data, {
          position: "top-center",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 5000,
        });
      });
  };
  return (
    <>
    <ToastContainer/>
      <div className="card">
        <img src={url}></img>
        <h3 className="year">{year}</h3>
        <h3>{name}</h3>
        <h3 className="price">{price}</h3>
        <h3 className="location">{location}</h3>
        <button onClick={handleRent}>Rent Now</button>
      </div>
    </>
  );
};

export default Card;
