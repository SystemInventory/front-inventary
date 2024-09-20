import { Link, useLocation } from "react-router-dom";
import { Boxes, House, PackageSearch, SquareUser, User } from "lucide-react";

export const FloatingMenu = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center gap-2 p-2 rounded transition-all duration-300 ${
      location.pathname === path ? "bg-green-500 text-white translate-x-2" : "hover:bg-gray-200 hover:translate-x-2"
    }`;

  return (
    <div className="h-full bg-gray-100 shadow-lg flex flex-col gap-4 border-r border-gray-200 p-4 md:w-48 lg:w-52 transition-colors duration-300">
      <Link to="/home" className={linkClasses("/home")}>
        <House className="sm:hidden" size={25} />
        <House className="hidden sm:block" />
        <p className="hidden sm:block">Inicio</p>
      </Link>
      <Link to="/personal" className={linkClasses("/personal")}>
        <User className="sm:hidden" size={25} />
        <User className="hidden sm:block" />
        <p className="hidden sm:block">Personal</p>
      </Link>
      <Link to="/suppliers" className={linkClasses("/suppliers")}>
        <SquareUser className="sm:hidden" size={25} />
        <SquareUser className="hidden sm:block" />
        <p className="hidden sm:block">Proveedores</p>
      </Link>
      <Link to="/kardex" className={linkClasses("/kardex")}>
        <PackageSearch className="sm:hidden" size={25} />
        <PackageSearch className="hidden sm:block" />
        <p className="hidden sm:block">Kardex</p>
      </Link>
      <Link to="/products" className={linkClasses("/products")}>
        <Boxes className="sm:hidden" size={25} />
        <Boxes className="hidden sm:block" />
        <p className="hidden sm:block">Productos</p>
      </Link>
    </div>
  );
};
