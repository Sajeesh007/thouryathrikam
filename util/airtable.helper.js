import axios from 'axios'

export const fetchByEmail = async (email, setdata, seterror, setloading) => {

    setloading(true)
    const filter = `Email = '${email}'`
    const baseId = 'appfSdkCcFasqU7ad'

    await axios.get(`https://api.airtable.com/v0/${baseId}/offstage?filterByFormula=${encodeURIComponent(filter)}`, {
        headers: {
        'Authorization': 'Bearer ' + process.env.AIRTABLE_API_KEY
        },
    }).then(async (res) => {
        res.data.records.length == 0 && seterror(true)
        setdata(res?.data?.records[0]?.fields)
    }).catch((e)=>
        seterror(true)
    ).finally(()=>
        setloading(false)
    )
  
}
  