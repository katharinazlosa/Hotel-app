import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text: string;
  path?: string;
  position?:
    | "bannerposition"
    | "roomsposition"
    | "sidebarposition"
    | "formposition";
};

const Button = ({ position, text = "", path = "" }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <>
      <button className={`btn btn--${position}`} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
