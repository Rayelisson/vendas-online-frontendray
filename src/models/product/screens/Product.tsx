/* eslint-disable prettier/prettier */

import { Input } from "antd"
import { ColumnsType } from "antd/es/table"
import { useMemo } from "react"

import Button from "../../../shared/components/buttons/button/Button"
import Screen from "../../../shared/components/screen/Screen"
import Table from "../../../shared/components/table/Table"
import { convertNumberToMoney } from "../../../shared/functions/money"
import { ProductType } from "../../../shared/types/ProductType"
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from "../components/TooltipImage"
import { useProduct } from "../hooks/useProduct"
import { DisplayFlexJustifyBetWeen } from "../styles/display.styled"
import { LimitedContainer } from "../styles/limited.styled"


const { Search } = Input





const Product = () => {
    const { handleOnClickInsert, onSearch,productsFiltered, hanldleDeleteProduct, hanldleEditProduct } = useProduct()
    const columns: ColumnsType<ProductType> = useMemo(() => 
      [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
          render:(_, product) => <TooltipImage product={product}/>,
        },
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Categoria',
          dataIndex: 'categoty',
          key: 'categoty',
          render:(_, product) => <CategoryColumn category={product.category}/>,
        },
        {
          title: 'Preço',
          dataIndex: 'price',
          key: 'price',
          render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>
        },
        {
          title: 'Action',
          dataIndex: '',
          key: '',
          render: (_, product) => (
                <>
                 <a onClick={() => hanldleEditProduct(product.id)}>Editar</a>
                 <a onClick={() => hanldleDeleteProduct(product.id)}>Deletar</a>
                </>
            
                ),

        },
      ],
      [],
      )





    return (
            <Screen listBreadcrumb={[
                {
                  name: 'HOME',
                },
                {
                  name: 'PRODUTOS',
                },
]}>
              <DisplayFlexJustifyBetWeen margin="0px 0px 16px 0px">
              <LimitedContainer width={240}>
                  <Search placeholder="Buscar Produto" onSearch={onSearch} enterButton/>
              </LimitedContainer>
                <LimitedContainer width={120}>
                <Button type="primary" onClick={handleOnClickInsert}>
                      Insert
                 </Button>
                </LimitedContainer>
              </DisplayFlexJustifyBetWeen>
               <Table columns={columns} dataSource={productsFiltered} />
            </Screen>
          )
}

export default Product