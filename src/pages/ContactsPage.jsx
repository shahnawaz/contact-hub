// 3rd party modules/packages
import React from 'react';
import { Box } from '@material-ui/core';

const ContactsPage = (props) => {
    return (
        <Box>

            {/* Main Heading */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box fontSize="h5.fontSize" display={{ xs: 'none', md: 'block' }}>Contacts</Box>
                <Box fontSize="h6.fontSize" display={{ xs: 'block', md: 'none' }}>Contacts</Box>
            </Box>

        </Box>
    );
};

export default ContactsPage;