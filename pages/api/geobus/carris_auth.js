/* * */
/* RETURN CARRIS API CREDENTIALS */
/* This route returns updated credentials for Carris API, */
/* to be used by the GeoBus app, avoiding the delay of an App Store submission. */
/* * */

export default async function carrisApiCredentials(req, res) {
  const fbUrl = `https://firebaseremoteconfig.googleapis.com/v1/projects/carris-planeador-de-viagem/namespaces/firebase:fetch?key=${carris.api_key}`
  let opt = {
    method: 'POST',
    body: JSON.stringify({
      app_instance_id: "id",
      app_id: carris.ios_app_id
    })
  }
  const fbRes = await fetch(url, opt);
  const json = await fbRes.json();
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
