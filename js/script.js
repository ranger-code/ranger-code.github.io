
        if('serviceWorker' in  navigator) {
          window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
          });
      }
      
let defferedprompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();

  defferedprompt = e;

  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e)=> {
  defferedprompt.prompt();
  defferedprompt.userChoice.then((choiceResult) => {
      if(choiceResult.outcome == 'accepted') {
          console.log('User Accepted the prompt');
      }
      defferedprompt = null;
  });
});
window.addEventListener('appinstalled', (evt) => {
  app.logEvent('a2sh', 'installed')
});