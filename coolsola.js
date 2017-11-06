
var coolsola = {};


// Config
coolsola.setup = {
        mute: false,
        HTMLMode: false
    };

coolsola.resources = {
    messages: []
}

coolsola.logger = function(){
    var element = document.getElementById("coolsola")
    if(element){
        var htmlContent = ""
        
        coolsola.resources.messages.forEach(function(item){
            htmlContent += "<p>"+item+"</p>"
        })
        
        element.innerHTML = htmlContent;
    }
    
    
}

// Métodos
coolsola.msg = function(data){
        data = new Date().getTime() + " | " + data.trim();
    
        // Almacenar el dato
        coolsola.resources.messages.push(data)
    
        // Mostrar al usuario
        if(!coolsola.setup.mute){
            console.log(data)
        }
        
        // Actualizar logger
        if(coolsola.setup.HTMLMode){
            coolsola.logger()
        }
        
    }
    
coolsola.msg("Coolsola - v.0.2.0: Cargado....");

  document.addEventListener("DOMContentLoaded", function(event) {
     if(coolsola.setup.HTMLMode){
        document.body.innerHTML += "<h3>Coolsola Logger!</h3><div id='coolsola'></div>"
        console.log(document.body)
        coolsola.msg("Coolsola - v.0.2.0: Cargado en HTML....");
     }
  });



    




