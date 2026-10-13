import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-ignis.png";

interface TerraIgnisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const TerraIgnisLogo = ({ className = "", size = "md" }: TerraIgnisLogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };
  const s = sizes[size];

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img src={logoImg} alt="Terra Ignis Energía" className={`${s} w-auto object-contain`} />
    </Link>
  );
};

export default TerraIgnisLogo;
