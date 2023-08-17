/* eslint-disable prettier/prettier */

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/input";
import Screen from "../../../shared/components/screen/Screen"
import { DisplayFlexJudtifyCenter, DisplayFlexJudtifyRight } from "../../product/styles/display.styled";
import { LimitedContainer } from "../../product/styles/limited.styled";
import { useUserInsert } from "../hooks/useUserInsert";
import { UserRoutesEnum } from '../routes';

const UserInsert = () => {
    const {disabledButton, user, hadleCancelInsert, hadleInsertAdmin, handOnChangeInput } = useUserInsert()
    
    return (
        <Screen
        listBreadcrumb={[
          {
            name: 'HOME',
          },
          {
            name: 'USUARIOS',
            navigateTo: UserRoutesEnum.USER
          },
          {
            name: 'INSERIR',
          },
  ]}
        >
        <DisplayFlexJudtifyCenter>
            <LimitedContainer width={400}>
             <Input 
             value={user.name} 
             onChange={(event) => handOnChangeInput(event, 'name')}
             margin="0px 0px 16px 0px" 
             title='Nome' 
             placeholder='Nome' 
             />
             <Input 
             value={user.phone}  
             onChange={(event) => handOnChangeInput(event, 'phone')}
             margin="0px 0px 16px 0px" 
             title='Telefone'
             placeholder='Telefone' 
             />
             <Input 
             value={user.email} 
             onChange={(event) => handOnChangeInput(event, 'email')}
             margin="0px 0px 16px 0px" 
             title='Email' 
             placeholder='Email' 
             />
             <Input 
             value={user.cpf} 
             onChange={(event) => handOnChangeInput(event, 'cpf')}
             margin="0px 0px 16px 0px" 
             title='CPF' 
             placeholder='CPF' 
             />
             <Input 
             value={user.password}
             onChange={(event) => handOnChangeInput(event, 'password')}
             margin="0px 0px 16px 0px" 
             title='Senha' 
             placeholder='Senha' 
             />
        
            <DisplayFlexJudtifyRight>
                <LimitedContainer onClick={hadleCancelInsert} margin='0px 8px' width={120}>
                <Button danger  >
                    Cancelar
                </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
                <Button disabled={disabledButton} onClick={hadleInsertAdmin}  type='primary'>
                    Inserir Admin
                </Button>
            </LimitedContainer>
            </DisplayFlexJudtifyRight>
           </LimitedContainer>
        </DisplayFlexJudtifyCenter>
  
        </Screen>
        )

}

export default UserInsert