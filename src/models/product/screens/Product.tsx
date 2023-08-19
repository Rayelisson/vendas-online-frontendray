/* eslint-disable prettier/prettier */

import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Input, Modal } from "antd"
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
import { DisplayFlex, DisplayFlexJustifyBetWeen } from "../styles/display.styled"
import { LimitedContainer } from "../styles/limited.styled"


const { Search } = Input





const Product = () => {
    const { handleOnClickInsert, 
            onSearch,
            productsFiltered, 
            hanldleDeleteProduct, 
            hanldleEditProduct, 
            handleClosedModalDelete,
            openModalDelete,
            hanldOpenModalDelete,
          } = useProduct()
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
                 <LimitedContainer width={180}>
                    <DisplayFlex>
                        <Button
                    margin="0px 16px 0px 0px"
                    onClick={() => hanldleEditProduct(product.id)}
                    icon={<EditOutlined />}
                  >
                    Editar
                  </Button>
                  <Button
                    danger
                    onClick={() => hanldOpenModalDelete(product.id)}
                    icon={<DeleteOutlined />}
                  >
                    Deletar
                  </Button>
                    </DisplayFlex>
                 </LimitedContainer>
    
            
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
                <Modal
                title="Atenção"
                open={openModalDelete }
                onOk={hanldleDeleteProduct}
                onCancel={handleClosedModalDelete }
                okText="Sim"
                cancelText="Cancelar"
              >
                <p>Tem certeza que deseja Deleta aeste Produto ?</p>
              </Modal>
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