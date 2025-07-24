import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function Visits() {
  const [visits, setVisits] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [newVisit, setNewVisit] = useState({
    clientName: '',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    purpose: '',
    address: '',
    status: 'scheduled'
  });

  // Datos de demostración
  useEffect(() => {
    const demoVisits = [
      {
        id: 1,
        clientName: 'María García',
        date: '2025-01-24',
        time: '10:00',
        purpose: 'Presentación de nuevos productos',
        address: 'Calle Mayor 123, Madrid',
        status: 'scheduled',
        notes: 'Cliente interesado en línea anti-edad'
      },
      {
        id: 2,
        clientName: 'Carlos Rodríguez',
        date: '2025-01-24',
        time: '14:30',
        purpose: 'Seguimiento de pedido',
        address: 'Avenida Libertad 45, Barcelona',
        status: 'completed',
        notes: 'Pedido entregado satisfactoriamente'
      },
      {
        id: 3,
        clientName: 'Ana Martínez',
        date: '2025-01-25',
        time: '11:00',
        purpose: 'Demostración de productos',
        address: 'Plaza Central 8, Valencia',
        status: 'scheduled',
        notes: 'Primera visita - cliente potencial'
      }
    ];
    setVisits(demoVisits);
  }, []);

  const handleAddVisit = (e) => {
    e.preventDefault();
    const visit = {
      id: visits.length + 1,
      ...newVisit,
      notes: ''
    };
    setVisits([...visits, visit]);
    setNewVisit({
      clientName: '',
      date: new Date().toISOString().split('T')[0],
      time: '09:00',
      purpose: '',
      address: '',
      status: 'scheduled'
    });
    setShowAddForm(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setVisits(visits.map(visit => 
      visit.id === id ? { ...visit, status: newStatus } : visit
    ));
  };

  const handleDeleteVisit = (id) => {
    setVisits(visits.filter(visit => visit.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'scheduled': return 'Programada';
      case 'completed': return 'Completada';
      case 'cancelled': return 'Cancelada';
      case 'in-progress': return 'En Progreso';
      default: return status;
    }
  };

  const filteredVisits = visits.filter(visit => visit.date === selectedDate);
  const todayVisits = visits.filter(visit => visit.date === new Date().toISOString().split('T')[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Gestión de Visitas</h1>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              + Programar Visita
            </button>
          </div>

          {/* Resumen del día */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600">{todayVisits.length}</div>
              <div className="text-sm text-gray-600">Visitas Hoy</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">
                {visits.filter(v => v.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600">Completadas</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-yellow-600">
                {visits.filter(v => v.status === 'scheduled').length}
              </div>
              <div className="text-sm text-gray-600">Programadas</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-red-600">
                {visits.filter(v => v.status === 'cancelled').length}
              </div>
              <div className="text-sm text-gray-600">Canceladas</div>
            </div>
          </div>

          {/* Formulario de agregar visita */}
          {showAddForm && (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Nueva Visita</h2>
              <form onSubmit={handleAddVisit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                  <input
                    type="text"
                    required
                    value={newVisit.clientName}
                    onChange={(e) => setNewVisit({...newVisit, clientName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                  <input
                    type="date"
                    required
                    value={newVisit.date}
                    onChange={(e) => setNewVisit({...newVisit, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                  <input
                    type="time"
                    required
                    value={newVisit.time}
                    onChange={(e) => setNewVisit({...newVisit, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Propósito</label>
                  <select
                    required
                    value={newVisit.purpose}
                    onChange={(e) => setNewVisit({...newVisit, purpose: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Seleccionar propósito</option>
                    <option value="Presentación de productos">Presentación de productos</option>
                    <option value="Seguimiento de pedido">Seguimiento de pedido</option>
                    <option value="Demostración">Demostración</option>
                    <option value="Entrega de pedido">Entrega de pedido</option>
                    <option value="Reunión comercial">Reunión comercial</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                  <input
                    type="text"
                    required
                    value={newVisit.address}
                    onChange={(e) => setNewVisit({...newVisit, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="md:col-span-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    Programar Visita
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Selector de fecha */}
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Calendario de Visitas</h2>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Lista de visitas del día seleccionado */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Visitas para {selectedDate} ({filteredVisits.length})
              </h2>
            </div>
            {filteredVisits.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500">
                No hay visitas programadas para esta fecha
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredVisits.map((visit) => (
                  <div key={visit.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            {visit.time} - {visit.clientName}
                          </div>
                          <span className={`ml-3 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(visit.status)}`}>
                            {getStatusText(visit.status)}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          <div>{visit.purpose}</div>
                          <div className="text-gray-500">{visit.address}</div>
                          {visit.notes && <div className="mt-1 italic">{visit.notes}</div>}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={visit.status}
                          onChange={(e) => handleStatusChange(visit.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1"
                        >
                          <option value="scheduled">Programada</option>
                          <option value="in-progress">En Progreso</option>
                          <option value="completed">Completada</option>
                          <option value="cancelled">Cancelada</option>
                        </select>
                        <button
                          onClick={() => handleDeleteVisit(visit.id)}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}