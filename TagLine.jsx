import React from 'react'
import ButtonContainer from '../components/ButtonContainer'
import Heading from '../components/Heading'
import TextInput from '../components/TextInput'
import SaveButton from '../components/SaveButton'
import Bottom from '../components/Bottom'



const TagLine = () => {
  return (
    <div>
      <ButtonContainer/>
      <Heading title="TagLine"
        subtitle="Write the Required Information Below"/>
      <TextInput/>
      <SaveButton />
      <Bottom/>
     
    </div>
  )
}

export default TagLine
