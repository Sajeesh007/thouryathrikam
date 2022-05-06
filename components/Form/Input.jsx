import Error from "./Error";

export default function Input({label, htmlFor, error, required, register}){

  return(
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col ">
        <input type='text' placeholder={label} {...register(htmlFor, { required: required && 'This field is required' })}
          className='input'/>
      </div>
      {error ? <Error error={error} /> : <div className='w-5 h-5'/>}
      </div>
  )
}