document.getElementById("btnClasificar").addEventListener("click", clasificar);

function clasificar() {
  let puntaje = 0;

  if (document.getElementById("video").checked) puntaje += 3;
  if (document.getElementById("imagen").checked) puntaje += 2;
  if (document.getElementById("radar").checked) puntaje += 4;
  if (document.getElementById("testigos").value > 3) puntaje += 2;
  if (!document.getElementById("explicacion").checked) puntaje += 3;

  let resultado = "";
  let color = "";
  let recomendacion = "";

  if (puntaje <= 4) {
    resultado = "Evidencia débil";
    color = "red";
    recomendacion = "La evidencia carece de pruebas sólidas. Se recomienda más investigación.";
  } else if (puntaje <= 8) {
    resultado = "Evidencia moderada";
    color = "orange";
    recomendacion = "La evidencia es interesante, pero aún requiere confirmación adicional.";
  } else {
    resultado = "Evidencia fuerte";
    color = "green";
    recomendacion = "La evidencia es consistente y merece análisis científico detallado.";
  }

  // Mostrar resultado
  document.getElementById("resultadoTexto").textContent =
    "Clasificación: " + resultado + " (Puntaje: " + puntaje + ")";
  document.getElementById("resultadoTexto").style.backgroundColor = color;
  document.getElementById("resultadoTexto").style.color = "white";

  document.getElementById("recomendacion").textContent = recomendacion;

  // Guardar en historial
  let nombre = document.getElementById("nombre").value;
  let lugar = document.getElementById("lugar").value;
  let testigos = document.getElementById("testigos").value;

  let tabla = document.getElementById("tablaRegistros");
  let fila = tabla.insertRow();

  fila.insertCell(0).textContent = nombre;
  fila.insertCell(1).textContent = lugar;
  fila.insertCell(2).textContent = testigos;
  fila.insertCell(3).textContent = puntaje;
  fila.insertCell(4).textContent = resultado;
}
