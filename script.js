document.getElementById('anio').textContent = new Date().getFullYear();

// Formulario: abre el cliente de correo con el mensaje preparado.
// Para recibir mensajes sin cliente de correo, usa un servicio como Formspree.
const EMAIL = 'samuelgarciacabrera32@gmail.com';
const form = document.getElementById('form');
const estado = document.getElementById('estado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const ok = d.nombre.trim() && /\S+@\S+\.\S+/.test(d.email) && d.mensaje.trim();
  estado.className = ok ? '' : 'error';
  if (!ok) { estado.textContent = 'Rellena tu nombre, un email válido y el mensaje.'; return; }
  const asunto = encodeURIComponent('Contacto desde tu portfolio: ' + d.nombre);
  const cuerpo = encodeURIComponent(d.mensaje + '\n\n' + d.nombre + ' (' + d.email + ')');
  estado.textContent = 'Abriendo tu aplicación de correo…';
  window.location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;
});
