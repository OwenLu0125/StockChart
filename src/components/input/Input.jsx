import './Input.scss';

const Input = ({ type, label, name, value, placeholder, onChange }) => {
  return (
    <div>
      <div className='label'>{label}</div>
      <input
        className='input'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
