// Inicializar Swiper cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Cambiar el número de slides visibles a la vez
    spaceBetween: 30, // Espacio entre slides
    loop: true, // Habilitar el desplazamiento infinito
    speed: 1200, // Ajustar la velocidad de desplazamiento (en milisegundos)
      autoplay: {
          delay: 500, // Cambia el valor para ajustar la velocidad de desplazamiento (en milisegundos)
          disableOnInteraction: false, // Mantener el autoplay activo incluso cuando hay interacción del usuario
        },
    });

    // Detener autoplay al pasar el cursor sobre el slider
    swiper.el.addEventListener('mouseenter', function () {
        swiper.autoplay.stop();
    });

    // Reanudar autoplay al alejar el cursor del slider
    swiper.el.addEventListener('mouseleave', function () {
        swiper.autoplay.start();
    });
});

// navbar
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

















document.addEventListener("DOMContentLoaded", function () {
  // Simula una carga ficticia durante 3 segundos
  setTimeout(function () {
    // Oculta el loader con transición suave
    var loader = document.getElementById("container-loader");
    loader.classList.add("hidden");

    // Muestra el contenido oculto después de la transición
    setTimeout(function () {
      loader.style.display = "none"; // Oculta el loader completamente
      var content = document.getElementById("content");
      content.classList.remove("hidden");
    }, 100); // 500 ms (0.5 segundos) para coincidir con la duración de la transición
  },2000); // 3000 ms = 3 segundos
});



// hacer efecto mostrar y ocultar
const seccionesOcultas = document.querySelectorAll('.ocultar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('mostrar', entry.
      isIntersecting);
  })
},
  { threshold: 0 }
);

seccionesOcultas.forEach((seccion) => observer.observe(seccion));








































// NAV BAR
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});




// popup
var
  btnAbrirPopUp = document.getElementById('btn-abrir-popup'),
  btnAbrirPopUp1 = document.getElementById('btn-abrir-popup1'),
  btnAbrirPopUp2 = document.getElementById('btn-abrir-popup2'),
  btnAbrirPopUp3 = document.getElementById('btn-abrir-popup3'),
  btnAbrirPopUp4 = document.getElementById('btn-abrir-popup4'),
  btnAbrirPopUp5 = document.getElementById('btn-abrir-popup5'),
  btnAbrirPopUp6 = document.getElementById('btn-abrir-popup6'),
  btnAbrirPopUp7 = document.getElementById('btn-abrir-popup7'),



  overlay = document.getElementById('overlay'),
  overlay1 = document.getElementById('overlay1'),
  overlay2= document.getElementById('overlay2'),
  overlay3 = document.getElementById('overlay3'),
  overlay4 = document.getElementById('overlay4'),
  overlay5 = document.getElementById('overlay5'),
  overlay6 = document.getElementById('overlay6'),
  overlay7= document.getElementById('overlay7'),


  popup = document.getElementById('popup'),
  popup1 = document.getElementById('popup1'),
  popup2 = document.getElementById('popup2'),
  popup3 = document.getElementById('popup3'),
  popup4 = document.getElementById('popup4'),
  popup5 = document.getElementById('popup5'),
  popup6 = document.getElementById('popup6'),
  popup7 = document.getElementById('popup7'),



  btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
  btnCerrarPopup1 = document.getElementById('btn-cerrar-popup1'),
  btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
  btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3'),
  btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4'),
  btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5'),
  btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6'),
  btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7')

  ;



btnAbrirPopUp.addEventListener('click', function () {
  overlay.classList.add('active');
  popup.classList.add('active');
})
btnAbrirPopUp1.addEventListener('click', function () {
  overlay1.classList.add('active');
  popup1.classList.add('active');
})
btnAbrirPopUp2.addEventListener('click', function () {
  overlay2.classList.add('active');
  popup2.classList.add('active');
})
btnAbrirPopUp3.addEventListener('click', function () {
  overlay3.classList.add('active');
  popup3.classList.add('active');
})
btnAbrirPopUp4.addEventListener('click', function () {
  overlay4.classList.add('active');
  popup4.classList.add('active');
})
btnAbrirPopUp5.addEventListener('click', function () {
  overlay5.classList.add('active');
  popup5.classList.add('active');
})
btnAbrirPopUp6.addEventListener('click', function () {
  overlay6.classList.add('active');
  popup6.classList.add('active');
})
btnAbrirPopUp7.addEventListener('click', function () {
  overlay7.classList.add('active');
  popup7.classList.add('active');
})






