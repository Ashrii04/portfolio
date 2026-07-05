  // Terminal typing sequence
  const term = document.getElementById('termBody');
  const sequence = [
    { type:'cmd', text:'whoami' },
    { type:'out', text:'Ashritha S — Python Developer / AI-ML Engineer / Full-Stack Builder' },
    { type:'cmd', text:'cat current_role.txt' },
    { type:'out', text:'Python Full-Stack Developer @ Palle Technologies, Bangalore' },
    { type:'cmd', text:'python3 status.py --focus' },
    { type:'out', text:'Building agentic AI systems with LangChain, RAG pipelines & FastAPI →' }
  ];

  function typeLine(el, text, speed, cb){
    let i = 0;
    function step(){
      if(i <= text.length){
        el.textContent = text.slice(0,i);
        i++;
        setTimeout(step, speed);
      } else if(cb){ cb(); }
    }
    step();
  }

  function runSequence(idx){
    if(idx >= sequence.length) return;
    const item = sequence[idx];
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.style.animationDelay = '0s';

    if(item.type === 'cmd'){
      const prompt = document.createElement('span');
      prompt.className = 'prompt';
      prompt.textContent = '$ ';
      const cmdSpan = document.createElement('span');
      cmdSpan.className = 'cmd';
      line.appendChild(prompt);
      line.appendChild(cmdSpan);
      term.appendChild(line);
      requestAnimationFrame(()=>line.style.opacity=1);
      typeLine(cmdSpan, item.text, 38, ()=> setTimeout(()=>runSequence(idx+1), 250));
    } else {
      line.className = 'terminal-line terminal-out';
      term.appendChild(line);
      requestAnimationFrame(()=>line.style.opacity=1);
      typeLine(line, item.text, 14, ()=> setTimeout(()=>runSequence(idx+1), 400));
    }
  }
  runSequence(0);

  // Nav active state on scroll
  const sections = document.querySelectorAll('section, header.hero');
  const tabs = document.querySelectorAll('.nav-tab');
  window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom >= 120){ current = sec.id; }
    });
    tabs.forEach(tab=>{
      tab.classList.toggle('active', tab.getAttribute('href') === '#'+current);
    });
  });
