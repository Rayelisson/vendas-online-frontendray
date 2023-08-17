/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react"

import { URL_USER_ALL } from "../../../shared/constants/urls"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { useRequests } from "../../../shared/hooks/useRequests"
import { useUserReducer } from "../../../store/reducers/userReducer/userUserReducer"

export const useUser = () => {
  const { users, setUsers } = useUserReducer()
  const [usersFiltered, setUsersFiltered ] = useState(users)
  const { request, loading } = useRequests()

  useEffect(() => {
       request(URL_USER_ALL, MethodsEnum.GET, setUsers)
  }, [])

  useEffect(() => {
    setUsersFiltered(users)
}, [users])

const handleOnChangeSeach = (value: string) => {
  if(!value) {
     setUsersFiltered([...users])
  } else {
      setUsersFiltered([...users.filter((user) => user.name.includes(value))])
    }
}

  return {
    users: usersFiltered,
    loading,
    handleOnChangeSeach,
   }
  
}