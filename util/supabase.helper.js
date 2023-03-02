import { supabase } from "supabase";


export const matchEvents = (personalDetails, eventDetails) => {
    eventDetails.forEach(event => {
        if(event.id == personalDetails.event_1){
            personalDetails.cert_1 = `${personalDetails.id}${personalDetails.event_1+10}` 
            personalDetails.event_1 = event.name
        }else if(event.id == personalDetails.event_2){
            personalDetails.cert_2 = `${personalDetails.id}${personalDetails.event_2+10}` 
            personalDetails.event_2 = event.name
        }else if(event.id == personalDetails.event_3){
            personalDetails.cert_3 = `${personalDetails.id}${personalDetails.event_3+10}` 
            personalDetails.event_3 = event.name
        }else if(event.id == personalDetails.event_4){
            personalDetails.cert_4 = `${personalDetails.id}${personalDetails.event_4+10}` 
            personalDetails.event_4 = event.name
        }else if(event.id == personalDetails.event_5){
            personalDetails.cert_5 = `${personalDetails.id}${personalDetails.event_5+10}` 
            personalDetails.event_5 = event.name
        }else if(event.id == personalDetails.event_6){
            personalDetails.cert_6 = `${personalDetails.id}${personalDetails.event_6+10}` 
            personalDetails.event_6 = event.name
        }
    })
    return personalDetails
}

const fetchSingle = async (email, setsingleData, seterror) => {

    const personalDetails = await supabase.from('single_participation').select().eq('Email', email)
    const eventDetails = await supabase.from('single_events').select()
    if (personalDetails?.error || eventDetails?.error) {
        seterror(true)
        return
    }
    const finalDetails = matchEvents(personalDetails?.data[0], eventDetails?.data)
    setsingleData({
        personal_details: finalDetails,
    })

}

const fetchGroup = async (email, setgroupData, seterror) => {

    const personalDetails = await supabase.from('group_participation').select().eq('Email', email)
    const eventDetails = await supabase.from('group_events').select()
    if (personalDetails?.error || eventDetails?.error) {
        seterror(true)
        return
    }
    const finalDetails = matchEvents(personalDetails?.data[0], eventDetails?.data)
    setgroupData({
        personal_details: finalDetails,personalDetails
    })

}

export async function fetchSingleEvents(setsingle){
    const single = await supabase.from('single_events').select()
    setsingle(single.data)
}

export async function fetchGroupEvents(setgroup){
    const group = await supabase.from('group_events').select()
    setgroup(group.data)
}


// const updateEvent = async () => {
//     const part = await supabase.from('group_participation').select('Email,event')
//     const events = await supabase.from('group_events').select()
//     part?.data?.forEach(ele => {
//         const splittedEvents = ele?.event?.split(',')
//         splittedEvents?.forEach(async (event, index) => {
//             let eve
//             events.data.forEach(e => {
//                 if(e.name == event) eve = e.id
//             })
//             const update = {}
//             update[`event_${index+1}`] = eve
//             await supabase.from('group_participation').update(update).eq('Email', ele.Email)
//         });
//     });
// }

export const fetchAllSingleData = async (setdata, setsingle, setloading) => {
    setloading(true)
    const personalDetails = await supabase.from('single_participation').select().order('id', { ascending: true })
    const eventDetails = await supabase.from('single_events').select()
    if (personalDetails?.error || eventDetails?.error) {
        console.log(personalDetails?.error)
        return
    }
    let ar =[]
    personalDetails?.data?.forEach(ele => {
        const finalDetails = matchEvents(ele, eventDetails?.data)
        ar.push(finalDetails)
    })
    setsingle(eventDetails?.data)
    setdata(ar)
    setloading(false)
}

export const fetchAllGroupData = async (setdata, setgroup, setloading) => {
    setloading(true)
    const personalDetails = await supabase.from('group_participation').select()
    const eventDetails = await supabase.from('group_events').select()
    if (personalDetails?.error || eventDetails?.error) {
        console.log(personalDetails?.error)
        return
    }
    let ar =[]
    personalDetails?.data?.forEach(ele => {
        const finalDetails = matchEvents(ele, eventDetails?.data)
        ar.push(finalDetails)
    })
    setgroup(eventDetails?.data)
    setdata(ar)
    setloading(false)
}


export const fetchByEmail = async (email, setsingleData, setgroupData, seterror, setloading) => {
    setloading(true)
    await fetchSingle(email, setsingleData, seterror)
    await fetchGroup(email, setgroupData, seterror)
    setloading(false)
}
  

export async function uploadSign(image, user, router){
    const { data, error } = await supabase.storage
      .from('signature')
      .upload(`${user}.png`, image, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) {
     console.log(error);   
    }else{
        console.log('s');
        router.reload()
    }
}
