const CLIENT_ID = '0oakabbaYBaBrYgFf5d5';
export const CALLBACK_PATH = '/implicit/callback';
const ISSUER = `https://auth.contentmunch.com/oauth2/default`;
const HOST = window.location.host;
const PROTOCOL = window.location.protocol;
const REDIRECT_URI = `${PROTOCOL}//${HOST}${CALLBACK_PATH}`;

export const config = {
    issuer: ISSUER,
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
};