document.addEventListener("DOMContentLoaded", function () {
  // Botón de Volver Arriba
  const botonVolverArriba = document.getElementById("botonVolverArriba");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
          botonVolverArriba.style.display = "block";
      } else {
          botonVolverArriba.style.display = "none";
      }
  });
  botonVolverArriba.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });

  // Menú Hamburguesa
  const hamburger = document.querySelector(".hamburger");
  const menubar = document.querySelector(".menubar");
  const nav = document.querySelector("nav");
  hamburger.addEventListener("click", function() {
      menubar.classList.toggle("active");
      hamburger.classList.toggle("hamburger-active");
  });
  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
          nav.classList.add("scrolled");
      } else {
          nav.classList.remove("scrolled");
      }
  });

  // Menús Submenu
  function openSubMenu(menuId) {
      const mainMenu = document.getElementById("main-menu");
      const subMenus = document.querySelectorAll(".submenu");
      mainMenu.style.display = "none";
      subMenus.forEach(menu => menu.classList.remove("active"));
      document.getElementById(menuId).classList.add("active");
  }

  function closeSubMenu() {
      const mainMenu = document.getElementById("main-menu");
      const subMenus = document.querySelectorAll(".submenu");
      mainMenu.style.display = "flex";
      subMenus.forEach(menu => menu.classList.remove("active"));
  }

  // Asignar funciones a nivel global si son necesarias fuera de este scope
  window.openSubMenu = openSubMenu;
  window.closeSubMenu = closeSubMenu;
});
/*javaScript para el estilo de menubar */
document.addEventListener("DOMContentLoaded", function () {
  const menuPrincipal = document.getElementById('menuPrincipal');
  const toggleServicios = document.getElementById('toggleServicios');
  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");

  toggleServicios.addEventListener('click', function (event) {
      event.preventDefault();
      cambiarAMenuServicios();
  });

  mobileNav.addEventListener('click', function () {
      if (!navbar.classList.contains('active')) {
          cambiarAMenuPrincipal();
      }
  });

  function cambiarAMenuPrincipal() {
      menuPrincipal.innerHTML = `
          <a href="index.html" class="menu-link">Inicio</a>
          <a href="#" id="toggleServicios" class="menu-link">Servicios</a>
          <a href="nosotros.html" class="menu-link">Nosotros</a>
          <a href="contactanos.html" class="menu-link">Contáctanos</a>
          <a href="#catalogo" class="menu-link">Catálogo</a>
      `;
      document.getElementById('toggleServicios').addEventListener('click', function (event) {
          event.preventDefault();
          cambiarAMenuServicios();
      });
  }

  function cambiarAMenuServicios() {
      menuPrincipal.innerHTML = `
          <a href="servicios.html" class="menu-link">Todos los Servicios</a>
          <a href="#" id="gestionSistemas" class="menu-link">Implementación de Sistemas</a>
          <a href="#" id="consultoriaSST" class="menu-link">Consultoría en SST</a>
          <a href="#" id="formacion" class="menu-link">Formación y Capacitación</a>
          <a href="#" id="outsourcing" class="menu-link">Outsourcing</a>
          <a href="#" id="toggleSST" class="menu-link">Seguridad y Salud</a>
          <a href="#" id="regresarPrincipal" class="menu-link">Regresar al Menú Principal</a>
      `;
      document.getElementById('toggleSST').addEventListener('click', function (event) {
          event.preventDefault();
          cambiarAMenuSST();
      });
      document.getElementById('regresarPrincipal').addEventListener('click', function (event) {
          event.preventDefault();
          cambiarAMenuPrincipal();
      });
  }

  function cambiarAMenuSST() {
      menuPrincipal.innerHTML = `
          <a href="implementacion.html" class="menu-link">Monitoreos Ocupacionales</a>
          <a href="consultoria.html" class="menu-link">Auditorias</a>
          <a href="consultoria.html" class="menu-link">Consultoría</a>
          <a href="consultoria.html" class="menu-link">Implementación de Sistemas</a>
          <a href="consultoria.html" class="menu-link">Capacitaciones SST</a>
          <a href="consultoria.html" class="menu-link">Tercerización de SST</a>
          <a href="#" id="regresar" class="menu-link">Regresar a Servicios</a>
      `;
      document.getElementById('regresar').addEventListener('click', function (event) {
          event.preventDefault();
          cambiarAMenuServicios();
      });
  }
});


