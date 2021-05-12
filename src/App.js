import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, fetchUtils } from 'react-admin';

import { UtilityList } from './components/utility/utility.js';
import { UtilityCreate } from './components/utility/create.js';
import { UtilityEdit } from './components/utility/edit.js';

import { HsTypeList } from './components/homestay-type/listType.js';
import { HsTypeCreate } from './components/homestay-type/create.js';
import { HsTypeEdit } from './components/homestay-type/edit.js';

import { ClientList } from './components/client/listClient';

import { HostList } from './components/host/listHost';

import { HomestaytList } from './components/homestay/listHomestay';

import { HsPolicyTypeList } from './components/homestay-policy-type/listHSPolicyType';
import { HsPolicyTypeEdit } from './components/homestay-policy-type/edit';
import { HsPolicyTypeCreate } from './components/homestay-policy-type/create';


import Dashboard from './components/dashboard.js';

import authProvider from './providers/authProvider';
import httpClient from './auth/httpClient';

import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeWork from '@material-ui/icons/HomeWork';
import GroupIcon from '@material-ui/icons/Group';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PolicyIcon from '@material-ui/icons/Policy';

const dataProvider = jsonServerProvider('http://localhost:8080/api/admin', httpClient);

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>

        <Resource name="ad-homestay" list={HomestaytList} icon={HomeRoundedIcon} />
        <Resource name="homestay-utility-type" list={UtilityList} create={UtilityCreate} edit={UtilityEdit} icon={AddBoxIcon} />
        <Resource name="ad-homestay-type" list={HsTypeList} create={HsTypeCreate} edit={HsTypeEdit} icon={HomeWork} />
        <Resource name="homestay-policy-type" list={HsPolicyTypeList} create={HsPolicyTypeCreate} edit={HsPolicyTypeEdit} icon={PolicyIcon} />
        <Resource name="clients" list={ClientList} icon={GroupIcon} />
        <Resource name="hosts" list={HostList} icon={GroupIcon} />


        <Resource name="homestay-utility-type-parents"/>

    </Admin>
);

export default App;