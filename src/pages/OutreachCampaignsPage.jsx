// 3rd party modules/packages
import React from 'react';
import {
    Box,
    Button,
    Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// Components
import { Filters } from "../components/outreach-campaigns/Filters";
import { CampaignsList } from "../components/outreach-campaigns/CampaignsList";

const OutreachCampaignsPage = (props) => {
    const [activeFilters, setActiveFilters] = React.useState({});

    const onFiltersChange = (updatedFilters) => {
        // TODO:
        // 1. set active filters
        setActiveFilters(updatedFilters);
        // 2. call Get campaigns API with updated filters
    };

    const onAddNew = () => {
        // TODO:
    };

    return (
        <Box>

            {/* Main Heading */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box fontSize="h5.fontSize" display={{ xs: 'none', md: 'block' }}>Outreach Campaigns</Box>
                <Box fontSize="h6.fontSize" display={{ xs: 'block', md: 'none' }}>Outreach Campaigns</Box>
                <Box display={{ xs: 'none', md: 'block' }}>
                    <Button
                        className="f-sharper-blue"
                        variant="contained"
                        startIcon={<AddIcon fontSize="small"/>}
                        onClick={onAddNew}
                    >
                        Create New
                    </Button>
                </Box>
                <Box display={{ xs: 'block', md: 'none' }}>
                    <Fab className="f-sharper-blue" aria-label="add"> <AddIcon /> </Fab>
                </Box>
            </Box>

            {/* Filters */}
            <Filters activeFilters={activeFilters} onChange={onFiltersChange} />

            {/* Campaigns List */}
            <CampaignsList activeFilters={activeFilters} />

        </Box>
    );
};

export default OutreachCampaignsPage;