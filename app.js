document.addEventListener('DOMContentLoaded', ()=>{
  const cells = Array.from(document.querySelectorAll('.cell'));
  const evaluateBtn = document.getElementById('evaluateBtn');
  const modal = document.getElementById('modal');
  const processingEl = document.getElementById('processing');
  const resultEl = document.getElementById('result');
  const closeBtn = document.getElementById('closeModal');

  // toggle selection
  cells.forEach(cell=>{
    cell.addEventListener('click', ()=>{
      cell.classList.toggle('selected');
    });
  });

  function resetAll(){
    cells.forEach(c=>c.classList.remove('selected'));
    resultEl.textContent = '';
    resultEl.classList.add('hidden');
    // restore spinner animation for next run
    const spinner = processingEl.querySelector('.spinner');
    if(spinner){ spinner.style.animation = ''; }
    processingEl.classList.remove('hidden');
    modal.classList.add('hidden');
  }

  evaluateBtn.addEventListener('click', ()=>{
    // open modal
    modal.classList.remove('hidden');
    processingEl.classList.remove('hidden');
    resultEl.classList.add('hidden');

    // calculate sum during processing
    const selected = cells.filter(c=>c.classList.contains('selected'));
    const values = selected.map(s=>parseInt(s.dataset.value||'0',10));
    const total = values.reduce((a,b)=>a+b,0);

    // simulate 4s processing
    setTimeout(()=>{
      // stop spinner animation and hide processing indicator
      const spinner = processingEl.querySelector('.spinner');
      if(spinner){ spinner.style.animation = 'none'; }
      processingEl.classList.add('hidden');
      // show result
      resultEl.classList.remove('hidden');
      if(total>13){
        resultEl.textContent = 'Survivor!';
      } else {
        resultEl.textContent = 'Test Subject';
      }
    }, 4000);
  });

  closeBtn.addEventListener('click', ()=>{
    resetAll();
  });

  // Allow clicking outside modal-content to close and reset as well
  modal.addEventListener('click', (evt)=>{
    if(evt.target === modal){ resetAll(); }
  });

});
