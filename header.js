let list = document.createElement('ul');
list.setAttribute('class', 'navbar-nav navbar-expand-lg text-light bg-dark');
header.innerHTML = `<ul class="navbar-nav navbar-expand-lg text-light bg-dark">
<li class="nav-item ml-lg-5 my-auto">
  <a class="nav-item ml-lg-5 my-auto" href="https://www.buenosaires.gob.ar/educacion/codo-codo" target="_blank">
    <image class="nav-item ml-lg-5 my-auto" id="img_logo" src="./images/codoacodo.png" alt="Codo a Codo logo"></image>
  </a>
</li>
<li class="nav-item  my-auto mx-lg-2">
  <a href="index.html" class="nav-link h3 text-white">Conf Bs As</a>
</li>
<li class="nav-item  my-auto mx-auto"></li>
</li>
<li class="nav-item  my-auto mx-lg-2">
  <a href="#" class="nav-link">La conferencia</a>
</li>
<li class="nav-item  my-auto mx-lg-2">
  <a href="#cards" class="nav-link">Los oradores</a>
</li>
<li class="nav-item  my-auto mx-lg-2">
  <a href="#beach" class="nav-link">El lugar y la fecha</a>
</li>
<li class="nav-item  my-auto mx-lg-2">
  <a href="#registration" class="nav-link">Conviértete en orador</a>
</li>
<li class="nav-item  my-auto mx-lg-2 mr-lg-5">
  <a href="ticket.html" id="link_comprarTickets" class="nav-link">Comprar Tickets</a>
</li>
</ul>`;

document.getElementById("header").appendChild(list);
