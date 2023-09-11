import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function getProductById(id){
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
}

const ItemDetails = () => {
    const [product, setProduct] = useState({});
    const  { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then((res)=>{setProduct(res.data)})
        .catch((err)=>{console.log(err.data)});
    }, [itemId]);


    return <ItemDetailContainer productData={product}/>;

};

export default ItemDetails;
