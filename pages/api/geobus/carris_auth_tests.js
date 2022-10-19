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
      token: '0a52a25906428f99a6623da46b7d63da0c5308f56546d66fe13b6d62c1fd79da',
      type: 'apikey',
    });
    resolve();
  });
}
