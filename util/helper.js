
export const checkPersonalDetailsSelectError = (data, setError, seterror) => {
	if(data?.course == 'Select Your Course'){
		setError('course', {
			type: 'required', message: 'This field is required' }, { shouldFocus: true
		})
	}

	if(data?.year == 'Select Your Year'){
    setError('year',{
      type: 'required', message: 'This field is required' }, { shouldFocus: true
    })
  }

	if(data?.department == 'Select Your Department'){
    setError('department',{
		  type: 'required', message: 'This field is required' }, { shouldFocus: true
	  })
  }
}


export const checkEventsSelectError = (data, setError) => {
	data?.off_stage_event_1 == 'Select The Events' && setError('off_stage_event_1',{
		type: 'required', message: 'This field is required' }, { shouldFocus: true
	})
}