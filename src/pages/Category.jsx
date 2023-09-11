import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";


const Category = () => {

    const[products, setProducts] = useState([]);

    // eslint-disable-next-line no-undef
    const { categoryId } = useParams();

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res) => {
            const dataFiltered = res.data.results.filter(item => { return item.species === categoryId} );
            setProducts(dataFiltered)
        })
        .catch(err => console.log(err));
    }, [categoryId]);

    return (
        <ItemListContainer  productsData={products}/>
    )
}

export default Category;