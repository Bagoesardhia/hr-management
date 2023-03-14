import { React, useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TextField from "@mui/material/TextField";



export default function LoginScreen() {
  function handleLogin() {
    window.location = "/dashboard";
  }

  return (
    <div className="loginScreen">
      <div className="loginScreenMain">
        <Card
          sx={{
            width: {
              mobile: 100,
              laptop: 300,
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <TextField
            id="NPK"
            label="NPK"
            variant="outlined"
            size="small"
            sx={{
              width: 200,
              maxWidth: "50%",
            }}
          />
          <CardActions></CardActions>
          <TextField
            id="Password"
            label="Password"
            variant="outlined"
            size="small"
            sx={{
              width: 200,
              maxWidth: "50%",
            }}
          />

          <CardActions></CardActions>
          <Button size="small" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
}
