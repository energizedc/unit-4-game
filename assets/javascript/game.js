    ///////////////////////////////////////////////////////////////////////////////////
    //
    //    TA's and Alex, i am turning in what i have done on this assignment.  as stated 
    //   during office hours, when i try to run the Javascript portion "onclick"
    //    the program does not acknowledge that i am clicking.   Donna
    //////////////////////////////////////////////////////////////////////////////////

    //  This code will run as soon as the page loads.
    $( document ).ready(function(){


    // The Goal num should be a random number between 19-120
    // The crystals should be a random number between 1-12 (hidden)
    
    
    var goalNum = 0;;
    var userTot = 0;
    var wins = 0;
    var losses = 0;
    var green1, orange1, purple1, red1;
    
    // get random numers for new game
    function reset() {
        green1 = Math.floor(Math.random() * 11 + 1);
        orange1 = Math.floor(Math.random() * 11 + 1);
        purple1 = Math.floor(Math.random() * 11 + 1);
        red1 = Math.floor(Math.random() * 11 + 1);
        goalNum = Math.floor(Math.random() * 101 + 19);
        userTot = 0;
        wins = 0;
        losses = 0;
    
     //   console.log(green1);
     //   console.log(goalNum);
    
        return (green1, orange1, purple1, red1, userTot, wins, losses);
    }
    reset()
    
    //clear scores for new run   //
    
    $("#goalNum").text("Goal: " + goalNum)
    $("#userScore").text("Your score: " + userTot)
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
    
    
    console.log("goalNum" + goalNum);

     //////////////////////////////////////
     ////  functions for on click    //////
     //                              ////// 
     //////////////////////////////////////
    
    //setting up click functions logic   RED
    function addRed(){
        console.log("we are here R");
        userTot = userTot + red1;
        $("#userScore").text("Your score: " + userTot);
        console.log("after red click" + red1);
        
        if (userTot === goalNum){
                 Alert("Yayyyyy  You Won !");
                 wins++;
                 $("#wins").text("Wins: " + wins);
                     console.log("usertotwin" + wins);
                     console.log(userTot);  
                 reset()    
         }
         if (userTot > goalNum){
                 Alert("OUCH !  You lost, try again !");
                 losses++;
                 $("#losses").text("Losses: " + losses);
                     console.log("usertotloss" + userTot);
                 reset()  
         }
         if (userTot < goalNum){
                Alert("...almost there, click another crystal...");
           }
     }
        
    //setting up click functions logic   GREEN
    function addGreen(){
            userTot = userTot + green1;
            $("#userScore").text("Your score: " + userTot);
            console.log("after green click" + green1);
        
        if (userTot === goalNum){
                Alert("Yayyyyy  You Won !");
                wins++;
                $("#wins").text("Wins: " + wins);
                    console.log("usertotwin" + wins);
                    console.log(userTot);  
                reset()    
        }
        if (userTot > goalNum){
                Alert("OUCH !  You lost, try again !");
                losses++;
                $("#losses").text("Losses: " + losses);
                    console.log("usertotloss" + userTot);
                reset()  
        }
        if (userTot < goalNum){
                Alert("...almost there, click another crystal...");
                
          }
        }
    
        //setting up click functions logic   ORANGE
            function addOrange(){
            userTot = userTot + orange1;
            $("#userScore").text("Your score: " + userTot);
            console.log("after orange click" + orange1);
        
        if (userTot === goalNum){
                Alert("Yayyyyy  You Won !");
                wins++;
                $("#wins").text("Wins: " + wins);
                    console.log("user win" + wins);
                    console.log(userTot);  
                reset()    
        }
        if (userTot > goalNum){
                Alert("OUCH !  You lost, try again !");
                losses++;
                $("#losses").text("Losses: " + losses);
                    console.log("usertotloss" + userTot);
                reset()  
        }
        if (userTot < goalNum){
                Alert("...almost there, click another crystal...");
                
          }
        }
    
    //setting up click functions logic   PURPLE
    function addPurple(){
        userTot = userTot + purple1;
        $("#userScore").text("Your score: " + userTot);   
        console.log("after purple click" + purple1);
        
        if (userTot === goalNum){
                Alert("Yayyyyy  You Won !");          
                wins++;
                $("#wins").text("Wins: " + wins);
                    console.log("usertotwin" + wins);
                    console.log(userTot);  
                reset()    
        }
        if (userTot > goalNum){
                Alert("OUCH !  You lost, try again !");
                losses++;
                $("#losses").text("Wins: " + losses);
                    console.log("usertotloss" + userTot);
                reset()  
        }
        if (userTot < goalNum){
                Alert("...almost there, click another crystal...");
                
          }
        }
    console.log($("#red"));
    
    ///////////////////////////////////////////////////////////
    ///   Here we are setting up the initial 'clicks         //
    //     These dont seem to be working.                    //
    ///////////////////////////////////////////////////////////
    $("#red").click(addRed); 
    $("#purple").click(addPurple);
    $("#orange").click(addOrange);
    $("#green").click(addGreen);
            
    })