/* eslint-disable prettier/prettier */

import { Input, Spin } from "antd"
import { ColumnsType } from "antd/es/table"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../../shared/components/buttons/button/Button"
import Screen from "../../../shared/components/screen/Screen"
import Table from "../../../shared/components/table/Table"
import { UserTypeEnum } from "../../../shared/enums/userType.enum"
import { getUserInfoByToken } from "../../../shared/functions/connection/auth"
import { insertMaskInCpf } from "../../../shared/functions/cpf"
import { insertMaskInPhone } from "../../../shared/functions/phone"
import { UserType } from "../../login/types/UserTypes"
import { DisplayFlexJudtifyCenter, DisplayFlexJustifyBetWeen } from "../../product/styles/display.styled"
import { LimitedContainer } from "../../product/styles/limited.styled"
import { useUser } from "../hooks/useUser"
import { UserRoutesEnum } from "../routes"

const { Search } = Input

const columns: ColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render:(text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render:(text) => <a>{insertMaskInPhone(text)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render:(text) => <a>{insertMaskInCpf(text)}</a>,
  },
 
]

const User = () => {
  const { users, loading, handleOnChangeSeach } = useUser()
  const navigate = useNavigate()

  const userToken = useMemo(() => getUserInfoByToken(), [])

  const handleGoToInsertAmin = () => {
     navigate(UserRoutesEnum.USER_INSERT)
  }

    return (
          <Screen
          listBreadcrumb={[
            {
              name: 'HOME',
            },
            {
              name: 'USUARIOS',
            },
]}
          
          >
            {loading ? (
              <DisplayFlexJudtifyCenter>
               <Spin  size="large"/>
              </DisplayFlexJudtifyCenter>
            ) :(
              <>
               <DisplayFlexJustifyBetWeen margin="0px 0px 16px 0px">
              <LimitedContainer width={240}>
                  <Search placeholder="Buscar usuario" onSearch={handleOnChangeSeach} enterButton/>
              </LimitedContainer>
              <LimitedContainer width={180}>
                {userToken?.typeUser === UserTypeEnum.Root && (
                  <Button type="primary" onClick={handleGoToInsertAmin}>
                       Insert Admin
                  </Button>
                  
                  )}
                </LimitedContainer>
               </DisplayFlexJustifyBetWeen>
              <Table columns={columns} dataSource={users} />
              </>
            )}
          </Screen>
        )

}

export default User

