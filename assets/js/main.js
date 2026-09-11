document.addEventListener('DOMContentLoaded', function () {
    var toastEl = document.getElementById('whatsToast');
    if (!toastEl) return;

    var toast = new bootstrap.Toast(toastEl, { delay: 3500 });

    var gatilhos = document.querySelectorAll('a[href*="wa.me"]');
    gatilhos.forEach(function (botao) {
        botao.addEventListener('click', function () {
            toast.show();
        });
    });
});
