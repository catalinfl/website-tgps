function hideAllContainers() {
    const containers = document.querySelectorAll('.content-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
}

function showContainer(containerId) {
    hideAllContainers();
    const container = document.getElementById('container-' + containerId);
    if (container) {
        container.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    hideAllContainers();    
    document.getElementById('container-home').style.display = 'block';
    document.querySelector('.btn-home').addEventListener('click', function() {
        showContainer('home');
    });
    document.querySelector('.btn-courses').addEventListener('click', function() {
        showContainer('courses');
    });
    document.querySelector('.btn-career').addEventListener('click', function() {
        showContainer('career');
    });
    document.querySelector('.btn-about').addEventListener('click', function() {
        showContainer('about');
    });
});