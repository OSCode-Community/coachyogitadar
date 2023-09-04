<script>
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar-home").style.background-color = "#501e27";
  } else {
   
    document.getElementById("navbar-home").style.background-color = "none";
  }
}
</script>