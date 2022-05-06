import Error from "./Error";

export default function Select({name, values, register, required, error}){

  return(
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col items-center space-x-8">
        <div className='flex justify-start items-center space-x-2' >
          <select  className='input' {...register(name, { 
            required: required
            })} >
            { values?.map((item,index)=> 
                <option value={item} key={item} disabled={index == 0 && true} selected={index == 0 && true} 
                  hidden={index == 0 && true} >
                  {item}
                </option>
            )}
          </select>
        </div>
      </div>
      {error && error?.message?.length > 0 ? <Error error={error} /> : <div className='w-5 h-5 '/>}        
    </div>
  )
}