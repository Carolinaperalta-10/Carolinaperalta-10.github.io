let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(4000)
  .typeString('<span style="color:#af4b80;">Desarrollo sitios web.</span>')
  .pauseFor(500)
  .deleteChars(10)
  .start();
