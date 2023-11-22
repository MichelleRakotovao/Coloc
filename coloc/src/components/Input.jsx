import PropTypes from "prop-types"
function Input({type,onChange,value,placeholder}){
    return(
       <input type={type} placeholder={placeholder} onChange={onChange} value={value}/> 
    )
}
Input.propTypes={
    type:PropTypes.string,
    onChange:PropTypes.func,
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    placeholder:PropTypes.string
}
export default Input