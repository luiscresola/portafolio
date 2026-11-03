/* =====================================================================
   MAIN.JS · Pinta la web a partir de contenido.js
   No hace falta tocar este archivo para cambiar textos.
   ===================================================================== */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  if (!D) return;

  /* ---------- utilidades ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icono(nombre) { return '<svg class="i" aria-hidden="true"><use href="#i-' + esc(nombre) + '"/></svg>'; }
  function iniciales(nombre) {
    return String(nombre || "").split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (p) { return p[0]; }).join("").toUpperCase();
  }
  function setTexto(sel, txt) { $$(sel).forEach(function (el) { el.textContent = txt; }); }

  var nombreCompleto = [D.nombre, D.apellidos].filter(Boolean).join(" ");

  /* ---------- datos básicos ---------- */
  setTexto("[data-nombre-completo]", nombreCompleto);
  setTexto("[data-titular]", D.titular || "");
  setTexto("[data-cabecera]", D.cabecera || D.titular || "");
  setTexto("[data-iniciales]", D.iniciales || iniciales(nombreCompleto));
  setTexto("[data-ubicacion]", "En servicio · " + (D.ubicacion || ""));
  setTexto("[data-ubicacion-corta]", D.ubicacion || "");
  setTexto("[data-coords]", D.coordenadas || "");
  setTexto("[data-anio]", new Date().getFullYear());

  /* foto: si no existe el archivo, se quedan las iniciales */
  var foto = $("[data-foto]");
  if (foto && D.foto) {
    foto.alt = "Foto de " + nombreCompleto;
    foto.addEventListener("load", function () { foto.parentNode.classList.add("con-foto"); });
    foto.addEventListener("error", function () { foto.remove(); });
    foto.src = D.foto;
  } else if (foto) { foto.remove(); }

  $("[data-bio]").innerHTML = (D.bio || []).map(function (p) { return "<p>" + p + "</p>"; }).join("");

  var cv = $("[data-cv]");
  if (D.cvPrincipal) cv.href = D.cvPrincipal; else cv.hidden = true;

  /* ---------- redes ---------- */
  var c = D.contacto || {};
  var redes = [];
  if (c.linkedin) redes.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icono("linkedin") + "</a>");
  if (c.email) redes.push('<a href="mailto:' + esc(c.email) + '" aria-label="Email">' + icono("mail") + "</a>");
  if (c.telefono) redes.push('<a href="tel:' + esc(c.telefono.replace(/\s+/g, "")) + '" aria-label="Teléfono ' + esc(c.telefono) + '">' + icono("telefono") + "</a>");
  $("[data-redes]").innerHTML = redes.join("");

  /* ---------- proyectos destacados ---------- */
  var proyectos = D.proyectos || [];
  if (proyectos.length) {
    $("[data-proyectos]").innerHTML = proyectos.map(function (p) {
      return '<li class="proyecto">' +
        '<div class="proyecto__cab">' +
          '<span class="proyecto__ico">' + icono(p.icono || "escudo") + "</span>" +
          '<div><h3 class="proyecto__tit">' + esc(p.titulo) + "</h3>" +
          (p.contexto ? '<p class="proyecto__ctx">' + esc(p.contexto) + "</p>" : "") + "</div>" +
        "</div>" +
        (p.rol ? '<span class="chip chip--senal">' + esc(p.rol) + "</span>" : "") +
        (p.descripcion ? '<p class="proyecto__desc">' + esc(p.descripcion) + "</p>" : "") +
        ((p.etiquetas || []).length
          ? '<div class="proyecto__tags">' + p.etiquetas.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>"
          : "") +
        (p.cifra
          ? '<p class="proyecto__cifra"><span class="proyecto__num">' + esc(p.cifra) + "</span>" +
            (p.cifraTexto ? "<span>" + esc(p.cifraTexto) + "</span>" : "") + "</p>"
          : "") +
        "</li>";
    }).join("");
  } else {
    $("#proyectos").hidden = true;
    $("[data-nav-proyectos]").hidden = true;
  }

  /* ---------- experiencia ---------- */
  var exp = D.experiencia || [];
  var visibles = D.experienciaVisible || exp.length;
  var anioInicio = exp.reduce(function (min, e) {
    var m = String(e.periodo || "").match(/\d{4}/);
    return m ? Math.min(min, +m[0]) : min;
  }, Infinity);
  if (isFinite(anioInicio)) setTexto("[data-anios]", "Desde " + anioInicio);

  $("[data-experiencia]").innerHTML = exp.map(function (e, i) {
    var actual = /actualidad/i.test(e.periodo || "");
    return '<li' + (i >= visibles ? ' data-extra hidden' : "") + '>' +
      '<div class="linea__periodo">' + esc(e.periodo) +
        (actual ? '<br><span class="chip chip--senal linea__actual">Actual</span>' : "") + "</div>" +
      "<div>" +
        '<h3 class="linea__puesto">' + esc(e.puesto) + "</h3>" +
        '<p class="linea__empresa">' + esc(e.empresa) + "</p>" +
        (Array.isArray(e.descripcion)
          ? '<ul class="linea__desc linea__lista">' + e.descripcion.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>"
          : e.descripcion ? '<p class="linea__desc">' + esc(e.descripcion) + "</p>" : "") +
      "</div></li>";
  }).join("");

  var btnMas = $("#exp-mas");
  if (exp.length > visibles) {
    btnMas.hidden = false;
    btnMas.addEventListener("click", function () {
      var abierto = btnMas.getAttribute("aria-expanded") === "true";
      $$("[data-extra]").forEach(function (li) {
        li.hidden = abierto;
        if (!abierto) li.classList.add("entra");
      });
      btnMas.setAttribute("aria-expanded", String(!abierto));
      btnMas.querySelector("span").textContent = abierto ? "Ver toda la trayectoria" : "Ver menos";
    });
  }

  /* ---------- disponibilidad + contacto ---------- */
  var disp = D.disponibilidad || {};
  if (disp.visible === false) {
    $("[data-disp-estado]").hidden = true;
    $("[data-disp-puntos]").hidden = true;
    $(".dispo__zona").hidden = true;
  } else {
    setTexto("[data-disp-estado]", disp.estado || "");
    setTexto("[data-disp-titulo]", disp.titulo || "Contacto");
    if (!disp.titulo) $("[data-disp-titulo]").hidden = true;
    $("[data-disp-puntos]").innerHTML = (disp.puntos || []).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    setTexto("[data-disp-zona]", disp.zona || "");
  }
  setTexto("[data-email]", c.email || "");
  var mailto = $("[data-mailto]");
  if (c.email) mailto.href = "mailto:" + c.email; else mailto.hidden = true;

  var btnCopiar = $("#copiar-email");
  btnCopiar.addEventListener("click", function () {
    var txt = c.email || "";
    function ok() {
      btnCopiar.classList.add("copiado");
      btnCopiar.innerHTML = icono("check");
      btnCopiar.setAttribute("aria-label", "Email copiado");
      setTimeout(function () {
        btnCopiar.classList.remove("copiado");
        btnCopiar.innerHTML = icono("copiar");
        btnCopiar.setAttribute("aria-label", "Copiar email");
      }, 1800);
    }
    function seleccionar() {
      var r = document.createRange();
      r.selectNodeContents($("#email-txt"));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    try {
      navigator.clipboard.writeText(txt).then(ok, seleccionar);
    } catch (e) { seleccionar(); }
  });

  /* ---------- formación ---------- */
  $("[data-formacion]").innerHTML = (D.formacion || []).map(function (f) {
    return "<li>" +
      '<span class="formacion__tit">' + esc(f.titulo) + "</span>" +
      (f.centro ? '<span class="formacion__centro">' + esc(f.centro) + "</span>" : "") +
      (f.periodo ? '<span class="chip">' + esc(f.periodo) + "</span>" : "") +
      "</li>";
  }).join("");

  var idiomas = D.idiomas || [];
  if (idiomas.length) {
    $("[data-idiomas]").innerHTML = idiomas.map(function (x) {
      return '<li><span class="idiomas__nombre">' + esc(x.idioma) + "</span>" +
        (x.nivel ? '<span class="idiomas__nivel">' + esc(x.nivel) + "</span>" : "") + "</li>";
    }).join("");
  } else {
    $("[data-idiomas-bloque]").hidden = true;
  }

  var herramientas = D.herramientas || [];
  if (herramientas.length) {
    $("[data-herramientas]").innerHTML = herramientas.map(function (h) {
      return '<li class="chip">' + esc(h) + "</li>";
    }).join("");
  } else {
    $("[data-herramientas-bloque]").hidden = true;
  }

  /* ---------- cartas (carrusel) ---------- */
  var cartas = D.cartas || [];
  var carrusel = $("#carrusel");
  carrusel.classList.toggle("carrusel--uno", cartas.length === 1);
  carrusel.innerHTML = cartas.map(function (k, i) {
    var cargo = [k.cargo, k.empresa].filter(Boolean).join(" · ");
    var texto = k.extracto
      ? '<blockquote class="carta__texto">' + esc(k.extracto) + "</blockquote>"
      : '<p class="carta__texto carta__texto--vacio">Carta completa disponible en PDF.</p>';
    var leer = k.archivo
      ? '<a class="carta__leer" href="' + esc(k.archivo) + '" target="_blank" rel="noopener">Leer carta ' + icono("flecha") + "</a>"
      : "";
    return '<article class="carta" aria-roledescription="carta" aria-label="' + (i + 1) + " de " + cartas.length + '">' +
      '<div class="carta__quien">' +
        '<span class="carta__avatar" aria-hidden="true">' + esc(iniciales(k.autor)) + "</span>" +
        '<div><p class="carta__nombre">' + esc(k.autor) + "</p>" +
        (cargo ? '<p class="carta__cargo">' + esc(cargo) + "</p>" : "") + "</div>" +
      "</div>" +
      (k.ejemplo ? '<span class="chip chip--ejemplo">Ejemplo · sustituir</span>' : "") +
      texto +
      '<div class="carta__pie"><span>' + esc([k.idioma, k.fecha].filter(Boolean).join(" · ")) + "</span>" + leer + "</div>" +
      "</article>";
  }).join("");

  var prev = $("#carta-prev"), next = $("#carta-next"), puntos = $("#puntos");
  function paso() {
    var item = carrusel.querySelector(".carta");
    return item ? item.getBoundingClientRect().width + 16 : carrusel.clientWidth;
  }
  function paginas() { return Math.max(1, Math.round((carrusel.scrollWidth - carrusel.clientWidth) / paso()) + 1); }
  function actual() { return Math.round(carrusel.scrollLeft / paso()); }
  function pintarPuntos() {
    var n = paginas();
    var multi = n > 1;
    $("[data-carrusel-ctrl]").hidden = !multi;
    puntos.hidden = !multi;
    if (!multi) return;
    if (puntos.children.length !== n) puntos.innerHTML = new Array(n + 1).join("<span></span>");
    var a = actual();
    $$("span", puntos).forEach(function (s, i) { s.classList.toggle("on", i === a); });
    prev.disabled = a <= 0;
    next.disabled = a >= n - 1;
  }
  prev.addEventListener("click", function () { carrusel.scrollBy({ left: -paso() }); });
  next.addEventListener("click", function () { carrusel.scrollBy({ left: paso() }); });
  carrusel.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); next.click(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev.click(); }
  });
  var t;
  carrusel.addEventListener("scroll", function () { clearTimeout(t); t = setTimeout(pintarPuntos, 60); }, { passive: true });
  window.addEventListener("resize", pintarPuntos);
  pintarPuntos();

  /* ---------- documentos ---------- */
  var docs = D.documentos || [];
  setTexto("[data-docs-n]", docs.length + (docs.length === 1 ? " archivo" : " archivos"));
  $("[data-documentos]").innerHTML = docs.map(function (d) {
    var ext = (String(d.archivo || "").split(".").pop() || "pdf").toUpperCase();
    return "<li>" +
      '<span class="docs__ico" aria-hidden="true">' + esc(ext) + "</span>" +
      '<div><p class="docs__tit">' + esc(d.titulo) + "</p>" +
        '<div class="docs__meta">' +
          (d.tipo ? '<span class="chip">' + esc(d.tipo) + "</span>" : "") +
          (d.idioma ? '<span class="chip">' + esc(d.idioma) + "</span>" : "") +
        "</div></div>" +
      '<a class="docs__btn" href="' + esc(d.archivo) + '" target="_blank" rel="noopener" aria-label="Abrir ' + esc(d.titulo) + '">' + icono("descargar") + "</a>" +
      "</li>";
  }).join("");

  /* ---------- áreas ---------- */
  $("[data-areas]").innerHTML = (D.areas || []).map(function (a) {
    return "<li>" + icono(a.icono || "escudo") + "<span>" + esc(a.nombre) + "</span></li>";
  }).join("");

  /* ---------- tema claro / oscuro ---------- */
  var raiz = document.documentElement;
  var temaBtn = $("#tema-btn");
  var sistemaOscuro = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function temaActual() {
    var t = raiz.getAttribute("data-theme");
    if (t === "dark" || t === "light") return t;
    return sistemaOscuro && sistemaOscuro.matches ? "dark" : "light";
  }
  function pintarTemaBtn() {
    var oscuro = temaActual() === "dark";
    temaBtn.innerHTML = icono(oscuro ? "sol" : "luna");
    temaBtn.setAttribute("aria-label", oscuro ? "Activar modo claro" : "Activar modo oscuro");
  }
  temaBtn.addEventListener("click", function () {
    var nuevo = temaActual() === "dark" ? "light" : "dark";
    raiz.setAttribute("data-theme", nuevo);
    try { localStorage.setItem("tema", nuevo); } catch (e) {}
    pintarTemaBtn();
  });
  if (sistemaOscuro && sistemaOscuro.addEventListener) sistemaOscuro.addEventListener("change", pintarTemaBtn);
  pintarTemaBtn();

  /* ---------- menú móvil ---------- */
  var menuBtn = $("#menu-btn"), nav = $("#nav");
  function cerrarMenu() {
    nav.classList.remove("abierto");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = icono("menu");
  }
  menuBtn.addEventListener("click", function () {
    var abrir = !nav.classList.contains("abierto");
    nav.classList.toggle("abierto", abrir);
    menuBtn.setAttribute("aria-expanded", String(abrir));
    menuBtn.innerHTML = icono(abrir ? "cerrar" : "menu");
  });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", cerrarMenu); });
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) cerrarMenu();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarMenu(); });
})();
