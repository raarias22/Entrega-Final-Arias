import { useState, useEffect } from "react";
import { getProductById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db, } from "../../firebase/config";

    const ItemDetailContainer = () => {
        const [product, setProduct] = useState(null)
        const [loading, setLoading] = useState(true)

        const { itemId } = useParams()

        useEffect(() => {
            setLoading(true)

            const docRef = doc(db, 'items', itemId)

            getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [itemId])
    }

export default ItemDetailContainer