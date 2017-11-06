
var coolsola = {};


// Config
coolsola.setup = {
        mute: false,
        HTMLMode: false,
        style: {
            log: 'background: #FF00FF; color: #FFF; font-size:12px;',
            warn: 'background: yellow; color: #333; font-size:12px;',
            error: 'background: #E60000; color: #FFF; font-size:12px;',
            assert: 'background: #FABADA; color: #FFF; font-size:12px;'
        }
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
coolsola.msg = function(data, type){
        data = new Date().getTime() + " | " + data.trim();
    
        // Almacenar el dato
        coolsola.resources.messages.push(data)
    
        // Mostrar al usuario
        if(!coolsola.setup.mute){
            
             var paleta = ["log", "warn", "error", "assert"];
             
             if(type && paleta.indexOf(type) !== -1){
                 console.log('%c ' + data, coolsola.setup.style[type]);
             } else {
                 console.log(data);
             }

        }
        
        // Actualizar logger
        if(coolsola.setup.HTMLMode){
            coolsola.logger()
        }
        
    }
    
coolsola.msg("Coolsola - v.0.2.0: Cargado....", "warn");

  document.addEventListener("DOMContentLoaded", function(event) {
     if(coolsola.setup.HTMLMode){
        document.body.innerHTML += "<h3>Coolsola Logger!</h3><div id='coolsola'></div>"
        console.log(document.body)
        coolsola.msg("Coolsola - v.0.2.0: Cargado en HTML....");
     }
  });



    




