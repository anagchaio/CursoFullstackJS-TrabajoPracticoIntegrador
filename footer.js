let div = document.createElement('div');
div.setAttribute('class', 'row justify-content-center');
div.innerHTML = `
    <div class="row justify-content-center">
      <div class="col"></div>
      <div class="col">
        <a href="#">Preguntas<br> frecuentes</a>
      </div>
      <div class="col">
        <a href="#">Contáctanos</a>
      </div>
      <div class="col">
        <a href="#">Prensa</a>
      </div>
      <div class="col">
        <a href="#">Conferencias</a>
      </div>
      <div class="col">\
        <a href="#">Términos y<br> condiciones</a>
      </div>
      <div class="col">\
        <a href="#">Privacidad</a>
      </div>
      <div class="col">
        <a href="#">Estudiantes</a>
      </div>
      <div class="col"></div>
    </div>`;

  document.getElementById("footer").appendChild(div);
