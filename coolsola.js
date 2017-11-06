var coolsola = {};

// Config
coolsola.setup = {
        mute: false
    };
    
// Métodos
coolsola.msg = function(data){
        if(!coolsola.setup.mute){
            console.log(data)
        }
    }

console.log("Coolsola - v.0.2.0: Cargado....");
