import React, { useState } from 'react';
import ButtonContainer from "../components/ButtonContainer";
import Heading from "../components/Heading";
import CheckButton from "../components/CheckButton";
import SaveButton from '../components/SaveButton';
import Bottom from '../components/Bottom';

const Language = () => {
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
      <Heading title="Languages" subtitle="Select the Languages you can Speak" />
      <div>
        <CheckButton
          buttonText="Urdu"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="English"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Punjabi"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Saraiki"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Pashto"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="French"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Chinese"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="German"
          onCheckboxChange={handleCheckboxChange}
        />
    </div>
    <SaveButton onSaveClick={handleSaveClick} />
    <div className="mt-32"> 
       <Bottom /> 
      </div>
    </div>
  )
}

export default Language
