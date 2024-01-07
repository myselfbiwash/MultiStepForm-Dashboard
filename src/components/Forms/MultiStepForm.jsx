import React, { useState } from 'react';
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

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { activeStep, setActiveStep } = useSteps({
    initialStep: step-1,
    count: steps.length,
  });

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
    setActiveStep(step)
    // setStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => {
      console.log("Prev:",prevStep)
      setActiveStep(prevStep-2)
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
