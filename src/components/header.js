import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 100,
  },
  title: {
    flexGrow: 10,
  },
}))

const StyledButton = styled.button`
  background: white;
  border-radius: 25px;
  border: 0;
  color: solid black;
  padding: 5px 15px;
  text-transform: "capitalize";
  font-size: 10px;
`

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography className={classes.title}>Mozilla Gujarat</Typography>
          <Button className="button-text-class">home</Button>
          <Button className="button-text-class">about</Button>
          <Button className="button-text-class">FAQ</Button>
          <Button className="button-text-class">events</Button>
          <StyledButton>
            <Typography>Get Started</Typography>
          </StyledButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
