import './InputField.css'

const InputField = ({icon: Icon, type, name, value, placeholder, onChange, required = false}) => {
    return (
        <div className="inputField-container">
            {Icon && <Icon className="icon" />}
            <input 
            className="inputField" 
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required={required} 
            />
        </div>
    )
}

export default InputField;