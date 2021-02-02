import React from 'react'; 
import TextField from '@material-ui/core/TextField'; 
  
const DatePicker = () => { 
  
    const handleChange = ( ) => {
        console.log("datepicker component")
    }
  return ( 
    <div style={{ 
      margin: 'auto', 
      display: 'block', 
      width: 'fit-content'
    }}> 
      <TextField 
        id="date"
        type="date"
        InputLabelProps={{ 
          shrink: true, 
        }} 
        onChange = {handleChange}/> 
    </div> 
  ); 
} 
  
export default DatePicker;