const root = document.getElementById('root');

const message = document.createElement('div');
message.className = "message";
message.innerHTML = `
  <h2>Hello from Webpack + Babel!</h2>
  <p>This content was injected by JavaScript.</p>
  <button id="clickMe">Click me</button>
`;
root.appendChild(message);

const name = 'Berry';
const welcome = document.createElement('div');
welcome.className = "welcome";
welcome.innerHTML = `Welcome to ${name}'s webpack tutorial!`;
root.appendChild(welcome);

document.getElementById('clickMe').addEventListener('click', () => {
  alert('Button clicked!');
});

