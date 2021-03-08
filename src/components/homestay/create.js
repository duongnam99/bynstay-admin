import * as React from "react";
import { SelectInput, ReferenceInput, Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

export const HSCreateGeneral = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Parent utility" name="parent_id" source="id" reference="homestay-utility-type-parents" allowEmpty>
                <SelectInput optionValue="id" optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);