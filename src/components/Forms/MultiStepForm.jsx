import React, { useState, useContext, useEffect } from "react";
import FormContext from "../Context/Form/FormContext";
import { ChakraProvider, Box, Button, Stack } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../Utils/validateFunction";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Educational Details" },
  { title: "Third", description: "Projects" },
  { title: "Fourth", description: "Sports" },
];

const MultiStepForm = () => {
  const { userData, setUserData, submitForm } = useContext(FormContext);
  const [isRequiredFieldsCompleted, setIsRequiredFieldsCompleted] = useState(false);
  const [stepperColor, setStepperColor] = useState("blue");

  const [step, setStep] = useState(1);
  const { activeStep, setActiveStep } = useSteps({
    initialStep: step - 1,
    count: steps.length,
  });

  // useEffect(() => {
  //   setStepperColor("blue"); // Set the initial color when the component mounts
  // }, []);

  // useEffect(() => {
  //   console.log("Required Fields from useEffect:", isRequiredFieldsCompleted);
  //   setStepperColor(isRequiredFieldsCompleted ? "green" : "red");
  
  // }, [isRequiredFieldsCompleted]);

  const handleNextStep = () => {
    checkRequiredFields(); // Check completion status before proceeding to the next step
    setStep((prevStep) => prevStep + 1);
    setActiveStep(step);

    // setStepperColor((prevColor) => {
    //   if (step < steps.length && isRequiredFieldsCompleted) {
    //     return "green";
    //   } else {
    //     return "blue";
    //   }
    // });
    
    //setStepperColor(isRequiredFieldsCompleted ? "green" : "red");

  };

  const handlePreviousStep = () => {
    setStep((prevStep) => {
      setActiveStep(prevStep - 1);
      setStepperColor("blue");
      return prevStep - 1;
    });
  };

  const resetForm = () => {
    // Reset form state to default values
    setUserData({
      name: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
    });
    setIsRequiredFieldsCompleted(false);
    setStepperColor("blue");
    setStep(1);
    setActiveStep(0);
  };

  const handleSubmit = () => {
  
    submitForm();
    resetForm();
    // setStep(1);
    // setActiveStep(0);
  };

  // const checkRequiredFields = () => {
  //   const requiredFieldsCompleted =
  //     userData.name &&
  //     validateEmail(userData.email) &&
  //     validatePhoneNumber(userData.phoneNumber);
  //   setIsRequiredFieldsCompleted(requiredFieldsCompleted);
  // };

  const checkRequiredFields = () => {
    const requiredFieldsCompleted =
      userData.name &&
      validateEmail(userData.email) &&
      validatePhoneNumber(userData.phoneNumber);
    setIsRequiredFieldsCompleted(requiredFieldsCompleted);
  
    // Update stepper color
    setStepperColor(() => {
      if (step < steps.length && requiredFieldsCompleted) {
        return "green";
      } else {
        return "blue";
      }
    });
  };
  

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return (
          <>
            <Form4 />
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Box maxW="full" mx="auto" mt="8" p="6">
        <Stepper size="sm" index={activeStep} colorScheme={stepperColor}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon color="white.400" />}
                  incomplete={<StepNumber />}
                  active={<StepNumber color="blue" />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        {renderFormStep()}

        <Stack direction="row" mt={4} spacing={4}>
          {step > 1 && (
            <Button colorScheme="blue" onClick={handlePreviousStep}>
              Previous
            </Button>
          )}
          {step < steps.length && (
            <Button colorScheme="blue" onClick={handleNextStep}>
              Next
            </Button>
          )}
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default MultiStepForm;
