function multiplyBy()
{
        var values = [1.089,1.0725,1.0616,1.0823,1.0720,1.0774,1.0655,1.0819 ,1.0582,1.0397,1.0473,1.0624,1.0373,1.0365,1.0313,1.0269,1.0296,1.0198,1.0272,1.0271,1.0363,1.0202,1.0323,1.0297,1.0435,1.0366,1.0334,1.0324,1.0461,1.0532,1.0463,1.0444,1.0363,1.0531,1.0731,1.0672,1.0563 ];
        var diff =0 ;
        var amount , x , rate;
        
        x = document.getElementById("amount").value;
        amount = x;
        year1 = document.getElementById("year1").value;
        year2 = document.getElementById("year2").value;
        year1 =  year1 - 1984 ;
        year2 = year2 - 1984 ;
        if (amount > 0){
        if ( year1 < year2 ) {
        // diff = year2 - year1;
         for (let i = year1; i < year2; i++) {
               amount = amount * values[i];
          }
          amount = amount.toFixed(3);
          document.getElementById("result").innerHTML = amount;
          
          
        rate = ((amount / x)*100 )-100;
        rate = rate.toFixed(3);
        document.getElementById("rate").innerHTML = rate;
        

        }
        else if ( year1 > year2 ){
          for (let i = year1-1; i > year2-1; i--){
            amount = amount / values[i];
          }
          amount = amount.toFixed(3);
          document.getElementById("result").innerHTML = amount;
          rate = (-1)*(100-((amount / x)*100 ));
          rate = rate.toFixed(3);
       
          document.getElementById("rate").innerHTML = rate;
        }
      else { document.getElementById("result").innerHTML = amount;
      document.getElementById("rate").innerHTML = 0;}}
      else document.getElementById("error").innerHTML = "Value must be positive"
      //  rate = ((amount / x)*100 )-100;
       
      //  document.getElementById("rate").innerHTML = rate;

       
}
// Use sparingly it isnt cheap :)


// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

