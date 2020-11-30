toTopButton = document.getElementById("scroll-btn");
toDisappear = document.getElementById("footer");

window.onscroll = function() {
    scrollFunction()
  };
  
  //function for if button is 20px lower or higher (homescreen won't display until scrolling past initial home screen)
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollbtn.style.display = "block";
      footer.style.display = "block";
    } else {
      scrollbtn.style.display = "none";
      footer.style.display = "none";
    }
  }

  
  
  function toTopFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
    }


//email icon copy to clipboard 
    document.getElementById("email-icon");

    function copyToClipboard(value) {
      var email = document.createElement("input");
      email.value = value;
      document.body.appendChild(email);
      email.select();
      document.execCommand("copy");
      document.body.removeChild(email);
    }
    
    function emailCopy(){
      copyToClipboard('aib.buyck@gmail.com');
      alert('Oh neat! My email has been copied to your clipboard!');
    }


   