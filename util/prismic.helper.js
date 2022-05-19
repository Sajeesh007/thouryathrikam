import axios from 'axios'

export const getAccessToken = async () => {
  const accessToken = await axios.get('https://thouryathrikam.cdn.prismic.io/api/v2')
  return accessToken.data.refs[0].ref
}

export const getEvents = async (ref, type, seteventData) => {
  const eventType = `[at(document.type, "${type}")]`
  await axios.get(`https://thouryathrikam.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[${eventType}]`).then((res) => {
    const data = res?.data?.results[0]?.data?.events.map((item) => item.text)
    seteventData(data)
  }).catch(err => {
    console.log(err)
  })
}