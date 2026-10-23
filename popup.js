document.getElementById('generate').addEventListener('click', function() {
  const length = 20;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$£%&#@";
  const maxAcceptedValue = Math.floor(256 / charset.length) * charset.length;
  let password = '';

  while (password.length < length) {
      const randomValues = crypto.getRandomValues(new Uint8Array(length - password.length));
      for (const value of randomValues) {
          if (value < maxAcceptedValue) {
              password += charset.charAt(value % charset.length);
              if (password.length === length) break;
          }
      }
  }

  document.getElementById('Password').value = password;
});
document.getElementById('COPY').addEventListener('click', function() {
  const passwordField = document.getElementById('Password');
  passwordField.select();
  document.execCommand('copy');
});
