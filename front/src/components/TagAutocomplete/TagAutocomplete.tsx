import React, { useEffect } from "react";
import useAutocomplete from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import { unitedDataSet } from "../../consts";
import { InputWrapper, Label, Listbox, Root, StyledTag } from "./styles";
import { DataSetDTO } from "../../types";

export interface TagAutocompleteProps {
  data: any;
  onChange: (value: DataSetDTO[]) => void;
}

export const TagAutocomplete = ({ data, onChange }: TagAutocompleteProps) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    defaultValue: [unitedDataSet[0]],
    multiple: true,
    options: data,
    getOptionLabel: (option) => option.name,
  });

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <Root data-testid="tag-autocomplete">
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Select datasets</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.name} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof data).map((option: any, index: number) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.name}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};
