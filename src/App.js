import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => (
  <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          align="center"
        >
          My photo album
        </Typography>
      </Toolbar>
    </AppBar>

    <main>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Photo Album
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
        >
          Hello everyone! This is my favorite photo album and I love sharing it with my friends.
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} ms={6} md={4}>
              <Card>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  height="140"
                  width="240"
                  component="img"
                  title="Image title"
                />

                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    Header
                  </Typography>
                  <Typography>
                    This is a media card.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                  >
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>

    <footer>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>

      <Typography variant="subtitle1" align="center" color="textSecondary">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  </>
)

export default App
