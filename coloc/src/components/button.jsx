import PropTypes from "prop-types"
function Button({onClick,value}){
    return(
        <button onClick={onClick}>{value}</button>
    )
}
Button.propTypes={
    onClick:PropTypes.func,
    value:PropTypes.string
}
export default Button