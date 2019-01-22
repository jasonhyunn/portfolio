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

  // $(function scrollReveal() {
  //   window.sr = ScrollReveal();
    
  //   sr.reveal('.project-image', {
  //     duration   : 800,
  //     distance   : '20px',
  //     easing     : 'ease-out',
  //     origin     : 'bottom',
  //     reset      : true,
  //     scale      : 1,
  //     viewFactor : 0,
  //     afterReveal  : revealChildren,
  //   }, 150);
    
  //     var revealChildren = sr.reveal('.project-text', {
  //     duration   : 800,
  //     scale      : 1,
  //     distance   : '20px',
  //     origin     : 'bottom',
  //     reset      : true,
  //     easing     : 'ease-out',
  //     viewFactor : 1,
  //   }, 75);
  // })();

//   $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},500);
                    
//             }
            
//         }); 
    
//     });
    
// });