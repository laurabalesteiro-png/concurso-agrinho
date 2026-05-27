const curiosidades = [

"🌱 A IA consegue detectar pragas antes mesmo delas aparecerem visivelmente na plantação.",

"🚜 Drones agrícolas ajudam a reduzir o desperdício de água e fertilizantes.",

"📡 Sensores inteligentes monitoram a umidade do solo em tempo real.",

"🤖 Robôs agrícolas já conseguem identificar plantas doentes automaticamente.",

"☀️ Fazendas sustentáveis utilizam energia solar para reduzir impactos ambientais."

];

function mostrarCuriosidade(){

  let numero = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("curiosidade").innerText =
  curiosidades[numero];
}
