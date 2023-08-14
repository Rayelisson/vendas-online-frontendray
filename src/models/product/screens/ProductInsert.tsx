/* eslint-disable prettier/prettier */

import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from "../../../shared/components/screen/Screen"
import { useCategory } from '../../category/hooks/UseCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from "../routes"
import { DisplayFlexJudtifyRight } from '../styles/display.styled';
import { LimitedContainer } from '../styles/limited.styled';
import { ProductInsertContainer } from '../styles/productInsert.style';





const ProductInsert = () => {
  const {product, loading, dissabledButton, onChangeInput, handleInsertProduct,  handleChangeSelect } = useInsertProduct()

  const {categories } = useCategory()
  const navigate = useNavigate()




  const handleOnClickCancel = () => {
      navigate(ProductRoutesEnum.PRODUCT)
  }

 


   return (
    <Screen
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
    <ProductInsertContainer>
    <LimitedContainer width={400}>
      <Input onChange={(event) => onChangeInput(event, 'name')} value={product.name} margin="0px 0px 16px 0px" title='Nome' placeholder='Nome'/>
      <Input onChange={(event) => onChangeInput(event, 'image')}  value={product.image} margin="0px 0px 16px 0px" title='Url imagem'   placeholder='Url imagem'/>
      <InputMoney onChange={(event) => onChangeInput(event, 'price', true)}  value={product.price} margin="0px 0px 16px 0px" title='Preço' placeholder='Preço'/>
   
      <Select
        defaultValue="Categoria" 
        margin="0px 0px 16px 0px"
        onChange={handleChangeSelect}
        options={
          categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        
      />
      <DisplayFlexJudtifyRight>
        <LimitedContainer margin='0px 8px' width={120}>
          <Button danger onClick={handleOnClickCancel} >
              Cancelar
          </Button>
      </LimitedContainer>
      <LimitedContainer width={120}>
          <Button loading={loading} disabled={dissabledButton} onClick={handleInsertProduct} type='primary'>
            Inserir produto
          </Button>
      </LimitedContainer>
      </DisplayFlexJudtifyRight>
      </LimitedContainer>
    </ProductInsertContainer>
   </Screen>
    )
}

export default ProductInsert