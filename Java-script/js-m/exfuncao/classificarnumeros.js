function classificaNumero(num) {

    if(num > 0) {

        if(num % 2 == 0) {
            console.log("Positivo e Par!");
            return;
        }
        
        else {
            console.log("Positivo e impar!");
            return;
        }
    } 
    
    if( num < 0) 
    {
        if(num % 2 == 0) {
            console.log("Negativo e par");
            return;
        }
        
        else {
            console.log("Negativo e impar");
            return;
        }
    }
    
    else {
        console.log("zero");
        return;
    }
}

classificaNumero(0);