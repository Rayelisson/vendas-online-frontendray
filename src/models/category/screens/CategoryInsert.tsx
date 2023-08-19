/* eslint-disable prettier/prettier */


import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/input";
import Loading from "../../../shared/components/loading/Loading";
import Screen from "../../../shared/components/screen/Screen";
import { DisplayFlexJudtifyCenter, DisplayFlexJudtifyRight } from "../../product/styles/display.styled";
import { LimitedContainer } from "../../product/styles/limited.styled";
import { useInsertCategory } from "../hooks/userInsertCategiry";
import { CategoryRoutesEnum } from "../routes";

const CategoryInsert = () => {
    const {  name, categoryId,  handleOnChangeName, disabledButton, insertCategory, loading, } = useInsertCategory()
    const navigate = useNavigate()

    const handleOnClickCancel = () => { 
       navigate(CategoryRoutesEnum.CATEGORY)
    }

    return (
       <Screen
       listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIAS',
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
            name: categoryId ? 'EDITAR CATEGORIA' : 'INSERIR CATEGORIA'
          },
  ]}
       >
        <DisplayFlexJudtifyCenter>
            {loading && categoryId ? (
             <DisplayFlexJudtifyCenter>
                <Loading size="large"/>
             </DisplayFlexJudtifyCenter>
            ) : (
                <LimitedContainer width={400}>
                    <Input 
                    onChange={handleOnChangeName}
                    value={name}
                    margin="0px 0px 16px 0px" 
                    title='Nome'
                        placeholder='Nome'
                        />
                    <DisplayFlexJudtifyRight>
                    <LimitedContainer margin='0px 8px' width={120}>
                    <Button onClick={handleOnClickCancel} danger>
                        Cancelar
                    </Button>
                    </LimitedContainer>
                    <LimitedContainer width={160}>
                        <Button disabled={disabledButton} loading={loading} onClick={insertCategory}  type='primary'>
                            {categoryId ? 'Salva' : 'Inserir categoria'}
                        </Button>
                    </LimitedContainer>
                    </DisplayFlexJudtifyRight>
                </LimitedContainer>
            
            )}
           
    </DisplayFlexJudtifyCenter>
       </Screen>
        )

 }

export default CategoryInsert;
