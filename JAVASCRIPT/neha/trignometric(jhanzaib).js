<script type= "text/javascript">
    function trignometric()
    {
    alert("You are using trignometric identities");
    var value=prompt("Enter a number"); // asks user for input
    Math.sin(value);
    Math.cos(value);
    Math.tan(value);
    alert("The value for sin is: "+Math.sin(value));
    alert("The value for cos is: "+Math.cos(value));
    alert("The value for tan is: "+Math.tan(value));
    }
    
    function main()
    {
        alert("Enter choice\n1)Trig\n2)Exit ");
        var chce=prompt("");
        if (chce==1)
        {
            trignometric.call(); //calls trignometric function
        }
        else{
            alert("bye")
        }
    
    }
    main.call(); //calls main function 
    </script>