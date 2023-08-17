/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { InsertUser } from '../../../shared/dtos/InsertUser.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserRoutesEnum } from '../routes';


export const useUserInsert = () => {
  const navigate = useNavigate()
  const { request, loading } = useRequests()
  const [disabledButton, setDisbledButton] = useState(true)
  const [user, setUser] = useState<InsertUser>({
    name: '',
    phone: '',
    email:  '',
    cpf:  '',
    password:  '',

   })

   useEffect(() => {
    if (user.cpf && user.email && user.password && user.phone) {
      setDisbledButton(false)

    } else {
      setDisbledButton(true)
    }
  }, [user])

 const handOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setUser((currentUser) => ({
     ...currentUser,
      [name]: event.target.value,
    }))
}

  const hadleCancelInsert = async () => {
    navigate(UserRoutesEnum.USER)
  }

  const hadleInsertAdmin = async () => {
    await request(URL_USER, MethodsEnum.POST, undefined, user) 
    if (navigate) {
      navigate(UserRoutesEnum.USER)
    }
  }

  return {
    user,
    disabledButton,
     hadleCancelInsert,
     hadleInsertAdmin,
     handOnChangeInput,
   }
}