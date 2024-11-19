import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, User, MapPin, FileText } from 'lucide-react';
import { submitQuoteForm, QuoteFormData } from '../services/api';

interface QuoteFormProps {
  className?: string;
  onSubmitSuccess?: () => void;
}

export default function QuoteForm({ className = '', onSubmitSuccess }: QuoteFormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: QuoteFormData) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await submitQuoteForm(data);
      reset();
      setIsSuccess(true);
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
          <p className="text-gray-600">
            Your quote request has been submitted successfully. We'll be in touch with you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Free Quote</h3>
      
      <div className="space-y-4">
        <div>
          <label className="flex items-center text-gray-700 text-sm font-medium mb-1">
            <User className="w-4 h-4 mr-2" />
            Full Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="flex items-center text-gray-700 text-sm font-medium mb-1">
            <Mail className="w-4 h-4 mr-2" />
            Email Address
          </label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="flex items-center text-gray-700 text-sm font-medium mb-1">
            <MapPin className="w-4 h-4 mr-2" />
            State
          </label>
          <select
            {...register('state', { required: 'State is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select State</option>
            <option value="TX">Texas</option>
            <option value="GA">Georgia</option>
            <option value="CO">Colorado</option>
            <option value="CA">California</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="FL">Florida</option>
            <option value="WA">Washington</option>
            <option value="MD">Maryland</option>
            <option value="NJ">New Jersey</option>
            <option value="UT">Utah</option>
          </select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
        </div>

        <div>
          <label className="flex items-center text-gray-700 text-sm font-medium mb-1">
            <MapPin className="w-4 h-4 mr-2" />
            City/Town
          </label>
          <input
            {...register('city', { required: 'City is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label className="flex items-center text-gray-700 text-sm font-medium mb-1">
            <FileText className="w-4 h-4 mr-2" />
            Service Details
          </label>
          <textarea
            {...register('details', { required: 'Service details are required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
            placeholder="Please describe your water damage situation..."
          />
          {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>}
        </div>

        {submitError && (
          <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
        </button>
      </div>
    </form>
  );
}