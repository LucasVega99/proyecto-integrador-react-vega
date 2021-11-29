import './Button.css'
const Button = ({label, children}) => {
    return (
        <button className='button'>{label}{children}</button>
        )
}

export default Button;