// 3rd party modules/packages
import React from 'react';
import { Box } from '@material-ui/core';

const ProspectingCampaignsPage = (props) => {
    return (
        <Box className="c-prospecting-campaigns-page">

            {/* Main Heading */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box fontSize="h5.fontSize" display={{ xs: 'none', md: 'block' }}>Prospecting Campaigns</Box>
                <Box fontSize="h6.fontSize" display={{ xs: 'block', md: 'none' }}>Prospecting Campaigns</Box>
            </Box>

        </Box>
    );
};

export default ProspectingCampaignsPage;