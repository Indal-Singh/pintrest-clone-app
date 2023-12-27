document.getElementById("two").onclick=function(){
    document.getElementById("two").style.pointerEvents="none";
    document.getElementById("two").style.opacity="0.5";
    document.querySelector(".responsive-search-bar").style.top="0px";
  }
  document.querySelector(".close").onclick=function(){
    document.getElementById("two").style.pointerEvents="auto";
    document.getElementById("two").style.opacity="1";
    document.querySelector(".responsive-search-bar").style.top="-300px";
  }

  $('#pencileProfile').on('click', () => {
    $('#profileUpload input').click()
  })
  $('#profileUpload input').on('change', () => {
    $('#profileUpload').submit();
  })

  $(document).ready(function () {
$('#openModal').click(function () {
  $('#postModal').css('display', 'block');
  setTimeout(function () {
    $('#postModal, .modal-content').css('opacity', '1');
  }, 10);
});

$('#closeModal').click(function () {
  $('#postModal, .modal-content').css('opacity', '0');
  setTimeout(function () {
    $('#postModal').css('display', 'none');
  }, 300);
});

$('#submitPost').click(function () {
  // Add logic to handle the form submission (e.g., sending data to the server)
  // For simplicity, this example just closes the modal
  $('#postModal, .modal-content').css('opacity', '0');
  setTimeout(function () {
    $('#postModal').css('display', 'none');
  }, 300);
});
});