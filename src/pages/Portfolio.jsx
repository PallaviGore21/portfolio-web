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


export default function Portfolio() {
  return <>
    <Container>
    <Row  className='m-5'>
      <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\pages\Screenshot (21).png"
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
        <a href="https://pallavigore21.github.io/tic-tac-toe/" size="small">Learn More</a>
    </Card>
    </Col>

    <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\pages\Screenshot (19).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Whether application
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
        image="src\pages\Screenshot (23).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Figma Design(UI)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://pallavigore21.github.io/UI-project/" size="small">Learn More</a>
    </Card> 
    </Col>

    </Row>

    <Row  className='m-5'>
      <Col>
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
    </Col>

    <Col>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="src\pages\Screenshot (21).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ShopList App
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
        image="src\pages\Screenshot (17).png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Olx Clone
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
        <Button size="small">Share</Button>
        <a href="https://github.com/PallaviGore21/shop-list-project" size="small">Learn More</a>
    </Card> 
    </Col>

    </Row>
    </Container>
    </>
}
