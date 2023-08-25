import React, { useState } from 'react'; // Import useState from react module
import ButtonContainer from '../components/ButtonContainer';
import Heading from '../components/Heading';
import CheckButton from '../components/CheckButton';
import SaveButton from '../components/SaveButton';
import Bottom from '../components/Bottom';

const Professional = () => {
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
        title="Profession"
        subtitle="Check your profession Below"
      />
      <div>
        <CheckButton
          buttonText="Engineer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Software Developer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Doctor"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Teacher"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Artist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Writer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Chef"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Lawyer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Police Officer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="FireFighter"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Travelling"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Astronaut"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Pilot"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Architect"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Graphic Designer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Photographer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Musician"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Actor"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Journalist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Psychologist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Athlete"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Fashion Designer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Accountant"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Police Detective"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Chef"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Entrepreneur"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Gardner"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Hair Stylist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Interior Designer"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Mechanic"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Nurse"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Pharmacist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Sales Person"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Scientist"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Truck Driver"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Veterinarian"
          onCheckboxChange={handleCheckboxChange}
        />
        <CheckButton
          buttonText="Zoologist"
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

export default Professional;

