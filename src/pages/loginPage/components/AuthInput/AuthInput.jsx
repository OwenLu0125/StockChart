import './AuthInput.scss';

const AuthInput = ({ type, label, name, value, placeholder, onChange }) => {
  return (
    <>
      <div className='label'>{label}</div>
      <input
        className='input'
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default AuthInput;
