"use client"; // Required for interactive components
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function PersonalForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Save data if needed
    router.push('/application/travel'); // Navigate to the next stage
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Personal Information</h1>
      <label>Full Name:</label>
      <input {...register("fullName", { required: true })} />
      <label>Date of Birth:</label>
      <input type="date" {...register("dob", { required: true })} />
      <label>Nationality:</label>
      <input {...register("nationality", { required: true })} />
      <button type="submit">Next</button>
    </form>
  );
}
