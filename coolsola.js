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


coolsola.msg("NO Estoy en Mute....")

coolsola.setup.mute = true;

coolsola.msg("Estoy en Mute....")

coolsola.setup.mute = false;

coolsola.msg("NO Estoy en Mute....")