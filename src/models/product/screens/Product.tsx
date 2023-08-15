/* eslint-disable prettier/prettier */

import { Input } from "antd"
import { ColumnsType } from "antd/es/table"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../../shared/components/buttons/button/Button"
import Screen from "../../../shared/components/screen/Screen"
import Table from "../../../shared/components/table/Table"
import { URL_PRODUCT } from "../../../shared/constants/urls"
import { MethodsEnum } from "../../../shared/enums/methods.enum"
import { convertNumberToMoney } from "../../../shared/functions/money"
import { useRequests } from '../../../shared/hooks/useRequests'
import { ProductType } from "../../../shared/types/ProductType"
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer"
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from "../components/TooltipImage"
import { ProductRoutesEnum } from "../routes"
import { DisplayFlexJustifyBetWeen } from "../styles/display.styled"
import { LimitedContainer } from "../styles/limited.styled"


const { Search } = Input

const columns: ColumnsType<ProductType> = [
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
]



const Product = () => {
    const { products, setProduct } = useProductReducer()
    const [productsFiltered, setProdutsFiltered] = useState<ProductType[]>([])
    const { request } = useRequests()
    const navigate = useNavigate()

    useEffect(() => {
      setProdutsFiltered([...products])
    }, [products])

     useEffect(() => {
            request<ProductType[]>(URL_PRODUCT,MethodsEnum.GET, setProduct)
      }, [])

      const handleOnClickInsert = () => {
        navigate(ProductRoutesEnum.PRODUCT_INSERT)
      }

      const onSearch = (value: string) => {
        if (!value) {
         setProdutsFiltered([...products])
          } else {
            setProdutsFiltered([ ...productsFiltered.filter((product) => product.name.includes(value))])
          }
        
      }



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