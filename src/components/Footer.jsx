import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography
          variant="h5"
          pb="40px"
          mt="5px"
          sx={{
            fontSize: { lg: "25px", xs: "10px" },
          }}
        >
          Made with ❤️ Ahmed Rahmou, All reserved rights {year}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
