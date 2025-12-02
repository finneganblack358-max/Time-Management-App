const collapseButton = document.getElementById('collapse');
const openButton = document.getElementById('open');
openButton.classList.add('gone');
const sidebar = document.querySelector('.sidebar');

function getInput(cButton, oButton, sidebar) {
  cButton.addEventListener("click", () => {
    sidebar.classList.remove('appear');
    sidebar.classList.add('gone');
    oButton.classList.remove('gone');
    oButton.classList.add('appear');
  });
  
  oButton.addEventListener("click", () => {
    sidebar.classList.remove('gone');
    sidebar.classList.add('appear');
    oButton.classList.remove('appear');
    oButton.classList.add('gone');
    
  });
}
getInput(collapseButton, openButton, sidebar);