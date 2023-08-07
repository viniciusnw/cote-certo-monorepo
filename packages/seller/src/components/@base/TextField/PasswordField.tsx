import React, { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';

type PasswordFieldProps = TextFieldProps & {
  errorText?: string;
  isTouched?: boolean;
  value?: string;
};

export const PasswordField: React.FC<PasswordFieldProps> = ({
  children,
  helperText,
  error,
  errorText,
  isTouched,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const hasError = error || (!!errorText && isTouched);
  const message = hasError ? errorText : helperText;

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      error={hasError}
      helperText={message}
      {...props}
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {children}
    </TextField>
  );
};
