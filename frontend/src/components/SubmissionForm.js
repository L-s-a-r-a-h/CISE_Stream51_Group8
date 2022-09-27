import React, { useState } from "react";
//import * as Yup from 'yup';
import { useForm } from 'react-hook-form';


const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
      <p><input {...register("name")} placeholder="Your name" /></p> 
      <p><input {...register("email")} placeholder="Your email" /></p> 
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;