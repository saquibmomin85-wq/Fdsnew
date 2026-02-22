import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '../lib/supabase';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const bookingSchema = z.object({
  customer_name: z.string().min(2, 'Name is required'),
  mobile_number: z.string().min(10, 'Valid mobile number is required'),
  email: z.string().email('Valid email is required'),
  pickup_location: z.string().min(5, 'Pickup location is required'),
  drop_location: z.string().min(5, 'Drop location is required'),
  item_type: z.enum(['Small parcel', 'Heavy item', 'Document', 'Other']),
  vehicle_type: z.enum(['Car', 'Motorcycle', 'Van']),
  payment_type: z.enum(['Card Machine', 'Payment Link', 'Cash on Delivery']),
  instructions: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      item_type: 'Small parcel',
      vehicle_type: 'Motorcycle',
      payment_type: 'Cash on Delivery',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Check if Supabase is configured
      if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('your-project-id')) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      }

      const { error } = await supabase
        .from('bookings')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Received!</h3>
        <p className="text-green-700 mb-6">
          Thank you for choosing FDS. We have received your delivery request and will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Book Another Delivery
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Contact Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              {...register('customer_name')}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="John Doe"
            />
            {errors.customer_name && <p className="text-red-500 text-sm mt-1">{errors.customer_name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
            <input
              {...register('mobile_number')}
              type="tel"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="+1 234 567 8900"
            />
            {errors.mobile_number && <p className="text-red-500 text-sm mt-1">{errors.mobile_number.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Locations</h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Pickup Location</label>
            <textarea
              {...register('pickup_location')}
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Enter full pickup address"
            />
            {errors.pickup_location && <p className="text-red-500 text-sm mt-1">{errors.pickup_location.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Drop Location</label>
            <textarea
              {...register('drop_location')}
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Enter full drop address"
            />
            {errors.drop_location && <p className="text-red-500 text-sm mt-1">{errors.drop_location.message}</p>}
          </div>
        </div>
      </div>

      {/* Shipment Details */}
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-semibold text-slate-900 border-b pb-2">Shipment Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Item Type</label>
            <select
              {...register('item_type')}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            >
              <option value="Small parcel">Small parcel</option>
              <option value="Heavy item">Heavy item</option>
              <option value="Document">Document</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Type</label>
            <select
              {...register('vehicle_type')}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            >
              <option value="Motorcycle">Motorcycle</option>
              <option value="Car">Car</option>
              <option value="Van">Van</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Payment Type</label>
            <select
              {...register('payment_type')}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Card Machine">Card Machine</option>
              <option value="Payment Link">Payment Link</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Other Instructions</label>
          <textarea
            {...register('instructions')}
            rows={3}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            placeholder="Any specific instructions for the driver..."
          />
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Book Delivery'
        )}
      </button>
    </form>
  );
}
