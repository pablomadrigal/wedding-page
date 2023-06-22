import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: 'center'}}>
          No olvides traer tus zapatos de baile
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            pb: 2
          }}
        >
          <Typography variant="caption" color="initial">
            All rights reserved - Copyright Pablo Madrigal ©2022.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
