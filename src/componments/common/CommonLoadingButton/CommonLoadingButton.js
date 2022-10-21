import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';

const CommonLoadingButton =({children,onClick, color, disabled, size,variant, type,isLoading=false, sx={ml:0.5, height:55}}) => {
    return (
      <LoadingButton
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      loading={isLoading}
      type ={type}
      onClick={onClick}
      >
        {children}
      </LoadingButton>
    )
  }
export default CommonLoadingButton
