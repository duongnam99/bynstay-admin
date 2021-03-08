import * as React from "react";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const HsPolicyTypeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);