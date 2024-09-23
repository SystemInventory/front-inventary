import { Link, useLocation } from "react-router-dom";
import {
  Boxes,
  Cross,
  House,
  PackageOpen,
  PackageSearch,
  SquareUser,
  User,
} from "lucide-react";
import { Separator } from "../ui";

export const FloatingMenu = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center gap-2 p-2 rounded transition-all duration-300 ${
      location.pathname === path
        ? "bg-green-500 text-white translate-x-2"
        : "hover:bg-gray-200 hover:translate-x-2"
    }`;

  return (
    <>
      <div className="flex flex-col w-min">
        <div className="flex justify-center items-center p-2">
          <Cross className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
          <span className="hidden sm:inline font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center">
            Sistema de Inventario
          </span>
        </div>
        <Separator />
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
          <Link to="/categories" className={linkClasses("/categories")}>
            <PackageOpen className="sm:hidden" size={25} />
            <PackageOpen className="hidden sm:block" />
            <p className="hidden sm:block">Categorias</p>
          </Link>
        </div>
      </div>
    </>
  );
};
