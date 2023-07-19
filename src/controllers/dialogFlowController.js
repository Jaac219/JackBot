const dialogflow = require('dialogflow');
const uuid = require('uuid');

const { 
  project_id: projectId,
  client_email,
  private_key
} = require('../config/devkey');

const credentials = {
  client_email,
  private_key
}
const sessionId = uuid.v4();
const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });

const textQuery = async (userText)=>{
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userText,
        languageCode: 'es-419'
      }
    }
  }

  try{
    const response = await sessionClient.detectIntent(request)
    console.log(response[0].queryResult);
    return response
  }catch(e){
    console.log(e);
  }
}

textQuery('Necesito información sobre el producto celular')

