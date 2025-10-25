import Loader from "./Loader";
import Translatable from "./translatable_text/Translatable";
import { Button } from "./ui/button";


interface ButtonProps {
  onClick?: (el: any) => void;
  className?: string;
  title: string;
  isSubmitting?: boolean;
  icon?: any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: 'default' | 'submit' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'login' | 'link' | 'resultError'| 'main';
}

export default function ButtonComponent({onClick, title, isSubmitting, className, icon, variant, disabled, type}: ButtonProps) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button 
      variant={variant} 
      className={className}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {icon}
      {isSubmitting 
        ? <div className="flex gap-2 items-center justify-center"> <Loader className="h-4 w-4"/> <Translatable>Processing...</Translatable> </div> 
        : title && <Translatable>{title}</Translatable>
      }  
    </Button>
  )
}
