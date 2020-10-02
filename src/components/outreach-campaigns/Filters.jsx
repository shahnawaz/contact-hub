// 3rd party modules/packages
import React from "react";
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    IconButton,
    InputLabel,
    useMediaQuery
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/FilterList";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useTheme } from "@material-ui/core/styles";

// Style
const useStyles = makeStyles((theme) => ({
    cFilters: {
        backgroundColor: theme.palette.common.white,
        margin: theme.spacing(2, 0),
        padding: theme.spacing(1, 2),
        [theme.breakpoints.down('sm')]: {
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: 'inherit'
        }
    },
    formControl: {
        margin: theme.spacing(1),
        flexGrow: 1,
    }
}));

export const Filters = ({ activeFilters = {}, onChange }) => {
    const classes = useStyles();
    const theme = useTheme();

    const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [showMobileFilters, setShowMobileFilters] = React.useState(false);

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const renderFilters = () => (
        <>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Select User</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Select User"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Select Account</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Select Account"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Active</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Active"
                >
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>In-Active</MenuItem>
                </Select>
            </FormControl>
        </>
    );

    const renderMobileFilters = () => (
        <>
            <Box display="flex" flexDirection="column" flexGrow="1" className="filters-inputs">
                { renderFilters() }
            </Box>
        </>
    );

    const renderDesktopFilters = () => (
        <>
            <Box display="flex" flexGrow="1" className="filters-inputs">
                { renderFilters() }
            </Box>
        </>
    );

    return (
        <Box className={classes.cFilters} display="flex" justifyContent="space-between" alignItems="center">

            <Box display="flex" justifyContent="space-between" alignItems="center" className="filters-header">
                <Box fontSize="h6.fontSize">Filter Campaigns</Box>

                {
                    isBelowSM && <IconButton
                        aria-label="open filters"
                        edge="start"
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                    >
                        { showMobileFilters && <ExpandLessIcon /> }
                        { !showMobileFilters && <FilterListIcon /> }
                    </IconButton>
                }

            </Box>

            { isBelowSM && showMobileFilters && renderMobileFilters() }

            { !isBelowSM && renderDesktopFilters() }

        </Box>
    );
};