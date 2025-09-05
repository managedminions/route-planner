var sidebar = document.getElementById("sidebar");
var link = document.getElementById("sidebar-toggle");
link.addEventListener('click', () => {
    sidebar.classList.toggle('collapse');
});
