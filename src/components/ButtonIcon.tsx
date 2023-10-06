import './ButtonIcon.css'
import { AddCartIcon } from './Icons'

type ButtonParam = { children?: any, onClick?: () => void, backgroundColor?: string, color?: string }

export function ButtonIcon({ children, onClick, backgroundColor, color }: ButtonParam) {
    const classButton = backgroundColor ? 'button' : 'button color-default'
    const style = { backgroundColor: backgroundColor ? backgroundColor : undefined, color: color ? color : undefined }
    return (
        <button onClick={onClick}
            className={classButton}
            style={style}
        >{children ? children : <AddCartIcon fontSize={24} />}</button>
    )
}