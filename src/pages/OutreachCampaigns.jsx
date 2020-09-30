import React from 'react';
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { Filters } from "../components/outreach-campaigns/Filters";
import { CampaignsList } from "../components/outreach-campaigns/CampaignsList";

const OutreachCampaigns = (props) => {
    const [activeFilters, setActiveFilters] = React.useState({});

    const onFiltersChange = (updatedFilters) => {
        // TODO:
        // 1. set active filters
        // 2. call Get campaigns API with updated filters
    };

    const onAddNew = () => {
        // TODO:
    };

    return (
        <Container>

            {/* Main Heading */}
            <Box display="flex" justifyContent="space-between">
                <Box>Outreach Campaigns</Box>
                <Button variant="contained" color="primary" onClick={onAddNew}>
                    Primary
                </Button>
            </Box>

            {/* Filters */}
            <Filters activeFilters={activeFilters} onChange={onFiltersChange} />

            {/* Campaigns List */}
            <CampaignsList />

        </Container>
    );
};

export default OutreachCampaigns;