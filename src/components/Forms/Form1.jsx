import React, { useState, useContext } from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import FormContext from "../Context/Form/FormContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../Utils/validateFunction";

const Form1 = () => {
  const { userData, setUserData } = useContext(FormContext);
  const [dob, setDOB] = useState(new Date());
  const [age, setAge] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneNumberInvalid, setPhoneNumberInvalid] = useState(false);

  const handleDOBChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setDOB(date);
      calculateAge(date);
      setUserData({
        ...userData,
        dateOfBirth: date.toISOString(),
      });
    } else {
      console.error("Invalid date");
    }
  };

  const calculateAge = (birthdate) => {
    const currentDate = new Date();
    const birthDate = new Date(birthdate);
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      setAge(ageDifference - 1);
    } else {
      setAge(ageDifference);
    }
  };

  const maxDate = new Date();

  const fieldStyles = {
    borderColor: "blue.100",
    border: "2px solid",
    size: "md",
    height: "40px",
    width: "416px",
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightblue",
        padding: "20px",
      }}
    >
      <FormControl id="name" isRequired>
        <FormLabel>Your name</FormLabel>
        <Input
          type="text"
          className="form"
          defaultValue={userData["name"] || ""}
          onBlur={(e) => setUserData({ ...userData, name: e.target.value })}
          variant="outline"
          colorScheme="teal"
          margin="normal"
          style={fieldStyles}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          className="form"
          defaultValue={userData["email"] || ""}
          onBlur={(e) => {
            const email = e.target.value;
            validateEmail(email);
            setUserData({ ...userData, email });
            setEmailInvalid(!validateEmail(email));
          }}
          isInvalid={emailInvalid}
          variant="outline"
          colorScheme="teal"
          margin="normal"
          style={fieldStyles}
        />
      </FormControl>
      <FormControl id="phoneNumber" isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="number"
          className="form"
          defaultValue={userData["phoneNumber"] || ""}
          onBlur={(e) => {
            const phoneNumber = e.target.value;
            validatePhoneNumber(phoneNumber);
            setUserData({ ...userData, phoneNumber });
            setPhoneNumberInvalid(!validatePhoneNumber(phoneNumber));
          }}
          isInvalid={phoneNumberInvalid}
          variant="outline"
          colorScheme="teal"
          margin="normal"
          size="md"
          style={fieldStyles}
        />
      </FormControl>
      <FormControl id="dob" isRequired>
        <FormLabel>Date of Birth</FormLabel>

        <DatePicker
          className="form"
          selected={dob}
          onChange={handleDOBChange}
          maxDate={maxDate}
          dateFormat="MM/dd/yyyy"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          showIcon
        />
        <Box>you are: {age}</Box>
      </FormControl>
    </div>
  );
};

export default Form1;
