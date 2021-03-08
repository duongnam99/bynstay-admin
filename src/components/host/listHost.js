import * as React from 'react';
import { cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    useListContext,
    TopToolbar,
    CreateButton,
    ExportButton,
    Button,
    List, Datagrid, TextField,
    sanitizeListRestProps,
    EditButton,
    ShowButton,
    RefreshButton,
    BooleanField,
} from 'react-admin';
import IconEvent from '@material-ui/icons/Event';
import TrueIcon from '@material-ui/icons/Done';
import FalseIcon from '@material-ui/icons/Clear';

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton basePath={basePath} />
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filterValues={filterValues}
                maxResults={maxResults}
            />
            {/* Add your custom actions */}
            <Button
                onClick={() => { alert('Your custom action'); }}
                label="Show calendar"
            >
                <IconEvent />
            </Button>
            <RefreshButton></RefreshButton>
        </TopToolbar>
    );
};

export const HostList = (props) => (
    <List {...props} actions={<ListActions />}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="user.name" />
            <TextField source="user.email" />
            <BooleanField source="user.active" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);