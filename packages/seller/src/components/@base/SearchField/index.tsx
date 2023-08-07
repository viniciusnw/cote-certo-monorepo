import React, { useEffect, useState } from 'react';
import { InputAdornment, IconButton, TextField } from '@material-ui/core';
import { Close as CloseIcon, Search as SearchIcon } from '@material-ui/icons';

type SearchFieldProps = {
  value?: string | null;
  placeholder?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
};

export const SearchField: React.FC<SearchFieldProps> = ({
  value,
  placeholder,
  variant = 'outlined',
  onSearch,
  onChange,
  onClear,
  className,
}: SearchFieldProps) => {
  const [internalValue, setInternalValue] = useState<string>(value || '');

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (!inputValue) {
      handleClear();
    }
    setInternalValue(inputValue);
    onChange && onChange(inputValue);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      onSearch && onSearch(internalValue);
    }
  }

  function handleClear() {
    setInternalValue('');
    onClear && onClear();
  }

  return (
    <TextField
      size="small"
      variant={variant}
      className={className}
      value={internalValue}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {internalValue && (
              <IconButton onClick={handleClear} edge="end">
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};
