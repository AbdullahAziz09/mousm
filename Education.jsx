import React, { useState } from 'react';
import ButtonContainer from "../components/ButtonContainer";
import Heading from "../components/Heading";
import CheckButton from "../components/CheckButton";
import SaveButton from '../components/SaveButton';
import Bottom from '../components/Bottom';

const Education = () => {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

    const handleCheckboxChange = (checkboxText, isChecked) => {
      setSelectedCheckboxes((prevSelected) => ({
        ...prevSelected,
        [checkboxText]: isChecked,
      }));
    };
  
    const handleSaveClick = () => {
      console.log("Selected Checkboxes:", selectedCheckboxes);
      // You can perform further logic here to save the selected checkboxes.
    };
  return (
    <div>
      <ButtonContainer />
      <Heading title="Education" subtitle="Select your Last Education Below" />
      <div>
        <CheckButton
          buttonText="None"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Matriculation"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="InterMediate"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Bachelors"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Masters"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Post Graduate"
          onCheckboxChange={handleCheckboxChange}
        />
    </div>
    <SaveButton onSaveClick={handleSaveClick} />
    <Bottom/>
    </div>
  );
};

export default Education;
