// 3rd party modules/packages
import React from "react";
import {
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import Pagination from "@material-ui/lab/Pagination";

// Style
const useStyles = makeStyles((theme) => ({
    cCampaignsList: {
        height: 400,
        width: '100%'
    },
    dataTable: {
        '&.MuiDataGrid-root': {
            border: 'none'
        },
        '& .MuiDataGrid-columnsContainer': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        '& .MuiDataGrid-row': {
            backgroundColor: theme.palette.common.white
        },
        '& .MuiDataGrid-colCellTitle': {
            fontWeight: 'bold'
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none'
        },
        '& .MuiPagination-root': {
            '& .MuiPaginationItem-root': {
                backgroundColor: theme.palette.common.white,
                borderRadius: 0,
                margin: 0,
                borderColor: theme.palette.others.grayishWhite,
                color: theme.palette.others.textGray,
                '&.Mui-selected': {
                    backgroundColor: theme.palette.others.sharperBlue,
                    color: theme.palette.common.white,
                }
            }
        }
    },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${
                params.getValue('lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const CampaignsList = ({ activeFilters }) => {
    const classes = useStyles();

    /*
    const loadCampaigns = () => {
         // * TODO:
         // * 1. Use service to fake data loading with active filters and pagination
         // * 2. Update local list
    };
    */

    return (
        <Box className={classes.cCampaignsList}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                className={classes.dataTable}
                components={{
                    footer: () => <Pagination count={10} variant="outlined" shape="rounded" />,
                }}
            />
        </Box>
    );
};
