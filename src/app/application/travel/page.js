"use client";
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function TravelPreferences() {
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    saveToLocalStorage("travel", data);
    console.log(data); // Save data if needed
    router.push('/application/health'); // Navigate to the next stage
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Travel Preferences</h1>
      <label>Departure Date:</label>
      <input type="date" {...register("departureDate", { required: true })} />
      <label>Return Date:</label>
      <input type="date" {...register("returnDate", { required: true })} />
      <button type="button" onClick={() => router.back()}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
}
