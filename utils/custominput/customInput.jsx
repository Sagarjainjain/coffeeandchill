import "./custominput.css"

const CustomInput = (placeholder) => {
    
  return (
    <input className="custom_input" type="text" placeholder={placeholder.placeholder} />
  )
}

export default CustomInput