/* * */
/* RETURN CARRIS API CREDENTIALS */
/* This route returns updated credentials for Carris API, */
/* to be used by the GeoBus app, avoiding the delay of an App Store submission. */
/* * */

export default async function carrisApiCredentials(req, res) {
  return new Promise((resolve, reject) => {
    res.statusCode = 200;
    res.send({
      endpoint: 'gateway.carris.pt',
      token: '3f60e57564680d61a862dde4652d1579023cf862b6c9e2bbc6803d5a57195380',
      type: 'apikey',
    });
    resolve();
  });
}
