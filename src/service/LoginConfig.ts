const CLIENT_ID = '0oakabbaYBaBrYgFf5d5';
export const CALLBACK_PATH = '/implicit/callback';
const ISSUER = `https://auth.contentmunch.com/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `https://${HOST}${CALLBACK_PATH}`;
const DEV_REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;

export const config = {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: process.env.NODE_ENV && process.env.NODE_ENV === "development" ? DEV_REDIRECT_URI : REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
};