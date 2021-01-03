import './Button.css';

const Button = ({ size, text }) => {
  const sizeName = size ? (size == 'lg' ? 'Button-lg' : 'Button-sm') : '';
  return <button className={`Button ${sizeName}`}>{text}</button>;
};

export default Button;
