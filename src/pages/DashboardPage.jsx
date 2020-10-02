// 3rd party modules/packages
import React from 'react';
import { Box } from '@material-ui/core';

const DashboardPage = (props) => {
    return (
        <Box className="c-dashboard-page">

            {/* Main Heading */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box fontSize="h5.fontSize" display={{ xs: 'none', md: 'block' }}>Dashboard</Box>
                <Box fontSize="h6.fontSize" display={{ xs: 'block', md: 'none' }}>Dashboard</Box>
            </Box>

        </Box>
    );
};

export default DashboardPage;