btnCerrarPopup.addEventListener('click', function (event) {
  event.preventDefault();
  overlay.classList.remove('active');
  popup.classList.remove('active');
})
btnCerrarPopup1.addEventListener('click', function (event) {
  event.preventDefault();
  overlay1.classList.remove('active');
  popup1.classList.remove('active');
})
btnCerrarPopup2.addEventListener('click', function (event) {
  event.preventDefault();
  overlay2.classList.remove('active');
  popup2.classList.remove('active');
})
btnCerrarPopup3.addEventListener('click', function (event) {
  event.preventDefault();
  overlay3.classList.remove('active');
  popup3.classList.remove('active');
})
btnCerrarPopup4.addEventListener('click', function (event) {
  event.preventDefault();
  overlay4.classList.remove('active');
  popup4.classList.remove('active');
})
btnCerrarPopup5.addEventListener('click', function (event) {
  event.preventDefault();
  overlay5.classList.remove('active');
  popup5.classList.remove('active');
})
btnCerrarPopup6.addEventListener('click', function (event) {
  event.preventDefault();
  overlay6.classList.remove('active');
  popup6.classList.remove('active');
})
btnCerrarPopup7.addEventListener('click', function (event) {
  event.preventDefault();
  overlay7.classList.remove('active');
  popup7.classList.remove('active');
})










// SLIDER arriba

let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(function () {
  plusSlides(1);
}, 5000);

// Initialize the slider
showSlides(slideIndex);








// Obtén todos los enlaces con la clase 'consultar-link'
const consultarLinks = document.querySelectorAll('.consultar-link');

// Agrega un evento de clic a cada enlace
consultarLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén el nombre del producto (puedes cambiar esto según tu estructura HTML)
    const productName = this.closest('.slider-card').querySelector('h3').innerText;

    // Número de teléfono de WhatsApp y mensaje predefinido
    const phoneNumber = '51943503387'; // Reemplaza con tu número de teléfono
    const message = `Hola, quiero consultar sobre ${productName}`;

    // Construye la URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappURL, '_blank');
  });
});


















// script.js
document.addEventListener("DOMContentLoaded", function () {
  const botonVolverArriba = document.getElementById("botonVolverArriba");

  // Muestra u oculta el botón según la posición del usuario en la página
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      botonVolverArriba.style.display = "block";
    } else {
      botonVolverArriba.style.display = "none";
    }
  });

  // Vuelve al inicio cuando se hace clic en el botón
  botonVolverArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
  });
});









// enviar mensaje de whatsApp


const evento = document.getElementById('send')
const enviarFormulario = () => {
  let nombres = document.getElementById('Nombres').value;
  let apellidos = document.getElementById('Apellidos').value;
  let cargo = document.getElementById('Cargo').value;
  let email = document.getElementById('Email').value;
  let empresa = document.getElementById('Empresa').value;
  let servicio = document.getElementById('Servicio').value;
  let descripcion = document.getElementById('Descripcion').value;

  // Construir el mensaje de WhatsApp
  let mensaje = `Mi nombre es : ${nombres} ${apellidos}\n` +
    `Tengo el Cargo de : ${cargo}\n` +
    `Mi correo es : ${email}\n` +
    `De la Empresa: ${empresa}\n` +
    `El Asunto de Servicio es : ${servicio}\n` +
    `Descripción : ${descripcion}`;

  // Crear el enlace de WhatsApp con el mensaje
  let numeroWhatsApp = '51997784512'; // Reemplaza con el número de WhatsApp deseado
  let enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  // Redirigir al enlace de WhatsApp
  window.open(enlaceWhatsApp, '_blank');
}
evento.addEventListener('click', enviarFormulario);





























// PARA SLIDER ALIADOS PRODUCTOSSSS


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 5,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});

// acorderon
function toggleAnswer(question) {
  const answer = question.nextElementSibling;

  if (question.parentElement.classList.contains('active')) {
    question.parentElement.classList.remove('active');
  } else {
    // Cerramos todas las respuestas antes de abrir la actual
    closeAllAnswers();
    question.parentElement.classList.add('active');
  }
}

function closeAllAnswers() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.classList.remove('active');
  });
}
