function SwitchLoginTab(type){
    if(type=='R'){
        $("#divSignUp").show();
        $("#divSignIn").hide();
    }
    else{
        $("#divSignUp").hide();
        $("#divSignIn").show();        
    }
}