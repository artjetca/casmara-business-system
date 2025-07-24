import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Stats() {
  const [timeRange, setTimeRange] = useState('month');
  const [stats, setStats] = useState({
    totalClients: 0,
    activeClients: 0,
    totalVisits: 0,
    completedVisits: 0,
    revenue: 0,
    conversionRate: 0
  });

  // Datos de demostración
  useEffect(() => {
    const demoStats = {
      totalClients: 45,
      activeClients: 38,
      totalVisits: 127,
      completedVisits: 98,
      revenue: 45800,
      conversionRate: 72.5
    };
    setStats(demoStats);
  }, [timeRange]);

  const monthlyData = [
    { month: 'Ene', visits: 32, revenue: 12500, clients: 8 },
    { month: 'Feb', visits: 28, revenue: 11200, clients: 6 },
    { month: 'Mar', visits: 35, revenue: 14800, clients: 9 },
    { month: 'Abr', visits: 32, revenue: 13200, clients: 7 }
  ];

  const topProducts = [
    { name: 'Crema Anti-Edad Premium', sales: 24, revenue: 7200 },
    { name: 'Serum Vitamina C', sales: 18, revenue: 5400 },
    { name: 'Máscara Hidratante', sales: 15, revenue: 3750 },
    { name: 'Limpiador Facial', sales: 12, revenue: 2400 },
    { name: 'Protector Solar SPF50', sales: 10, revenue: 2500 }
  ];

  const clientsByRegion = [
    { region: 'Madrid', clients: 15, percentage: 33.3 },
    { region: 'Barcelona', clients: 12, percentage: 26.7 },
    { region: 'Valencia', clients: 8, percentage: 17.8 },
    { region: 'Sevilla', clients: 6, percentage: 13.3 },
    { region: 'Otros', clients: 4, percentage: 8.9 }
  ];

  const recentActivity = [
    { date: '2025-01-24', action: 'Visita completada', client: 'María García', value: '€850' },
    { date: '2025-01-24', action: 'Nuevo cliente', client: 'Pedro López', value: '+1' },
    { date: '2025-01-23', action: 'Pedido realizado', client: 'Ana Martínez', value: '€1,200' },
    { date: '2025-01-23', action: 'Visita programada', client: 'Carlos Rodríguez', value: '-' },
    { date: '2025-01-22', action: 'Visita completada', client: 'Lucía Fernández', value: '€650' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Estadísticas</h1>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="week">Esta Semana</option>
              <option value="month">Este Mes</option>
              <option value="quarter">Este Trimestre</option>
              <option value="year">Este Año</option>
            </select>
          </div>

          {/* KPIs principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-blue-600">{stats.totalClients}</div>
                  <div className="text-sm text-gray-600">Total Clientes</div>
                  <div className="text-xs text-green-600 mt-1">+12% vs mes anterior</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-green-600">{stats.completedVisits}</div>
                  <div className="text-sm text-gray-600">Visitas Completadas</div>
                  <div className="text-xs text-green-600 mt-1">+8% vs mes anterior</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-purple-600">€{stats.revenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Ingresos</div>
                  <div className="text-xs text-green-600 mt-1">+15% vs mes anterior</div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="text-2xl font-bold text-orange-600">{stats.conversionRate}%</div>
                  <div className="text-sm text-gray-600">Tasa de Conversión</div>
                  <div className="text-xs text-green-600 mt-1">+3% vs mes anterior</div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Gráfico de visitas mensuales */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Visitas Mensuales</h2>
              <div className="space-y-3">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 text-sm text-gray-600">{data.month}</div>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-blue-600 h-4 rounded-full" 
                          style={{ width: `${(data.visits / 40) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-sm text-gray-900 text-right">{data.visits}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clientes por región */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Clientes por Región</h2>
              <div className="space-y-3">
                {clientsByRegion.map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-indigo-600 rounded mr-3"></div>
                      <span className="text-sm text-gray-900">{region.region}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">{region.clients}</span>
                      <span className="text-xs text-gray-500">({region.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Productos más vendidos */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Productos Más Vendidos</h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.sales} unidades vendidas</div>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      €{product.revenue.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividad reciente */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Actividad Reciente</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                      <div className="text-xs text-gray-500">{activity.client} • {activity.date}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {activity.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}