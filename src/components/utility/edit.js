import * as React from "react";
import { Create, SelectInput, ReferenceInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const UtilityEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <ReferenceInput label="Parent utility" name="parent_id" source="id" reference="homestay-utility-type-parents" allowEmpty>
                <SelectInput optionValue="id" optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);