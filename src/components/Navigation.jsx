import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-semibold">
                Sistema Casmara
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/clients"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/clients')
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Gestión de Clientes
                </Link>
                <Link
                  to="/visits"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/visits')
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Gestión de Visitas
                </Link>
                <Link
                  to="/stats"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive('/stats')
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Estadísticas
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-indigo-200 text-sm mr-4">
              {userEmail}
            </div>
            <button
              onClick={handleLogout}
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
