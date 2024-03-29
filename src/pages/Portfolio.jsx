import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {  Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './script.js'

export default function Portfolio() {
  return <>
    <Container>
    <Row  className='m-5'>
      <Col>
    <Card className='card1' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\public\Screenshot (21).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TIC TAC TOE
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Players take turns putting their marks in empty squares.
        3. The first player to get 3 of her marks in a row is the winner. Like a
        XO-game , the count of win , loss,drawMatch will be added of two
        players.
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://pallavigore21.github.io/tic-tac-toe/" size="small">Learn More</a>
    </Card>
    </Col>

    <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\public\Screenshot (19).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Whether application
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Technology Used : HTML,CSS, Bootstrap, Javascript, React
        Description : It is the React-based Whether-application that shows the temperature,Pressure,Humidity, Min and Max of temperature as per the selection of city
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://pallavigore21.github.io/whether/" size="small">Learn More</a>
    </Card>
    </Col>

    <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\public\Screenshot (23).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Figma Design(UI)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Technology Used : HTML,CSS, Bootstrap
        Description : UI-task done by using HTML, CSS and Bootstrap
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://pallavigore21.github.io/UI-project/" size="small">Learn More</a>
    </Card> 
    </Col>

    </Row>

    <Row  className='m-5'>
      {/* <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\pages\Screenshot (19).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          TIC TAC TOE
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
    </Card>
    </Col> */}

    <Col className='d-flex justify-content-evenly'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\public\Screenshot (13).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ShopList App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        HTML,CSS,Bootstrap,Javascript,React,Redux
Description : user can post, view, update, delete its shops, & can search the shops on the basis of city and category
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://github.com/PallaviGore21/shop-list-project" size="small">Learn More</a>
    </Card>
    </Col>

    <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\public\Screenshot (17).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Olx Clone
        </Typography>
        <Typography variant="body2" color="text.secondary">
        HTML,CSS,Bootstrap,Javascript,React,Redux
Description : user can post, view, update, delete its product admin can
view all users  able to block and unBlock them.user can view its own profile
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://github.com/PallaviGore21/olx-clone" size="small">Learn More</a>
    </Card> 
    </Col>

    </Row>
    </Container>
    </>
}
