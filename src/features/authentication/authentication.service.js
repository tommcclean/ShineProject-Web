import axios from 'axios';

export default {
  signIn(emailAddress, password) {
    return axios.post(`/authentication/signin`, {
        emailAddress: emailAddress,
        password: password
      })
      .then(response => response.data);
  },
  register(givenName, familyName, emailAddress, password) {
    return axios.post(`/userprofiles`, {
        givenName: givenName,
        familyName: familyName,
        emailAddress: emailAddress,
        password: password,
        profilePicturePath: `${
            process.env.VUE_APP_STORAGE_BASE_URL
          }/productimages/medium-avatar.png`
      })
      .then(response => response.data);
  },
  isAuthorisationExpired(authenticationExpiry) {
    let expirationDateTime = new Date(authenticationExpiry);
    let currentDateTime = new Date();

    var isExpired = expirationDateTime < currentDateTime;
    return isExpired;
  },
  changePasswordTokenRequest(emailAddress) {
    return axios.post(`/userprofiles/requestToken`, {
      emailAddress: emailAddress
    });
  },
  completePasswordRequest(emailAddress, password, token) {
    return axios.post(`/userprofiles/changepassword`, {
      emailAddress: emailAddress,
      password: password,
      token: token
    });
  }
}