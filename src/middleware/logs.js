const logRequest = (req, res, next) =>{
    console.log('Request ke PATH :', req.path);
    console.log(req.body)
    next();
}

module.exports ={
    logRequest
}