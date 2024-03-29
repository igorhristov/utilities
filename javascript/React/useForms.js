import { useState } from 'react';

const useForms = (defaults) => {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if it is a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
};

export default useForms;
