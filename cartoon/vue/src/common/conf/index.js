let api={
    dev:require('../api/api.dev'),
    prod:require('../api/api.prod'),
    test:require('../api/api.test'),
}
let apiConfig=loadApi(process.env.API_HOST)

function loadApi(key){
    if(!api[key]){
        return api['prod'];
    }   
    return api[key]
}

export default apiConfig