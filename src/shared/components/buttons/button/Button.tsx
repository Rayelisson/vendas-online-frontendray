/* eslint-disable prettier/prettier */
import { ButtonProps } from "antd"

import { ButtonAtnd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps {
    margin?: string;
}


const Button = ({margin, ...props}: ButtonCurrentProps) => {
    return <ButtonAtnd style={{margin: margin}} {...props} />
    
};

export default Button