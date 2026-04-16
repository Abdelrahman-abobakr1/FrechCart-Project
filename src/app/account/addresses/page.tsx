'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, MapPin, Settings as SettingsIcon, ChevronRight, Pencil, Trash2, Plus, Phone, Building2, X } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { getAddresses, addAddress, deleteAddress, updateAddress } from './addresses.action';

type Address = {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
};

type ModalMode = 'add' | 'edit';

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>('add');
  const [editingId, setEditingId] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<{
    name: string; details: string; phone: string; city: string;
  }>();

  const loadAddresses = async () => {
    const data = await getAddresses();
    setAddresses(data);
    setLoading(false);
  };

  useEffect(() => { loadAddresses(); }, []);

  const openAdd = () => {
    setModalMode('add');
    setEditingId(null);
    reset({ name: '', details: '', phone: '', city: '' });
    setModalOpen(true);
  };

  const openEdit = (addr: Address) => {
    setModalMode('edit');
    setEditingId(addr._id);
    reset({ name: addr.name, details: addr.details, phone: addr.phone, city: addr.city });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    const res = await deleteAddress(id);
    if (res.success) {
      setAddresses((prev) => prev.filter((a) => a._id !== id));
      toast.success('Address removed.');
    } else {
      toast.error('Failed to delete address.');
    }
  };

  const onSubmit = async (data: any) => {
    if (modalMode === 'add') {
      const res = await addAddress(data);
      if (res.success) {
        toast.success('Address added!');
        setModalOpen(false);
        loadAddresses();
      } else {
        toast.error(res.message || 'Failed to add address.');
      }
    } else if (editingId) {
      const res = await updateAddress(editingId, data);
      if (res.success) {
        toast.success('Address updated!');
        setModalOpen(false);
        loadAddresses();
      } else {
        toast.error(res.message || 'Failed to update address.');
      }
    }
  };

  return (
    <div className="page-shell bg-[#f3f4f6]">

      <div className="bg-gradient-to-r from-[#0aad0a] to-[#2dc653] py-8 px-4 sm:px-6 lg:px-8">
        <div className="page-container max-w-[1100px]">
          <div className="flex items-center gap-2 text-[12px] text-white/80 mb-5 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">My Account</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
              <User className="w-7 h-7 fill-current" />
            </div>
            <div>
              <h1 className="text-[26px] font-bold text-white tracking-tight">My Account</h1>
              <p className="text-[13px] text-white/80 font-medium mt-0.5">Manage your addresses and account settings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container max-w-[1100px] py-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">

          <div className="w-full md:w-[260px] flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-bold text-[#1e293b] text-[14px] px-2 mb-3 mt-1">My Account</h2>
              <div className="flex flex-col gap-1">
                <Link href="/account/addresses" className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#ecfdf5] transition-colors">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#0aad0a]" />
                    <span className="text-[13.5px] font-bold text-[#0aad0a]">My Addresses</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#0aad0a]/70" />
                </Link>
                <Link href="/account/settings" className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-[13.5px] font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-[19px] font-extrabold text-[#1e293b]">My Addresses</h2>
                <p className="text-[13px] text-gray-500 mt-1">Manage your saved delivery addresses</p>
              </div>
              <button
                onClick={openAdd}
                className="flex-shrink-0 flex items-center gap-2 bg-[#0aad0a] hover:bg-[#088c08] text-white px-4 py-2.5 rounded-xl font-bold text-[13.5px] transition-all shadow-[0_4px_12px_rgba(10,173,10,0.25)]"
              >
                <Plus className="w-4 h-4" strokeWidth={2.5} />
                <span>Add Address</span>
              </button>
            </div>

            {loading ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[#0aad0a]/20 border-t-[#0aad0a] rounded-full animate-spin" />
              </div>
            ) : addresses.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center justify-center gap-3 text-center px-6">
                <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-1">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-[16px] font-bold text-[#1e293b]">No Addresses Yet</h3>
                <p className="text-[13px] text-gray-500 max-w-[280px]">Add your first delivery address to make checkout faster and easier.</p>
                <button
                  onClick={openAdd}
                  className="mt-3 flex items-center gap-2 bg-[#0aad0a] hover:bg-[#088c08] text-white px-6 py-2.5 rounded-xl font-bold text-[13.5px] transition-all shadow-[0_4px_12px_rgba(10,173,10,0.25)]"
                >
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  Add Your First Address
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {addresses.map((address) => (
                  <div key={address._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-[17px] h-[17px] text-[#0aad0a]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1e293b] text-[14.5px]">{address.name}</h3>
                      <p className="text-[13px] text-gray-500 mt-0.5">{address.details}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3">
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[12.5px]">{address.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[12.5px]">{address.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => openEdit(address)}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0aad0a] hover:border-[#0aad0a]/30 hover:bg-green-50 transition-all"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(address._id)}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[520px] p-7">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[18px] font-bold text-[#1e293b]">
                {modalMode === 'add' ? 'Add New Address' : 'Edit Address'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Address Name</label>
                <input
                  type="text"
                  required
                  {...register('name')}
                  placeholder="e.g. Home, Office"
                  className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-2.5 text-[14px] outline-none focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-gray-700">Full Address</label>
                <textarea
                  rows={3}
                  required
                  {...register('details')}
                  placeholder="Street, building, apartment..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-2.5 text-[14px] outline-none focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    {...register('phone')}
                    placeholder="01xxxxxxxxx"
                    className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-2.5 text-[14px] outline-none focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a] transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-700">City</label>
                  <input
                    type="text"
                    required
                    {...register('city')}
                    placeholder="Cairo"
                    className="w-full rounded-lg border border-gray-200 bg-[#f9fafb] px-4 py-2.5 text-[14px] outline-none focus:border-[#0aad0a] focus:ring-1 focus:ring-[#0aad0a] transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="w-full rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 text-[14px] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#0aad0a] hover:bg-[#088c08] disabled:opacity-70 text-white font-bold py-2.5 text-[14px] transition-colors"
                >
                  {isSubmitting ? 'Saving...' : modalMode === 'add' ? 'Add Address' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
