import React from "react";
import styled from "@emotion/styled";
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps,
} from "@material-ui/lab";
import { Typography, TextField } from "@material-ui/core";

export const AutoComplete: React.FC<{
  disabledOptions?: any,
  label: string;
  disabled?: boolean;
  multiple?: boolean;
  error?: string;
  initialValue?: any;
  size?: 'small' | 'medium'
  onChange?: (value: any | null) => void;
  getOptionDisabled?: (option: any) => boolean,
  getOptionSelected?: (option: any, value: any) => boolean,
  items: Array<{ title: string; id: number }>;
}> = ({
  onChange,
  getOptionDisabled,
  getOptionSelected,
  error,
  disabled,
  initialValue,
  size,
  items,
  multiple,
  label
}) => {
    const [value, setValue] = React.useState<any>(initialValue || undefined);

    const handleSelectValue = (value: any) => {
      setValue(value);
      if (value) onChange && onChange(value);
    };

    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    multipleImportMuiStyleFix();
    return (
      <AutocompleteStyled
        key={value}
        size={size}
        value={value}
        options={items}
        disabled={disabled}
        getOptionSelected={getOptionSelected}
        getOptionDisabled={getOptionDisabled}
        multiple={multiple ? true : undefined}
        getOptionLabel={(option) => option.title}
        onChange={(event, value) => handleSelectValue(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            color="primary"
            error={!!error}
            helperText={error}
            variant="outlined"
          />
        )}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Typography color={selected ? 'primary' : "textPrimary"}>{option.title}</Typography>
          </React.Fragment>
        )}
      />
    );
  };

const multipleImportMuiStyleFix = () => {
  const FHC: Array<HTMLElement> = Array.prototype.filter.call(
    document.getElementsByTagName("style"),
    (e) => e.dataset["meta"] === "MuiButtonBase"
  );
  if (FHC.length === 2) FHC[1].replaceWith('');
};

type AutocompleteType = AutocompleteProps<any, true, false, false>
const AutocompleteStyled = styled(MuiAutocomplete) <AutocompleteType>`
  background-color: ${(props) => props.theme.palette.grey[100]};
`;