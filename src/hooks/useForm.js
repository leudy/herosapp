import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);
 // console.log(initialState)
  const handleChange = ({ target }) => {
    //    console.log(target.value);
    setvalues({ ...values, [target.name]: target.value });
  };
  return [values, handleChange];
};
