
import '../../components/ItemListContainer/Container.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Container.scss'
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({productsData}) =>{

//useNavigate nos permite navegar entre rutas dentro de nuestra aplicacion
    const navigate = useNavigate ();

    return ( 
        <div className='boxCardItemListContainer'>
            {productsData.map((product) => {
                return (
                    <Card style={{ width: '18rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>Nombre: {product.name}</Card.Title>
                    <Card.Text>
                        {product.species}
                    </Card.Text>
                    <Card.Text>
                        {product.type}
                    </Card.Text>
                    <Card.Text>
                        {product.status}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate(`/item/${product.id}`)}>Detalles</Button>
                    </Card.Body>
                    </Card>
                );
        })} 
        </div>
        );
};

export default ItemListContainer ;

