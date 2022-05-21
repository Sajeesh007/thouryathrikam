import { google } from "googleapis";
import NextCors from 'nextjs-cors';

export default async function handler(req,res){

  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
  })

  const { body : { data } } = req

  const id = { 
    offstage: '1hpm8b2IPjNS7g9Cyi2zjOlGsaZs6Yot20JN-GTgAPNQ',
    onstage: '1RxZ-aSqdxZk-rrsjbcZ5sUIXdjZ7X31iEYlEYuTRwi8' 
  }
  const spreadsheetId = data?.type == 'on_stage' ? id.onstage : id.offstage

  // deleting key of type
  delete data.type

  const scopes = ['https://www.googleapis.com/auth/spreadsheets','https://www.googleapis.com/auth/drive']
  // const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY)

  //auth
  try{
    const auth = new google.auth.GoogleAuth({
      scopes: scopes,
      projectId: process.env.GOOGLE_PROJECTID,
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
    })

    const authToken  = await auth.getClient()
    //sheets
    const date = new Date()
    const val = Object.values(data)
    const sheets = google.sheets({version: 'v4',auth: authToken})
    const values = [[date.toUTCString(),...val]]

    try{
        sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range:'Sheet1!A1',
        valueInputOption: 'RAW',
        resource: {
          values
        }
      })
      res.status(200).json({message : 'Your response has been recorded successfully'})
    } catch(e){
      res.status(404).json({message : 'Unable to process the request, press continue and please try again'})
    }
  } catch(e) {
    res.status(404).json({message : 'Unable to process the request, press continue and please try again'})
  }

}
