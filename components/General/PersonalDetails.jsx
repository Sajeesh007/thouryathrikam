
export default function PersonalDetails({name, email, year, dept}) {
  return (
    <div className='flex flex-col space-y-2 w-full px-4 py-2 bg-green-500 rounded-lg'>
        <div className='flex justify-between'>
            <h4>Personal Details</h4>
            <button className='px-2 py-1 bg-green-700 rounded-lg font-bold'>Edit</button>
        </div>
        <div className='flex flex-col w-full' >
            <p className='w-full break-all'><span className='font-bold'>Name :&nbsp; </span>{name}</p>
            <p className='w-full break-all'><span className='font-bold'>Email :&nbsp; </span>{email}</p>
            <p className='w-full break-all'><span className='font-bold'>Year :&nbsp; </span>{year}</p>
            <p className='w-full break-all'><span className='font-bold'>Department :&nbsp; </span>{dept}</p>
        </div>

    </div>
  )
}
