import './Button.css'

type ButtonParam = { children?: any, backgroundColor?: string, color?: string }

export function Button({ children, backgroundColor, color }: ButtonParam) {
    const classButton = backgroundColor ? 'buttonr' : 'buttonr color-default'
    const style = { backgroundColor: backgroundColor ? backgroundColor : undefined, color: color ? color : undefined }
    return (
        <button
            className={classButton}
            style={style}
        >{children ? children : 'add to cart'}</button>
    )
}