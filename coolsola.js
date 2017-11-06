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
