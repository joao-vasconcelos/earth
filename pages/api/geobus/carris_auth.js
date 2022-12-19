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
      token: '20e369b30288f6c8c0584a875ea7ad5871c7cd424ef9edf989f8a4aba8a645e0',
      type: 'apikey',
    });
    resolve();
  });
}
