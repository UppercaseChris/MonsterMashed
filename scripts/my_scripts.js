 //-----------Establshing Constants----------------------------------- 
    const audio = new Audio('lightning1.wav');
          
//------------Let's get the party STARTED!!!!------------------------    
          $(function() {
              let headclix = 0,
                  eyeclix = 0,
                  noseclix = 0,
                  mouthclix = 0;
        
              audio.playbackRate = 2.5;
              audio.play();
              //----Call functions---//
              lightning_one();
              lightning_two();
              lightning_three();
            //-----Determining Right Click------------//
              $('#head').on('contextmenu', function(e) {
                  e.preventDefault();
                  if (headclix > 0) {
                      $(this).animate({ left: "+=367px" }, 500);
                      headclix -= 1;
                  }
                  return false;
              });

              $('#eyes').on('contextmenu', function(e) {
                  e.preventDefault();
                  if (eyeclix > 0) {
                      $(this).animate({ left: "+=367px" }, 500);
                      eyeclix -= 1;
                  }
                  return false;
              });

              $('#nose').on('contextmenu', function(e) {
                  e.preventDefault();
                  if (noseclix > 0) {
                      $(this).animate({ left: "+=367px" }, 500);
                      noseclix -= 1
                  }
                  return false;
              });

              $('#mouth').on('contextmenu', function(e) {
                  e.preventDefault();
                  if (mouthclix > 0) {
                      $(this).animate({ left: "+=367px" }, 500);
                      mouthclix -= 1
                  }
                 else if (mouthclix === 9) {
                    $(this).animate({ left: "0px" }, 500);
                    mouthclix = 0;
                }
              });

              //------Standard left Mouse Click ---------//
              $("#head").on('click', function() {
                  if (headclix < 9) {
                      $(this).animate({ left: "-=367px" }, 500);
                      headclix += 1
                  } else if (headclix === 9) {
                      $(this).animate({ left: "0px" }, 500);
                      headclix = 0;
                  }
              });

              $("#eyes").on('click', function() {
                  if (eyeclix < 9) {
                      $(this).animate({ left: "-=367px" }, 500);
                      eyeclix += 1;
                  } else {
                      $(this).animate({ left: "0px" }, 500);
                      eyeclix = 0;
                  }
              });

              $("#nose").on("click", function() {
                  $(this).animate({ left: "-=367px" }, 500);
                  if (noseclix < 9) {
                      noseclix += 1;
                  } else {
                      $(this).animate({ left: "0px" }, 500);
                      noseclix = 0;
                  }
              });

              $("#mouth").on("click", function() {
                  if (mouthclix < 9) {
                      $(this).animate({ left: "-=367px" }, 500);
                      mouthclix += 1;
                  } else {
                      $(this).animate({ left: "0px" }, 500);
                      mouthclix = 0;
                  }
              });
          });
//-------------------Lightning Functions-------------------------------
          function lightning_one() {
              $("#lightning1").fadeIn(250).fadeOut(250);
              setTimeout("lightning_one()", 4000);    
          }

          function lightning_two() {
              $("#lightning2").fadeIn(250).fadeOut(250);
              setTimeout("lightning_two()", 5000);
          }

          function lightning_three() {
              $("#lightning3").fadeIn(250).fadeOut(250);
              setTimeout("lightning_three()", 7000);
              audio.play(); 
          }