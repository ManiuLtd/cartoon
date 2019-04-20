import Common from '@/common/common';
export const getLang=function(lang){
    lang= lang.toLowerCase();
    // Common.log("-----"+lang);
    if(lang){
        lang=lang.replace(/-/gi,'_')
    }else{
        lang='en'
    }
    var langObj=require("./"+lang+".js");
    // Common.log(langObj,"---------");
    return langObj.default;
};