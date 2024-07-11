import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ children, href, className }: ButtonProps) => {
  return (
    <Link
      className={`px-4 py-2 bg-pp_avocado font-medium rounded text-pp_white outline-none focus:bg-pp_avocado_500 hover:bg-pp_avocado_500 shadow-xl shadow-pp_avocado_500 ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default Button;
