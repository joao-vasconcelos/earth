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
      token: '1947a1b26468545de0e8f4444effcc2de2eb6660ae677a22d62614bfbf1b630d',
      type: 'apikey',
    });
    resolve();
  });
}
