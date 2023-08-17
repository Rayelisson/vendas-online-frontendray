/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { InsertProduct } from '../../../shared/dtos/InsertProduct.dto';
import { connectAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../routes';

export const useInsertProduct = () => {
    const navigate = useNavigate()
    const { setNotification } = useGlobalReducer()
    const [loading, setLoading] = useState(false)
    const [dissabledButton, setDisbleButton] = useState(true)
    const [product, setProduct] = useState<InsertProduct>({
        name: '',
        price: 0,
        image: '',
    })

    useEffect(() => {
      if (product.name && product.categoryId && product.price > 0) {
          setDisbleButton(false)
        } else {
           setDisbleButton(true)
          }
    }, [product])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, 
        nameObject: string,
        isNumber?: boolean,
        ) => {
          setProduct({
             ...product,
             [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
          })
      }
    
    
    
      const handleChangeSelect = (value: string) => {
        setProduct({
        ...product,
        categoryId: Number(value),
        })
      }

    const handleInsertProduct = () => { 
        connectAPIPost(URL_PRODUCT, product)
        .then(() => {
         setNotification( 'Sucesso!', 'success', 'Produto inserido com sucesso')
           navigate(ProductRoutesEnum.PRODUCT)
         })
        .catch((error: Error) => {
         setNotification(error.message, 'error')
       })
       setLoading(false)
     }

    return {
      product,
      loading,
      dissabledButton,
      onChangeInput,
      handleInsertProduct,
      handleChangeSelect

    }
}
