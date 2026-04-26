
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Trash2, Edit2, Save, X, LayoutDashboard, MapPin, 
  Package, Image as ImageIcon, Star, Clock, Tag, ChevronDown, ChevronUp, Check,
  Car as CarIcon
} from 'lucide-react';
import { 
  fetchDestinations, saveDestination, deleteDestination, 
  fetchPackages, savePackage, deletePackage,
  fetchCars, saveCar, deleteCar
} from '../utils/api';
import { normalizeImagePath } from '../utils/travelImages';
import { Destination, Tour, Car } from '../types';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'destinations' | 'packages' | 'cars'>('destinations');
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [packages, setPackages] = useState<Tour[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Form states
  const [destForm, setDestForm] = useState<Partial<Destination>>({});
  const [pkgForm, setPkgForm] = useState<Partial<Tour>>({});
  const [carForm, setCarForm] = useState<Partial<Car>>({});

  const [dbStatus, setDbStatus] = useState<'connected' | 'error' | 'checking'>('checking');

  useEffect(() => {
    loadData();
    checkDbStatus();
  }, []);

  async function checkDbStatus() {
    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      if (data.status === 'ok') setDbStatus('connected');
      else setDbStatus('error');
    } catch {
      setDbStatus('error');
    }
  }

  async function loadData() {
    setLoading(true);
    try {
      const [d, p, c] = await Promise.all([fetchDestinations(), fetchPackages(), fetchCars()]);
      setDestinations(d);
      setPackages(p);
      setCars(c);
    } catch (err) {
      console.error(err);
      setMessage({ type: 'error', text: 'Failed to load data from database' });
    } finally {
      setLoading(false);
    }
  }

  const handleSaveDest = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dest = {
        ...destForm,
        id: destForm.id || `dest_${Date.now()}`,
        tourCount: Number(destForm.tourCount) || 0
      } as Destination;
      await saveDestination(dest);
      setMessage({ type: 'success', text: 'Destination saved successfully' });
      setDestForm({});
      setEditingId(null);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to save destination' });
    }
  };

  const handleSavePkg = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const pkg = {
        ...pkgForm,
        id: pkgForm.id || `pkg_${Date.now()}`,
        price: Number(pkgForm.price) || 0,
        rating: Number(pkgForm.rating) || 5,
        reviews: Number(pkgForm.reviews) || 0,
        isPopular: !!pkgForm.isPopular,
        searchPlaces: Array.isArray(pkgForm.searchPlaces) ? pkgForm.searchPlaces : (pkgForm.searchPlaces as string || '').split(',').map(s => s.trim()).filter(Boolean),
        highlights: Array.isArray(pkgForm.highlights) ? pkgForm.highlights : (pkgForm.highlights as string || '').split('\n').map(s => s.trim()).filter(Boolean),
        inclusions: Array.isArray(pkgForm.inclusions) ? pkgForm.inclusions : (pkgForm.inclusions as string || '').split('\n').map(s => s.trim()).filter(Boolean),
        exclusions: Array.isArray(pkgForm.exclusions) ? pkgForm.exclusions : (pkgForm.exclusions as string || '').split('\n').map(s => s.trim()).filter(Boolean),
        gallery: Array.isArray(pkgForm.gallery) ? pkgForm.gallery : (pkgForm.gallery as string || '').split('\n').map(s => s.trim()).filter(Boolean),
      } as Tour;
      await savePackage(pkg);
      setMessage({ type: 'success', text: 'Package saved successfully' });
      setPkgForm({});
      setEditingId(null);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to save package' });
    }
  };

  const handleSaveCar = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const car = {
        ...carForm,
        id: carForm.id || `car_${Date.now()}`,
        seats: Number(carForm.seats) || 4,
        bags: Number(carForm.bags) || 2,
        pricePerKm: Number(carForm.pricePerKm) || 0,
        isAvailable: carForm.isAvailable !== false,
        features: Array.isArray(carForm.features) ? carForm.features : (carForm.features as string || '').split(',').map(s => s.trim()).filter(Boolean),
      } as Car;
      await saveCar(car);
      setMessage({ type: 'success', text: 'Car rental saved successfully' });
      setCarForm({});
      setEditingId(null);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to save car' });
    }
  };

  const handleDeleteDest = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this destination?')) return;
    try {
      await deleteDestination(id);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete' });
    }
  };

  const handleDeletePkg = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;
    try {
      await deletePackage(id);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete' });
    }
  };

  const handleDeleteCar = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;
    try {
      await deleteCar(id);
      loadData();
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <LayoutDashboard className="w-8 h-8 text-blue-600" />
              Admin Control Panel
              <span className={`ml-4 text-xs px-2 py-1 rounded-full flex items-center gap-1 font-medium ${
                dbStatus === 'connected' ? 'bg-green-100 text-green-700' : 
                dbStatus === 'error' ? 'bg-red-100 text-red-700' : 
                'bg-gray-100 text-gray-500'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  dbStatus === 'connected' ? 'bg-green-500 animate-pulse' : 
                  dbStatus === 'error' ? 'bg-red-500' : 
                  'bg-gray-400'
                }`} />
                {dbStatus === 'connected' ? 'Database Connected' : 
                 dbStatus === 'error' ? 'Database Error' : 
                 'Checking Database...'}
              </span>
            </h1>
            <p className="text-gray-600 mt-1">Manage your website's dynamic content</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-2">
            {[
              { id: 'destinations', label: 'Destinations' },
              { id: 'packages', label: 'Packages' },
              { id: 'cars', label: 'Car Rentals' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center justify-between ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
            <span className="flex items-center gap-2">
              {message.type === 'success' ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              {message.text}
            </span>
            <button onClick={() => setMessage(null)} className="hover:opacity-75">
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {activeTab === 'destinations' ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-28">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-blue-600" />
                  {editingId ? 'Edit Destination' : 'Add New Destination'}
                </h2>
                <form onSubmit={handleSaveDest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      required
                      value={destForm.name || ''} 
                      onChange={e => setDestForm({...destForm, name: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Rajasthan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input 
                      type="text" 
                      required
                      value={destForm.image || ''} 
                      onChange={e => setDestForm({...destForm, image: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tours Region (State/Area)</label>
                    <input 
                      type="text" 
                      required
                      value={destForm.toursRegion || ''} 
                      onChange={e => setDestForm({...destForm, toursRegion: e.target.value})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Rajasthan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package Count (Number)</label>
                    <input 
                      type="number" 
                      value={destForm.tourCount || 0} 
                      onChange={e => setDestForm({...destForm, tourCount: Number(e.target.value)})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="pt-2 flex gap-2">
                    <button type="submit" className="flex-grow bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Save className="w-4 h-4" />
                      {editingId ? 'Update' : 'Save'}
                    </button>
                    {editingId && (
                      <button 
                        type="button" 
                        onClick={() => {setEditingId(null); setDestForm({});}}
                        className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Destination</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Region</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Count</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {destinations.map(dest => (
                      <tr key={dest.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={normalizeImagePath(dest.image)} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <span className="font-semibold text-gray-900">{dest.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{dest.toursRegion}</td>
                        <td className="px-6 py-4 text-gray-600">{dest.tourCount || 0}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => {setEditingId(dest.id); setDestForm(dest);}}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteDest(dest.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : activeTab === 'packages' ? (
          <div className="space-y-8">
            {/* Package Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                {editingId ? 'Edit Package' : 'Add New Tour Package'}
              </h2>
              <form onSubmit={handleSavePkg} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input 
                    type="text" required
                    value={pkgForm.title || ''} 
                    onChange={e => setPkgForm({...pkgForm, title: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Grand Rajasthan Tour"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input 
                    type="text" required
                    value={pkgForm.location || ''} 
                    onChange={e => setPkgForm({...pkgForm, location: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Rajasthan, India"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (INR)</label>
                  <input 
                    type="number" required
                    value={pkgForm.price || ''} 
                    onChange={e => setPkgForm({...pkgForm, price: Number(e.target.value)})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input 
                    type="text" required
                    value={pkgForm.duration || ''} 
                    onChange={e => setPkgForm({...pkgForm, duration: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="7 Days / 6 Nights"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input 
                    type="text" required
                    value={pkgForm.category || ''} 
                    onChange={e => setPkgForm({...pkgForm, category: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Adventure, Honeymoon, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Region (for filtering)</label>
                  <input 
                    type="text" required
                    value={pkgForm.searchRegion || ''} 
                    onChange={e => setPkgForm({...pkgForm, searchRegion: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Rajasthan"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input 
                    type="text" required
                    value={pkgForm.image || ''} 
                    onChange={e => setPkgForm({...pkgForm, image: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="flex items-center mt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={pkgForm.isPopular || false}
                      onChange={e => setPkgForm({...pkgForm, isPopular: e.target.checked})}
                      className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Mark as Popular</span>
                  </label>
                </div>

                <div className="lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    value={pkgForm.description || ''} 
                    onChange={e => setPkgForm({...pkgForm, description: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                  />
                </div>

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                    <input type="number" min="1" max="5" step="0.1" value={pkgForm.rating || 5} onChange={e => setPkgForm({...pkgForm, rating: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Reviews Count</label>
                    <input type="number" value={pkgForm.reviews || 0} onChange={e => setPkgForm({...pkgForm, reviews: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Search Keywords (comma separated)</label>
                    <input 
                      type="text" 
                      value={Array.isArray(pkgForm.searchPlaces) ? pkgForm.searchPlaces.join(', ') : pkgForm.searchPlaces || ''} 
                      onChange={e => setPkgForm({...pkgForm, searchPlaces: e.target.value as any})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Jaipur, Udaipur, Jodhpur"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Highlights (one per line)</label>
                    <textarea 
                      value={Array.isArray(pkgForm.highlights) ? pkgForm.highlights.join('\n') : pkgForm.highlights || ''} 
                      onChange={e => setPkgForm({...pkgForm, highlights: e.target.value as any})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Image URLs (one per line)</label>
                    <textarea 
                      value={Array.isArray(pkgForm.gallery) ? pkgForm.gallery.join('\n') : pkgForm.gallery || ''} 
                      onChange={e => setPkgForm({...pkgForm, gallery: e.target.value as any})}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
                    />
                  </div>
                </div>

                <div className="lg:col-span-3 flex justify-end gap-3 pt-4 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={() => {setEditingId(null); setPkgForm({});}}
                    className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Clear Form
                  </button>
                  <button type="submit" className="px-8 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    {editingId ? 'Update Package' : 'Publish Package'}
                  </button>
                </div>
              </form>
            </div>

            {/* Packages List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Package</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Region</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600">Duration</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {packages.map(pkg => (
                      <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={normalizeImagePath(pkg.image)} alt="" className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                              <div className="font-semibold text-gray-900">{pkg.title}</div>
                              <div className="text-xs text-gray-500">{pkg.location}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium">
                            {pkg.searchRegion}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">₹{pkg.price}</td>
                        <td className="px-6 py-4 text-gray-600">{pkg.duration}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => {setEditingId(pkg.id); setPkgForm(pkg); window.scrollTo({ top: 300, behavior: 'smooth' });}}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeletePkg(pkg.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Car Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CarIcon className="w-5 h-5 text-blue-600" />
                {editingId ? 'Edit Car Rental' : 'Add New Car for Rent'}
              </h2>
              <form onSubmit={handleSaveCar} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
                  <input type="text" required value={carForm.model || ''} onChange={e => setCarForm({...carForm, model: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Toyota Innova Crysta" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type (Description)</label>
                  <input type="text" required value={carForm.type || ''} onChange={e => setCarForm({...carForm, type: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Premium SUV Cab" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={carForm.category || 'SUV'} onChange={e => setCarForm({...carForm, category: e.target.value as any})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
                  <select value={carForm.transmission || 'Manual'} onChange={e => setCarForm({...carForm, transmission: e.target.value as any})} className="w-full px-4 py-2 border rounded-lg">
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seats</label>
                  <input type="number" value={carForm.seats || 4} onChange={e => setCarForm({...carForm, seats: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bags</label>
                  <input type="number" value={carForm.bags || 2} onChange={e => setCarForm({...carForm, bags: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Per KM (₹)</label>
                  <input type="number" value={carForm.pricePerKm || 0} onChange={e => setCarForm({...carForm, pricePerKm: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input type="text" required value={carForm.image || ''} onChange={e => setCarForm({...carForm, image: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div className="lg:col-span-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                  <input type="text" value={Array.isArray(carForm.features) ? carForm.features.join(', ') : carForm.features || ''} onChange={e => setCarForm({...carForm, features: e.target.value as any})} className="w-full px-4 py-2 border rounded-lg" placeholder="Air Conditioning, Bluetooth, GPS" />
                </div>
                <div className="lg:col-span-3 flex justify-end gap-3 pt-4 border-t">
                  <button type="button" onClick={() => {setEditingId(null); setCarForm({});}} className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg">Clear</button>
                  <button type="submit" className="px-8 py-2 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    {editingId ? 'Update Car' : 'Save Car'}
                  </button>
                </div>
              </form>
            </div>

            {/* Cars List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Car Model</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">Price/KM</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cars.map(car => (
                    <tr key={car.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={normalizeImagePath(car.image)} alt="" className="w-12 h-10 rounded-lg object-cover" />
                          <div>
                            <div className="font-semibold text-gray-900">{car.model}</div>
                            <div className="text-xs text-gray-500">{car.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{car.category}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">₹{car.pricePerKm}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => {setEditingId(car.id); setCarForm(car); window.scrollTo({ top: 300, behavior: 'smooth' });}} className="p-2 text-blue-600"><Edit2 className="w-4 h-4" /></button>
                          <button onClick={() => handleDeleteCar(car.id)} className="p-2 text-red-600"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
