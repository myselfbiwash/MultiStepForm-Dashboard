import React, { useContext } from 'react';
import FormContext from '../Context/Form/FormContext';
const DisplayData = () => {
    const { data, userData } = useContext(FormContext);

    return (
        <div>
            <h2>Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <h2>User Data:</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
    );
};

export default DisplayData;