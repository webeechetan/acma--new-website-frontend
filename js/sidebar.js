document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    var fullHeight = function() {
        var fullheightElements = document.querySelectorAll('.js-fullheight');
        var setFullHeight = function() {
            var height = window.innerHeight;
            fullheightElements.forEach(function(element) {
                element.style.height = height + 'px';
            });
        };
        setFullHeight();
        window.addEventListener('resize', setFullHeight);
    };
    fullHeight();

    var sidebarCollapseButton = document.getElementById('sidebarCollapse');
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');

    if (sidebarCollapseButton && sidebar && content) {
        sidebarCollapseButton.addEventListener('click', function () {
            var isClosed = sidebar.classList.toggle('closed');
            content.classList.toggle('shifted');
           
            if (isClosed) {
                sidebarCollapseButton.style.left = '10px';
            } else {
                sidebarCollapseButton.style.left = '270px'; 
            }
        });
    }

    document.querySelectorAll('.menu-toggle').forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            const menuItem = toggle.closest('.menu-item');
            const dropdown = menuItem ? menuItem.querySelector('.dropdown-menu1') : null;
            const icon = toggle.querySelector('.toggle-icon');

            document.querySelectorAll('.dropdown-menu1.active').forEach((openDropdown) => {
                if (openDropdown !== dropdown) {
                    openDropdown.classList.remove('active');
                    openDropdown.style.maxHeight = '0';
                    openDropdown.previousElementSibling.querySelector('.toggle-icon').classList.remove('rotated');
                }
            });

            if (dropdown) {
                if (dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                    dropdown.style.maxHeight = '0';
                } else {
                    dropdown.classList.add('active');
                    dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                }
            }

            if (icon) {
                icon.classList.toggle('rotated');
            }
        });
    });

    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function () {
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
});
