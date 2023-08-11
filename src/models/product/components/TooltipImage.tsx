/* eslint-disable prettier/prettier */
import { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/tooltipImage.styles';
import Tooltip from './tooltip/Tooltip';



interface TooltipImageProps {
     product: ProductType
}

const TooltipImage = ({ product }: TooltipImageProps) => {
   return (
      <Tooltip tooltip={<ImageProduct src={product.image}/>}>
            <span>{product.id}</span>
      </Tooltip>
    )
}

export default TooltipImage
