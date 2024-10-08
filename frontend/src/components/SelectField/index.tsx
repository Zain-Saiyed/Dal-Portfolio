import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { FC } from "react";

interface Props extends Omit<SelectProps, 'id' | 'label' | 'options'> {
  id: string;
  label: string;
  options: { value: string; label: string }[];
}

const SelectField: FC<Props> = ({
  id,
  label,
  options = [],
  required = false,
  ...rest
}: Props) => {
  return (
    <FormControl fullWidth={true} required={required}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        required={required}
        labelId={`${id}-label`}
        id={id}
        label={label}
        {...rest}
      >
        {options.map((option, index) => (
          <MenuItem key={`${id}-item-${index}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
