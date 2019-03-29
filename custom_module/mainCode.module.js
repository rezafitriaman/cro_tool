"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mainCode() {
    var mainCode_str = "\nimport {Module, FindTargetFirst, Debounce} from \"./utility\"\n\n/*\n==============================\nBEGIN CUSTOM CODE | DYNAMIC\ndont forget to set DEVELOP to FALSE for production!!\n==============================\n*/\n\n@Module({\n    develop: true,\n    style: `<style id=\"t4u-custom-style\"></style>`,\n    testId:  '0000',\n    urlReplaced: 'origin_url_string'\n})\nclass V1 {\n    log : Function; // CUSTOM LOG()\n    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY\n    language : Function; // DETECT LANGUAGE\n    country : Function; // DETECT COUNTRY\n    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE\n    delay : Function; // DELAY FUNCTION - IT MADE WITH A PROMISE(); \n    constructor() {\n    // code...\n    }\n    cunstomCode() {\n\n    }\n}\n\n/*\n==============================\nVARIATION 1 / 2 / 3 / 4 | INIT\n==============================\n*/\n\nlet variationOne:any = new V1();\nvariationOne.cunstomCode();\n\n/*\n==============================\nEND CUSTOM CODE\n==============================\n*/";
    return mainCode_str;
}
exports.mainCode = mainCode;
