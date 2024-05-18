// Navbar
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar() {
  return (
    <nav>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bolder", color: "darkred" }}>
            REPOLIST
          </Typography>
          <Box
            sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <Typography>{<XIcon />}</Typography>
            <Typography>{<GitHubIcon />}</Typography>
            <Typography>{<LinkedInIcon />}</Typography>
            <Button variant="contained">Create Repo</Button>
          </Box>
        </Box>
        <hr />
      </Container>
    </nav>
  );
}

export default Navbar;
