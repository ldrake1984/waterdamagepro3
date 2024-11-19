import axios from 'axios';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsLXlQddRSdYqih45tC0Z1IzErjDjXzB8HeJtgpAmcX6PVuf6aY4IqTxqPi2Z3tEc/exec';

export interface QuoteFormData {
  name: string;
  email: string;
  state: string;
  city: string;
  details: string;
}

export const submitQuoteForm = async (formData: QuoteFormData): Promise<void> => {
  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      details: formData.details,
      source: 'Water Damage Pro Lead',
      timestamp: new Date().toISOString()
    };

    // Using fetch with no-cors mode to handle CORS restrictions
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    // Since no-cors mode doesn't return readable response
    // We'll consider the submission successful if it doesn't throw
    return;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Form submission failed: ${error.message}`);
    }
    throw new Error('Form submission failed');
  }
};