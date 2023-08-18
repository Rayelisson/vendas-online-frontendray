/* eslint-disable prettier/prettier */

import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from "../../../shared/components/screen/Screen"
import { useCategory } from '../../category/hooks/UseCategory';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from "../routes"
import { DisplayFlex, DisplayFlexJudtifyCenter, DisplayFlexJudtifyRight } from '../styles/display.styled';
import { LimitedContainer } from '../styles/limited.styled';





const ProductInsert = () => {
  const { productId } = useParams<{productId: string}>()
  const {
      product, 
      loading, 
      dissabledButton, 
      onChangeInput, 
      handleInsertProduct,  
      handleChangeSelect 
    } = useInsertProduct(productId)

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
    <DisplayFlexJudtifyCenter>
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
       <DisplayFlex>
       <InputMoney 
           addonBefore="Kg"
           onChange={(event) => 
           onChangeInput(event, 'weight', true)}  
           value={product.weight} 
           margin="0px 16px 16px 0px" 
           title='Peso'   
           placeholder='Peso'
           />
      <InputMoney 
           addonBefore="cm"
           onChange={(event) => 
           onChangeInput(event, 'length', true)}  
           value={product.length} 
           margin="0px 0px 16px 0px" 
           title='Comprimento'   
           placeholder='Comprimento'
           />

       </DisplayFlex>
       <DisplayFlex>
       <InputMoney 
           addonBefore="cm"
           onChange={(event) => 
           onChangeInput(event, 'height', true)}  
           value={product.height} 
           margin="0px 16px 16px 0px" 
           title='Altura'   
           placeholder='Altura'
           />
      <InputMoney 
           addonBefore="cm"
           onChange={(event) => 
           onChangeInput(event, 'width', true)}  
           value={product.width} 
           margin="0px 0px 16px 0px" 
           title='Largura'   
           placeholder='Largura'
           />
       </DisplayFlex>
       <InputMoney 
           addonBefore="cm"
           onChange={(event) => 
           onChangeInput(event, 'diameter', true)}  
           value={product.diameter} 
           margin="0px 0px 32px 0px" 
           title='Diamentro'   
           placeholder='Diamentro'
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
    </DisplayFlexJudtifyCenter>
   </Screen>
    )
}

export default ProductInsert