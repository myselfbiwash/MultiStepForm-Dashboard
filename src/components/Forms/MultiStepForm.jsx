import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, Button, Stack } from '@chakra-ui/react';
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
} from '@chakra-ui/react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Educational Details' },
  { title: 'Third', description: 'Projects' },
  { title: 'Fourth', description: 'Sports' },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { activeStep, setActiveStep } = useSteps({
    initialStep: step-1,
    count: steps.length,
  });

  

  const handleNextStep = () => {
   


    setStep((prevStep) => prevStep + 1);
    setActiveStep(step);
   console.log("Active Step:",activeStep)
   console.log("Step:",step)
    //setStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };
 

  const handlePreviousStep = () => {
    setStep((prevStep) => {
      console.log("Prev Step is:",prevStep)
      setActiveStep(prevStep-2)
      //active step is 1 less than step. if current step is 4 and we press previous button then step value should be 3 and active step should be 2. So prevStep-2 
      console.log("Prev:",activeStep)

      return prevStep - 1
    }
    );
    // setStep((prevStep) => Math.max(prevStep - 1, 1));
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
        return <Form4 />;
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" mt={8} p={4}>
        <Stepper index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
              <StepStatus
                  complete={<StepIcon color="white.400" />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
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
