import React from 'react';
import  Button  from '@mui/material/Button';


const CommonButton = ({children,onClick, color, disabledm, size,variant, type, sx={ml:0.5, height:55}}) => {
  return (
    <Button
    color={color}
    disabled={disabledm}
    size={size}
    variant={variant}
    sx={sx}
    type ={type}
    onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default CommonButton
