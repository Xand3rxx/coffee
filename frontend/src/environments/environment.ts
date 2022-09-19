/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "http://127.0.0.1:5000", // the running FLASK api server url
  auth0: {
    // url: process.env.URL, // the auth0 domain prefix
    // audience: process.env.AUDIENCE, // the audience set for the auth0 app
    // clientId: process.env.CLIENT_ID, // the client id generated for the auth0 app
    url: "xand3rx.us", // the auth0 domain prefix
    audience: "drinks", // the audience set for the auth0 app
    clientId: "h9DNnW11UN6YWCtIvWuSbzND9A9FiqvY", // the client id generated for the auth0 app

    // callbackURL: "http://localhost:8100", // the base url of the running ionic application.
    callbackURL: "http://localhost:4200", // the base url of the running ionic application.
  },
};
