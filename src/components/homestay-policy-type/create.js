import * as React from "react";
import { SelectInput, Create, SimpleForm, TextInput } from 'react-admin';

export const HsPolicyTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);