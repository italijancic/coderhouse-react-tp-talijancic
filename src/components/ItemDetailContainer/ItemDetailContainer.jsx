import React, { useEffect, useState } from 'react'

// Read params from url
import { useParams } from 'react-router-dom'

// My imports
import { firebaseGetProduct } from '../../services/firebase'
import ItemDetail from '../ItemDetail/ItemDetail';
import PageNotFound from '../PageNotFound/PageNotFound';

export default function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [feedbackMsg, setFeedbackMsg] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    firebaseGetProduct(id)
      .then(data => {
        setProduct(data)
      })
      .catch(error => setFeedbackMsg(error.message))
  }, [id])

  return (
    <>
      { feedbackMsg !== null ?
        <PageNotFound />
      :
        <ItemDetail product={product}/>
      }
    </>
  );
}