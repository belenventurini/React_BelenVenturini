import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ItemDetailContainer.scss'



// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({productData}) => {
    return (
        <div className='boxCardItemDetailContainer'>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productData.image} />
        <Card.Body>
            <Card.Title>{productData.name}</Card.Title>
            <Card.Text>
                Origin: {productData.name}
            </Card.Text>
            <Card.Text>
                Gender: {productData.gender}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Type: {productData.type}</ListGroup.Item>
            <ListGroup.Item>Status: {productData.status}</ListGroup.Item>

        </ListGroup>
        <Card.Body>
            <Button>Agregar al carrito</Button>
        </Card.Body>
        </Card>
        
        </div>
        );
}

export default ItemDetailContainer;
