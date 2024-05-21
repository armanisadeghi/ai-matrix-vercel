import React from 'react';
import { Field, Label } from '#/ui/catalyst/fieldset';
import { Listbox, ListboxOption, ListboxLabel } from '#/ui/catalyst/listbox';

// Define the interface in the same file to ensure it's recognized
interface DataTypeListProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string; // Optional label prop with default value set in the component
}

// Component definition using the above interface
function DataTypeList({
  defaultValue = 'null',
  onChange,
  label = 'Data Type',
}: DataTypeListProps) {
  return (
    <Field>
      <Label>{label}</Label>
      <Listbox name="status" defaultValue={defaultValue} onChange={onChange}>
        <ListboxOption value="null">
          <ListboxLabel>Choose...</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="int">
          <ListboxLabel>Integer</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="float">
          <ListboxLabel>Float</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="str">
          <ListboxLabel>String</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="bool">
          <ListboxLabel>Boolean</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="list">
          <ListboxLabel>List</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="tuple">
          <ListboxLabel>Tuple</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="dict">
          <ListboxLabel>Dictionary</ListboxLabel>
        </ListboxOption>
        <ListboxOption value="set">
          <ListboxLabel>Set</ListboxLabel>
        </ListboxOption>
      </Listbox>
    </Field>
  );
}

export { DataTypeList };
