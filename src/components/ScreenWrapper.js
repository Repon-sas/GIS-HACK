import React from "react";
import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";

export function ScreenWrapper({ paddingTop = 0, paddingBottom = 0, marginTop = 0, marginBottom = 0, children }) {
    return (
        <Container style={{ zIndex: 5, position: 'relative' }}>
            <Box pt={paddingTop} pb={paddingBottom} mt={marginTop} mb={marginBottom}>
                {children}
            </Box>
        </Container>
    )
}
