 import React from 'react';
 import   AppBar  from "@mui/material/AppBar";
 import  Toolbar  from "@mui/material/Toolbar";
 import   Typography  from "@mui/material/Typography";
 import { styled } from '@mui/material';
 

 import { Link } from "react-router-dom";

const useStyles = styled((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo:{
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "blue",
      borderBottom: "1px solid white",
    },
  },
}));

function Header(){

  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.navbar}>
      <Toolbar >
        <Typography variant="h5" className={classes.logo}>
          Travyon Stevens
        </Typography>
        {/* <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/education" className={classes.link}>
            Education
          </Link>
          <Link to="/technicalskills" className={classes.link}>
            Technical Skills
          </Link>
          <Link to="/experience" className={classes.link}>ß
            Experience
          </Link>
          <Link to="/projects" className={classes.link}>
            Projects
          </Link>
          <Link to="/professionalleadership" className={classes.link}>
            Professional Leadership
          </Link>
        </div> */}
      </Toolbar>
    </AppBar>
    );

   
}

export default Header;