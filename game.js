window.addEventListener('load', function(){
  ShowTutorial();
  const comenzar = document.getElementById('boton_comenzar');
  const restart = document.getElementById('boton_restart');
  const respuesta = document.getElementById('respuesta');
  const score = document.getElementById('score');
  let mensajeError = document.getElementById('mensajeError');
  let points = 0;
  var audio_wrong = document.getElementById("wrong");
  var audio_rigth = document.getElementById("rigth");

  audio_wrong.playbackRate=2;
  audio_rigth.playbackRate=1.6;
  audio_rigth.volume = 0.7;
  audio_wrong.volume = 1;


  clock_1 = document.querySelector('.line1');
  clock_2 = document.querySelector('.line2');
  clock_3 = document.querySelector('.line3');
  clock_4 = document.querySelector('.line4');
  clock_5 = document.querySelector('.line5');
  clock_6 = document.querySelector('.line6');
  clock_7 = document.querySelector('.line7');

  clock_1b = document.querySelector('.line1b');
  clock_2b = document.querySelector('.line2b');
  clock_3b = document.querySelector('.line3b');
  clock_4b = document.querySelector('.line4b');
  clock_5b = document.querySelector('.line5b');
  clock_6b = document.querySelector('.line6b');
  clock_7b = document.querySelector('.line7b');

  // Conseguimos un numero del 1 al 10
  let random_number = Math.floor(Math.random() * 10);
  let playing = false;
  comenzar.addEventListener('click', function(e){
    random_number = Math.floor(Math.random() * 10);
    respuesta.value = '';
    playing = true;
    mensajeError.setAttribute('hidden',true);
    e.preventDefault();
    restart_game();
    change_clock(random_number);
  });
  restart.addEventListener('click', function(e){
    e.preventDefault();
    restart_game();
  });
  respuesta.addEventListener('keyup', function(){

    // Validamos que se haya ingresado un numero
    if (!playing) {
      mensajeError.removeAttribute('hidden');
      mensajeError.innerHTML = "Presione comenzar para empezar a jugar!";
      return false;
    }
    if (!respuesta.value) {
      mensajeError.removeAttribute('hidden');
      mensajeError.innerHTML = "La respuesta debe ser un número!";
      return false;
    }
    if (respuesta.value) {
      mensajeError.setAttribute('hidden',true);
    }

    // Validamos la respuesta y le damos o quitamos puntos acorde a la misma
    if (parseInt(respuesta.value)===random_number) {
      points = points+50;
      score.innerHTML = "SCORE " + points;
      audio_rigth.play();
    }
    else {
      points = points-20;
      score.innerHTML = "SCORE " + points;
      audio_wrong.play();
    }

    // Generamos el siguiente numero
    random_number = Math.floor(Math.random() * 10);
    // Cambiamos los numeros
    change_clock(random_number);
    // Reseteamos el valor de la respuesta
    respuesta.value = '';
  });

  function change_clock(number){
    set_first_number();
    if(number===1){
      setearAtributo(clock_3b);
      setearAtributo(clock_6b);
    }
    if(number===2){
      setearAtributo(clock_1b);
      setearAtributo(clock_3b);
      setearAtributo(clock_4b);
      setearAtributo(clock_5b);
      setearAtributo(clock_7b);
    }
    if(number===3){
      setearAtributo(clock_1b);
      setearAtributo(clock_3b);
      setearAtributo(clock_4b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
    if(number===4){
      setearAtributo(clock_2b);
      setearAtributo(clock_3b);
      setearAtributo(clock_4b);
      setearAtributo(clock_6b);
    }
    if(number===5){
      setearAtributo(clock_1b);
      setearAtributo(clock_2b);
      setearAtributo(clock_4b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
    if(number===6){
      setearAtributo(clock_1b);
      setearAtributo(clock_2b);
      setearAtributo(clock_4b);
      setearAtributo(clock_5b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
    if(number===7){
      setearAtributo(clock_1b);
      setearAtributo(clock_3b);
      setearAtributo(clock_6b);
    }
    if (number===8) {
      setearAtributo(clock_1b);
      setearAtributo(clock_2b);
      setearAtributo(clock_3b);
      setearAtributo(clock_4b);
      setearAtributo(clock_5b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
    if(number===9){
      setearAtributo(clock_1b);
      setearAtributo(clock_2b);
      setearAtributo(clock_3b);
      setearAtributo(clock_4b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
    if (number===0) {
      setearAtributo(clock_1b);
      setearAtributo(clock_2b);
      setearAtributo(clock_3b);
      setearAtributo(clock_5b);
      setearAtributo(clock_6b);
      setearAtributo(clock_7b);
    }
  }

  function setearAtributo(clock){
    if (clock.hasAttribute('hidden')) {
      clock.removeAttribute('hidden');
    }
    else {
      clock.setAttribute('hidden',true);
    }
  }

  function restart_game(){
    respuesta.value = '';

    clock_1.removeAttribute('hidden');
    clock_2.removeAttribute('hidden');
    clock_3.removeAttribute('hidden');
    clock_4.removeAttribute('hidden');
    clock_5.removeAttribute('hidden');
    clock_6.removeAttribute('hidden');
    clock_7.removeAttribute('hidden');

    clock_1b.removeAttribute('hidden');
    clock_2b.removeAttribute('hidden');
    clock_3b.removeAttribute('hidden');
    clock_4b.removeAttribute('hidden');
    clock_5b.removeAttribute('hidden');
    clock_6b.removeAttribute('hidden');
    clock_7b.removeAttribute('hidden');

    points = 0;
    score.innerHTML = "SCORE " + points;
  }

  function restart_first(){
    clock_1.removeAttribute('hidden');
    clock_2.removeAttribute('hidden');
    clock_3.removeAttribute('hidden');
    clock_4.removeAttribute('hidden');
    clock_5.removeAttribute('hidden');
    clock_6.removeAttribute('hidden');
    clock_7.removeAttribute('hidden');
  }

  function set_first_number(){
    if (clock_1b.hasAttribute('hidden')) {
      clock_1.setAttribute('hidden',true);
    }
    else {
      clock_1.removeAttribute('hidden');
    }
    if (clock_2b.hasAttribute('hidden')) {
      clock_2.setAttribute('hidden',true);
    }
    else {
      clock_2.removeAttribute('hidden');
    }
    if (clock_3b.hasAttribute('hidden')) {
      clock_3.setAttribute('hidden',true);
    }
    else {
      clock_3.removeAttribute('hidden');
    }

    if (clock_4b.hasAttribute('hidden')) {
      clock_4.setAttribute('hidden',true);
    }
    else {
      clock_4.removeAttribute('hidden');
    }
    if (clock_5b.hasAttribute('hidden')) {
      clock_5.setAttribute('hidden',true);
    }
    else {
      clock_5.removeAttribute('hidden');
    }
    if (clock_6b.hasAttribute('hidden')) {
      clock_6.setAttribute('hidden',true);
    }
    else {
      clock_6.removeAttribute('hidden');
    }
    if (clock_6b.hasAttribute('hidden')) {
      clock_6.setAttribute('hidden',true);
    }
    else {
      clock_6.removeAttribute('hidden');
    }
    if (clock_7b.hasAttribute('hidden')) {
      clock_7.setAttribute('hidden',true);
    }
    else {
      clock_7.removeAttribute('hidden');
    }
  }

  var currentPage = 1;

  function ShowTutorial(){
    var game_view = document.getElementById('game_view');
    game_view.setAttribute('class', "mt-3 game_hidden d-flex justify-content-center");
    descripcion_1 = document.getElementById('descripcion1');
    descripcion_1.removeAttribute('hidden');
    tutorial = document.getElementById('tutorial');
    tutorial.removeAttribute('hidden');
    var arrow_right = document.querySelector('.fa-arrow-right');
    arrow_right.addEventListener('click',function(){
      next_page(currentPage);
      currentPage++;
      if (currentPage===4) {
        showGame();
      }
    });
  }

  function showGame(){
    tutorial = document.getElementById('tutorial');
    tutorial.setAttribute('class', "mt-3 game_hidden d-flex justify-content-center");
    const game_view = document.getElementById('game_view');
    game_view.setAttribute('class', "mt-3 game d-flex justify-content-center");
  }

  function next_page(currentPagenumber=1){
    if (currentPagenumber!=3) {
      query = "descripcion" + currentPagenumber;
      var currentPage = document.getElementById(query);
      currentPage.setAttribute('hidden',true);
      var number =  currentPagenumber+1;
      query_next = "descripcion" + number;
      var next_page = document.getElementById(query_next);
      foto = document.getElementById('foto_1');
      foto.setAttribute('src','numeros_digitales'+(currentPagenumber+1)+'.jpg')
      next_page.removeAttribute('hidden')
    }
  }
});
