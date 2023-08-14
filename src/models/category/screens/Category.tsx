/* eslint-disable prettier/prettier */

import Screen from "../../../shared/components/screen/Screen"
import { useCategory } from "../hooks/UseCategory"

const Category = () => {

    const { categories } = useCategory()

    return (
          <Screen>
            <div>category</div>
            {categories.map((category) => (
                 <div key={category.id}>{category.name}</div>
                ))}
          </Screen>
          )

}

export default Category

