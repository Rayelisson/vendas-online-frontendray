/* eslint-disable prettier/prettier */

import { Input, Table } from "antd"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"

import Button from "../../../shared/components/buttons/button/Button"
import Screen from "../../../shared/components/screen/Screen"
import { CategoryType } from "../../../shared/types/CategoryType"
import { DisplayFlexJustifyBetWeen } from "../../product/styles/display.styled"
import { LimitedContainer } from "../../product/styles/limited.styled"
import { useCategory } from "../hooks/UseCategory"
import { CategoryRoutesEnum } from "../routes"


const { Search } = Input

const columns: ColumnsType<CategoryType> = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render:(text) => <a>{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Produtos',
        dataIndex: 'amoutProducts',
        key: 'amoutProducts',
        render: (text) => <a>{text}</a>,
      },
    ]

const Category = () => {

    const { categories, handleOnChangeSearch } = useCategory()
    const navigate = useNavigate()

    const handleOnClickCategory = () => {
      navigate(CategoryRoutesEnum.CATEGORY_INSERT)
   }

 

    return (
          <Screen
          listBreadcrumb={[
            {
              name: 'HOME',
            },
            {
              name: 'CATEGORIAS',
            },
      ]}
          
          >
            <DisplayFlexJustifyBetWeen margin="0px 0px 16px 0px">
                  <LimitedContainer width={240}>
                        <Search placeholder="Buscar Produto" onSearch={handleOnChangeSearch} enterButton/>
                  </LimitedContainer>
                  <LimitedContainer width={120}>
                  <Button type="primary" onClick={handleOnClickCategory}>
                        Insert
                  </Button>
                  </LimitedContainer>
            </DisplayFlexJustifyBetWeen>
             <Table columns={columns} dataSource={categories} />
          </Screen>
          )

}

export default Category

