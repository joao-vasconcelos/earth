/* * */
/* RETURN CARRIS API CREDENTIALS */
/* This route returns updated credentials for Carris API, */
/* to be used by the GeoBus app, avoiding the delay of an App Store submission. */
/* * */

export default async function carrisApiCredentials(req, res) {
  const carris = {
    api_key: process.env.CARRIS_FIREBASE_API_KEY,
    ios_app_id: process.env.CARRIS_IOS_APP_ID,
  };
  const fbrcUrl = `https://firebaseremoteconfig.googleapis.com/v1/projects/carris-planeador-de-viagem/namespaces/firebase:fetch?key=${carris.api_key}`;
  let opt = {
    method: 'POST',
    body: JSON.stringify({
      app_instance_id: 'id',
      app_id: carris.ios_app_id,
    }),
  };
  const fbrcRes = await fetch(fbrcUrl, opt);
  const json = await fbrcRes.json();
  return new Promise((resolve, reject) => {
    res.statusCode = 200;
    res.send({
      endpoint: 'gateway.carris.pt',
      token: json.entries.apikey_ios,
      type: 'apikey',
    });
    resolve();
  });
}
