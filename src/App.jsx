import React from 'react';
import { ChakraProvider, Switch, Link } from '@chakra-ui/react';
import FormState from './components/Context/Form/FormState';
import './App.css';
import MultiStepForm from './components/Forms/MultiStepForm';
import Dashboard from './components/Display/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <FormState>
      <ChakraProvider>
        <div className="App">
          <h1>Multi-Step Form</h1>
          <Router>
           
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<MultiStepForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </ChakraProvider>
    </FormState>
  );
}

export default App;
