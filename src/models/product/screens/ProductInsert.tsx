/* eslint-disable prettier/prettier */

import { useEffect } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import Screen from "../../../shared/components/screen/Screen"
import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { useRequests } from "../../../shared/hooks/useRequests"
import { ProductRoutesEnum } from "../routes"
import { LimitesContainer } from '../styles/productInsert.style';
import { Select } from 'antd';




const ProductInsert = () => {
  const {categories, setCategories } = useDataContext()
  const { request } = useRequests()

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories)
     }
  }, [])


   return <Screen
    listBreadcrumb={[
         {
           name: 'HOME',
         },
         {
           name: 'PRODUTOS',
           navigateTo: ProductRoutesEnum.PRODUCT,
           
         },
         {
            name: 'INSERIR PRODUTOS',
          },
      ]}

   >
    <LimitesContainer>
      <Input margin="0px 0px 16px 0px" title='Nome' placeholder='Nome'/>
      <Input margin="0px 0px 16px 0px" title='Url imagem'   placeholder='Url imagem'/>
      <Input margin="0px 0px 16px 0px" title='Preço' placeholder='Preço'/>
    </LimitesContainer>
    <LimitesContainer>
      <Select
        defaultValue="lucy"
        style={{width: 100%}}
        onChange={handleChange}
        options={
          categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`
          }))
        }
        
      />
      <Button type='primary'>
         Inserir produto
      </Button>
    </LimitesContainer>

   </Screen>
}

export default ProductInsert