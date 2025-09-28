document.getElementById('aniform').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('aniform').style.display = 'none';
  document.getElementById('thankyou').style.display = 'block';
});