$('#contactModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('email')
    var modal = $(this)
    modal.find('.modal-title').text('Contact: ' + recipient)
    // modal.find('.modal-body input').val(recipient)
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
