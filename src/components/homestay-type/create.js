import * as React from "react";
import { SelectInput, Create, SimpleForm, TextInput } from 'react-admin';

export const HsTypeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);