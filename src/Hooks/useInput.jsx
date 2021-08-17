import React, { useState, useEffect } from "react";

export const useInput = (initValue) => {
 const [value, setValue] = useState(initValue);

 const onChange = (e) => {
  setValue(e.target.value);
 };

 return { value, onChange, setValue };
};

export const useIntInput = (initValue) => {
 const [value, setValue] = useState(initValue);

 const onChange = (e) => {
  const inputValue = e.target.value;
  const newValue = inputValue.replace(/[^0-9]/g, "");

  setValue(newValue);
 };

 return { value, onChange, setValue };
};

export const useMobileInput = (initValue) => {
 const [value, setValue] = useState(initValue);

 const onChange = (e) => {
  const inputValue = e.target.value;
  const newValue = inputValue.replace(/[^0-9]/g, "-");

  setValue(newValue);
 };

 useEffect(() => {
  if (value.length === 10) {
   setValue(value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
  }
  if (value.length === 13) {
   setValue(value.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
  }
 }, [value]);

 return { value, onChange, setValue };
};

export const useBirthInput = (initValue) => {
 const [value, setValue] = useState(initValue);

 const onChange = (e) => {
  const inputValue = e.target.value;
  const newValue = inputValue.replace(/[^0-9]/g, "-");

  setValue(newValue);
 };

 useEffect(() => {
  if (value.length === 8) {
   setValue(value.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
  }
  if (value.length === 11) {
   setValue(value.replace(/-/g, "").replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
  }
 }, [value]);

 return { value, onChange, setValue };
};
