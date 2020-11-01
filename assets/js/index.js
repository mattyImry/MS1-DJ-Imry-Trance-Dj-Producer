$('#contact-form').on('submit', function(e) {
    $('#exampleModal').modal('show');
    e.preventDefault();
});

$('.btn-reload').on('click', function() {
    location.reload();
});