// Example: Check token expiration before using it

function isTokenExpired(token) {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    console.log(payload)
    const expiryTime = payload.exp * 1000; // convert to ms
    return Date.now() > expiryTime;
  } catch (e) {
    return true; // if anything goes wrong, treat as expired
  }
}

const token = localStorage.getItem('token');
if (!token || isTokenExpired(token)) {
  localStorage.removeItem('token'); // Clean it up
  console.log("token is removed")
  window.location.href = '/frontend/html/login.html'; // Redirect to login
}
