function toggleText(gap, text, button) {
      
        var gap = gap;
        var showText = text;
        var buttonText = button;
      
        if (gap.style.display === "none") {
  
            showText.style.display = "none";           
            gap.style.display = "inline";
           buttonText.innerHTML = "Show Post";
        }
      
      
        else {
      
            showText.style.display = "inline";
        gap.style.display = "none";
            buttonText.innerHTML = "Hide Post";
        }
    }

   
