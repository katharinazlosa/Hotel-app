type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const Input = ({ value, onChange, text }: InputProps) => {
  return (
    <div>
      <label>{text}</label>
      <br></br>
      <input type="text" value={value} onChange={onChange} className="input" />
    </div>
  );
};

export default Input;
