// Home page
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  // manage my states
  const [loading, setLoading] = useState(false);
  const [repoList, setRepoList] = useState([]);

  // fetch my repo list using useEffect
  useEffect(() => {
    const getRepo = async () => {
      // set page to loading ... while waiting for the response
      setLoading(true);

      // get the data using fetch or axios method
      // let repo = await fetch("https://api.github.com/users/chukwu-godgive/repos").then((res) => { return(res.json())})
      let repo = await axios.get(
        "https://api.github.com/users/chukwu-godgive/repos"
      );
      setRepoList(repo.data);
      console.log(repo);

      // after getting the response
      setLoading(false);
    };
    getRepo();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* contents  */}
      <section sx={{ backgroundColor: "wheat" }}>
        <Container
          sx={{ margin: "0 auto", backgroundColor: "smoke", paddingTop: "30" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {loading ? (
              <h4>Loading . . .</h4>
            ) : (
              repoList.map((repo, index) => (
                <Card sx={{ width: 345 }} key={index}>
                  {/* <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                  /> */}
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {repo.name}
                      </Typography>
                      <Link
                        href={repo.html_url}
                        sx={{ textDecoration: "none" }}
                      >
                        <GitHubIcon
                          sx={{ fontSize: "medium", marginRight: "5px" }}
                        />
                        View repo on GitHub
                      </Link>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              alignItems: "center",
              paddingTop: "50px",
            }}
          >
            <Button variant="contained">Previous</Button>
            <Button variant="contained">Next</Button>
          </Box>
        </Container>
      </section>

      {/* footer section  */}
      <Footer />
    </>
  );
}

export default Home;