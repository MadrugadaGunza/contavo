import { Link } from "react-router-dom";
import logo from "../assets/contavo-logo.png";
import { ChevronDown, FileSpreadsheet, Headset, LayoutDashboard, Menu, Settings, ShoppingCart, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      {/* Botão mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <label htmlFor="menu-toggle" className="cursor-pointer bg-gray-800 hover:bg-blue-900 text-white p-2 rounded-lg shadow-lg flex items-center justify-center w-10 h-10">
          <Menu className="w-6 h-6" />
        </label>
      </div>

      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* SIDEBAR FIXO */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-800 transform -translate-x-full peer-checked:translate-x-0 md:translate-x-0 transition-transform duration-300">
        {/* LOGO */}
        <div className="h-16 bg-white flex items-center justify-center px-4">
          <img src={logo} className="ms:ml-6" />
        </div>

        {/* LINKS */}
        <nav className="flex flex-col py-2 text-gray-100">
          <Link to="/dashboard" className="flex items-center px-4 py-3 hover:bg-blue-900">
            <LayoutDashboard className="h-5 w-5 mr-2" /> Dashboard
          </Link>

          <div className="">
            {/* Checkbox para abrir submenu */}
            <input type="checkbox" id="menu-sub-toggle" className="hidden peer" />

            {/* Label principal */}
            <label htmlFor="menu-sub-toggle" className="flex items-center justify-between px-4 py-3 hover:bg-blue-900 cursor-pointer select-none">
              <div className="flex items-center"><FileSpreadsheet className="h-5 w-5 mr-2" /> Lançamentos</div> <ChevronDown />
            </label>

            {/* SUBMENUS */}
            <div className="hidden peer-checked:flex flex-col ml-10 mt-1">
              <Link to="/shopping" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Compra</Link>
              <Link to="/subitem2" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Venda</Link>
              <Link to="/subitem3" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">pagamento</Link>
              <Link to="/subitem3" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Recebimento</Link>
              <Link to="/subitem3" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Despesas</Link>
              <Link to="/subitem3" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Receitas</Link>
              <Link to="/subitem3" className="px-3 py-2 text-sm hover:bg-blue-900 rounded">Investimentos</Link>
            </div>
          </div>

          <Link to="/suport" className="flex items-center px-4 py-3 hover:bg-blue-900">
            <Headset className="h-5 w-5 mr-2" /> Suporte
          </Link>
          <Link to="/settings" className="flex items-center px-4 py-3 hover:bg-blue-900">
            <Settings className="h-5 w-5 mr-2" /> Configurações
          </Link>
        </nav>
      </aside>

      {/* empurrar conteúdo para direita em telas grandes */}
      <div className="md:ml-64"></div>
    </>
  );
};

export default Sidebar;