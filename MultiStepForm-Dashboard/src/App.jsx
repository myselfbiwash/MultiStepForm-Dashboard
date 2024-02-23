import React from 'react';
import { ChakraProvider, Switch, Link } from '@chakra-ui/react';
import FormState from './components/Context/Form/FormState';
import './App.css';
import MultiStepForm from './components/Forms/MultiStepForm';
import Dashboard from './components/Display/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/adminPanel';
import DisplayData from './components/Display/DisplayData';

function App() {
  return (
    <FormState>
      <ChakraProvider>
        <div className="App">
          <Router>
           
            <Routes>
              <Route path="/" element={<MultiStepForm />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/form" element={<MultiStepForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/display" element={<DisplayData />} />
            </Routes>
          </Router>
        </div>
      </ChakraProvider>
    </FormState>
  );
}

export default App;
