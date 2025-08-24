
function fakeSubmit(form){
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true; btn.textContent = 'Sending…';
  setTimeout(()=>{
    alert('Thanks! We will reach out shortly.');
    btn.disabled = false; btn.textContent = 'Request Quote';
    form.reset();
  }, 800);
}
