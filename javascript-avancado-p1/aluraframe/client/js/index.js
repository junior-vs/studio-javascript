var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];
console.log(campos);
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
  var tr = document.createElement('tr');
  event.preventDefault();

  campos.forEach(function(campo) {
    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });
  var tdvolume = document.createElement('td');
  tdvolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdvolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();

});