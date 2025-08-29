const installService = require('./../services/install.service.js')

async function installController(req,res,next) {
    const initialMessage = await installService.install();
    if(initialMessage.status === 200){
        res.status(200).json({
            message: initialMessage
        })
    }else{
        res.status(500).json({
            message: initialMessage
        })
    }
}

module.exports =  installController