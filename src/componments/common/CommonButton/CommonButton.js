import React from 'react';
import  Button  from '@mui/material/Button';


const CommonButton = ({children, color, disabledm, size,sx,variant,type}) => {
  return (
    <Button
    color={color}
    disabled={disabledm}
    size={size}
    variant={variant}
    sx={sx}
    type ={type}
    >
      {children}
    </Button>
  )
}

export default CommonButton
