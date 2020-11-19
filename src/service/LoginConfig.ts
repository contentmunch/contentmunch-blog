const OKTA_DOMAIN = 'auth.contentmunch.com';
const CLIENT_ID = '0oakabbaYBaBrYgFf5d5';
export const CALLBACK_PATH = '/implicit/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const HOST = window.location.host;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;

export const config = {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
};