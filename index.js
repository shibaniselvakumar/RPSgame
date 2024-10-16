var options=["rock","paper","scissors"];
var randomnumber=Math.floor(Math.random()*3);
var myOption=options[randomnumber];



    $(".btn").click(function(){
        var userOption=$(this).attr("id");
        $("h1").css("color","white");

        $(".btn").hide();
        $("#"+myOption).show().append("<p>PC's Option</p>");
        $("#"+userOption).show().append("<p>Your Option</p>");
        if(myOption==userOption){
            $("h1").text("Try again!😉")
        }
        else if((myOption=="paper"&&userOption=="rock")||(myOption=="rock"&&userOption=="scissors")||(myOption=="scissors"&&userOption=="paper")){
            $("h1").text("You lose! HAHA😂");
        }
        else if((userOption=="paper"&&myOption=="rock")||(userOption=="rock"&&myOption=="scissors")||(userOption=="scissors"&&myOption=="paper")){
            $("h1").text("You win!YAYY🥳");
        }
    });
