/**
   * 控制 tab 頁籤及內文切換
  */
const allTabs = document.querySelectorAll('.nav-tabs .tab');

allTabs.forEach(tab => {
  tab.addEventListener('click', event => {
    document.querySelector('.nav-tabs .tab.active').classList.remove('active');
    event.currentTarget.classList.add('active');
    document.querySelector('.tab-content.show').classList.remove('show');
    const content = event.currentTarget.dataset.content;
    document.querySelector(content).classList.add('show');
  });
});