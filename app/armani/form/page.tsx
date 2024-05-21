import React from 'react';
import { Input } from '#/ui/catalyst/input';
import { Field, FieldGroup, Label } from '#/ui/catalyst/fieldset';
import { Button } from '#/ui/catalyst/button';
import { ThreeItemRow, TwoItemRow } from '#/ui/custom/row';
import { Textarea } from '#/ui/catalyst/textarea';
import { DataTypeList } from '#/ui/special/datatypelist';

const SettingsForm: React.FC = () => {
  return (
    <form>
      <FieldGroup>
        <TwoItemRow>
          <Field>
            <Label>Display Name</Label>
            <Input type="text" />
          </Field>
          <Field>
            <Label>Function Name</Label>
            <Input type="text" />
          </Field>
        </TwoItemRow>
        <TwoItemRow>
          <Field>
            <Label>Module Path</Label>
            <Input type="text" />
          </Field>
          <Field>
            <Label>Class</Label>
            <Input type="text" />
          </Field>
        </TwoItemRow>
        <Field>
          <Label>Description</Label>
          <Textarea draggable={true} rows={5} />
        </Field>
        <ThreeItemRow>
          <Field>
            <Label>Return Name</Label>
            <Input type="text" />
          </Field>
          <DataTypeList />
          <Field>
            <Label>Default Broker</Label>
            <Input type="text" />
          </Field>
        </ThreeItemRow>
        <Field>
          <Label>Sample Return</Label>
          <Textarea draggable={true} rows={5} />
        </Field>
        <TwoItemRow>
          <Field>
            <Label>Argument Name</Label>
            <Input type="text" />
          </Field>
          <DataTypeList />
        </TwoItemRow>

        <Button type="submit">Save changes</Button>
      </FieldGroup>
    </form>
  );
};

export default SettingsForm;
