import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
            Sistema de Representantes Comerciales Casmara
          </h1>
          <p className="text-gray-600 mb-8">
            Bienvenido al sistema de gestión para representantes comerciales de la marca Casmara
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/login" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Iniciar Sesión
          </Link>
          
          <div className="grid grid-cols-1 gap-3 mt-6">
            <Link 
              to="/clients" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Gestión de Clientes
            </Link>
            <Link 
              to="/visits" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Gestión de Visitas
            </Link>
            <Link 
              to="/stats" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Estadísticas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
