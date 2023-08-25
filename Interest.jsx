import React, { useState } from 'react';
import ButtonContainer from "../components/ButtonContainer";
import Heading from "../components/Heading";
import CheckButton from "../components/CheckButton";
import SaveButton from "../components/SaveButton";
import Bottom from '../components/Bottom';

const Interest = () => {
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
      <Heading
        title="Your Interests"
        subtitle="Select a Few of your Interests and Let Everyone Know What you are Passionate about"
      />
      <div>
        <CheckButton
          buttonText="Photography"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Karaoke"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Yoga"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Cooking"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Tennis"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Running"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Swimming"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Art"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Travelling"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Music"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Drinking"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Video games"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Driving"
          onCheckboxChange={handleCheckboxChange}
        />
    </div>
    <SaveButton onSaveClick={handleSaveClick} />
    <div className="mt-32"> 
       <Bottom /> 
      </div>
    </div>
  );
};

export default Interest;
