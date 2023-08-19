/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from "../../../shared/constants/urls";
import { MethodsEnum } from "../../../shared/enums/methods.enum";
import { useRequests } from "../../../shared/hooks/useRequests"
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryRoutesEnum } from '../routes';


export const useCategory = () => {
    const { categories, setCategories } = useCategoryReducer()
    const [ categoryIdDelete, setCategoryDelete ] = useState<number | undefined>()
    const [ categoriesFiltered, setCategoriesFiltered  ] = useState(categories)
    const { request } = useRequests()
    const navigate = useNavigate()

    useEffect(() => {
      if (!categories || categories.length ===0) {
        request(URL_CATEGORY, MethodsEnum.GET, setCategories)
    }
    }, [])

    useEffect(() => {
      setCategoriesFiltered([...categories])
    }, [categories])

    const handleOnChangeSearch = (value: string) => {
          if (!value) {
            setCategoriesFiltered([...categories])
          } else {
            setCategoriesFiltered([
              ...categoriesFiltered.filter((category) => 
                category.name.toUpperCase().includes(value.toUpperCase()),
                ),
            ])
          }
    }

    const handleOnClickCategory = () => {
      navigate(CategoryRoutesEnum.CATEGORY_INSERT)
   }

   const handleOpenModalDelete = (categoryId: number) => {
    setCategoryDelete(categoryId)
     }

     const handleCloseModelDelete = () => {
      setCategoryDelete(undefined)
    }

    const handleConfirmeDeleteCategory = () => {}

    return {
       categories: categoriesFiltered,
       openModalDelete: categoryIdDelete,
       handleOnChangeSearch,
       handleOnClickCategory,
       handleOpenModalDelete,
       handleCloseModelDelete,
       handleConfirmeDeleteCategory,
    }
}