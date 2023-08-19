/* eslint-disable prettier/prettier */

import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Input, Modal, Table } from "antd"
import { ColumnsType } from "antd/es/table"

import Button from "../../../shared/components/buttons/button/Button"
import Screen from "../../../shared/components/screen/Screen"
import { CategoryType } from "../../../shared/types/CategoryType"
import { DisplayFlex, DisplayFlexJustifyBetWeen } from "../../product/styles/display.styled"
import { LimitedContainer } from "../../product/styles/limited.styled"
import { useCategory } from "../hooks/UseCategory"


const { Search } = Input



const Category = () => {
  const { categories, 
          openModalDelete,
          handleOnChangeSearch,
          handleOnClickCategory, 
          handleOpenModalDelete, 
          handleCloseModelDelete, 
          handleConfirmeDeleteCategory 
        } = useCategory()
  

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
    {
      title: 'Açoes',
      dataIndex: '',
      key: '',
      render: (_, category) => (
             <LimitedContainer width={180}>
                <DisplayFlex>
                <LimitedContainer  margin="0px 16px 0px 0px" width={90}>
                    <Button
                    onClick={() => null}
                    icon={<EditOutlined />}
                  >
                    Editar
                  </Button>
                </LimitedContainer>

              {category.amoutProducts <= 0 && (
                 <Button
                 danger
                 onClick={() => handleOpenModalDelete(category.id) }
                 icon={<DeleteOutlined />}
               >
                 Deletar
               </Button>
                
                )}
                </DisplayFlex>
             </LimitedContainer>

        
            ),

    },
  ]

  

   

 

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
                <Modal
                title="Atenção"
                open={openModalDelete }
                onOk={handleConfirmeDeleteCategory}
                onCancel={handleCloseModelDelete }
                okText="Sim"
                cancelText="Cancelar"
              >
                <p>Tem Certeza que deleta esta Category </p>
              </Modal>
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

