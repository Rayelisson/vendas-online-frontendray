/* eslint-disable prettier/prettier */

import { useDispatch } from "react-redux"

import { UserType } from "../../../models/login/types/UserTypes"
import { useAppSelector } from "../../hooks"
import { setUserAction } from "."

export const useUserReducer = () => {
    const dispatch = useDispatch()
    const  { users} = useAppSelector((state) => state.userReducer) 

    const setUsers = (users: UserType[]) => {
       dispatch(setUserAction(users))
    }

    return {
        users,
        setUsers,
    }

}