module.exports = (email, token) => {
  return `
    <html>
      <body>
        <h3>Thank you for joining!</h3>
        <p>
          Please confirm your account within 24
          hours using the link below.
        </p>
        <a href="localhost:4000/validated?email=${email}&token=${token}">
          Validate my account.
        </a>
        <p>
          If the link has expired, you can request a new token using the
          link below.
        </p>
        <a href="localhost:4000/request_new_token?email=${email}">
          Request new token.
        </a>
      </body>
    </html>
  `
}
