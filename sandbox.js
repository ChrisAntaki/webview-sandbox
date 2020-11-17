function log(message) {
  console.log(message);
  const el = document.createElement('div');
  el.innerText = message + ` (${new Date().toISOString().split('T')[1]})`;
  document.body.appendChild(el);
}
