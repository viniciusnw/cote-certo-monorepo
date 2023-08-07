import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@material-ui/core';

type TextFieldProps = MuiTextFieldProps & {
  errorText?: string;
  isTouched?: boolean;
};

export const TextField: React.FC<TextFieldProps> = ({
  children,
  helperText,
  error,
  errorText,
  isTouched,
  ...props
}) => {
  const hasError = error || (!!errorText && isTouched);
  const message = hasError ? errorText : helperText;

  return (
    <MuiTextField error={hasError} helperText={message} {...props}>
      {children}
    </MuiTextField>
  );
};
