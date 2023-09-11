import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from 'react';
import axios from "axios";


const Home = () => {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => setProducts(res.data.results) )
        .catch(err => console.log(err));
    }, [])

    return (
        <ItemListContainer  productsData={products}/>
    )
}

export default Home;
