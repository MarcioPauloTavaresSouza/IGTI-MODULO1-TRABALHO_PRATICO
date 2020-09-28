window.addEventListener('load', start);

var rangeR = null;
var rangeG = null;
var rangeB = null;
var inputTextR = null;
var inputTextG = null;
var inputTextB = null;

function start() {
  mapInputs();
  eventClickRange();
}

function mapInputs() {
  rangeR = document.querySelector('#inputRangeR');
  rangeG = document.querySelector('#inputRangeG');
  rangeB = document.querySelector('#inputRangeB');

  inputTextR = document.querySelector('#inputTextR');
  inputTextG = document.querySelector('#inputTextG');
  inputTextB = document.querySelector('#inputTextB');
}

function eventClickRange() {
  rangeR.addEventListener('input', inputRChange);
  rangeG.addEventListener('input', inputGChange);
  rangeB.addEventListener('input', inputBChange);
}

function inputRChange(event) {
  inputTextR.value = event.target.value;
  calculate();
}
function inputGChange(event) {
  inputTextG.value = event.target.value;
  calculate();
}

function inputBChange(event) {
  inputTextB.value = event.target.value;
  calculate();
}

function calculate() {
  var valueR = parseInt(inputTextR.value, 10);
  var valueG = parseInt(inputTextG.value, 10);
  var valueB = parseInt(inputTextB.value, 10);

  //prettier-ignore
  document.querySelector('#labelR').style.color = 'rgb(' + valueR + ',' + 0 + ',' + 0 + ')';
  //prettier-ignore
  document.querySelector('#labelG').style.color = 'rgb(' + 0 + ',' + valueG + ',' + 0 + ')';
  //prettier-ignore
  document.querySelector('#labelB').style.color = 'rgb(' + 0 + ',' + 0 + ',' + valueB + ')';
  //prettier-ignore
  document.querySelector('#resultRGB').style.backgroundColor = 'rgb(' + valueR + ',' + valueG + ',' + valueB + ')';
}
