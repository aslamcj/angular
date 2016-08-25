var envLocalVars = {
    aemPublicPath: '',
    aemProtectedPath: '',
    scriptPublicPath: '',
    scriptProtectedPath: '',
    publicFolderPath: '/',
    protectedFolderPath: '/',
    apiPath: ''
};
var envDevVars = {
    aemPublicPath: process.env.AEM_DEV_PUBLIC_PATH,
    aemProtectedPath: process.env.AEM_DEV_PROTECTED_PATH,
    scriptPublicPath: process.env.APP_DEV_PUBLIC_PATH,
    scriptProtectedPath: process.env.APP_DEV_PROTECTED_PATH,
    publicFolderPath: process.env.APP_DEV_PUBLIC_FOLDER,
    protectedFolderPath: process.env.APP_DEV_PROTECTED_FOLDER,
    apiPath: process.env.APP_DEV_API
};
var envStagingVars = {
    aemPublicPath: process.env.AEM_STAGE_PUBLIC_PATH,
    aemProtectedPath: process.env.AEM_STAGE_PROTECTED_PATH,
    scriptPublicPath: process.env.APP_STAGE_PUBLIC_PATH,
    scriptProtectedPath: process.env.APP_STAGE_PROTECTED_PATH,
    publicFolderPath: process.env.APP_STAGE_PUBLIC_FOLDER,
    protectedFolderPath: process.env.APP_STAGE_PROTECTED_FOLDER,
    apiPath: process.env.APP_STAGE_API
};
var envUatVars = {
    aemPublicPath: process.env.AEM_UAT_PUBLIC_PATH,
    aemProtectedPath: process.env.AEM_UAT_PROTECTED_PATH,
    scriptPublicPath: process.env.APP_UAT_PUBLIC_PATH,
    scriptProtectedPath: process.env.APP_UAT_PROTECTED_PATH,
    publicFolderPath: process.env.APP_UAT_PUBLIC_FOLDER,
    protectedFolderPath: process.env.APP_UAT_PROTECTED_FOLDER,
    apiPath: process.env.APP_UAT_API
};
var envProductionVars = {
    aemPublicPath: process.env.AEM_PROD_PUBLIC_PATH,
    aemProtectedPath: process.env.AEM_PROD_PROTECTED_PATH,
    scriptPublicPath: process.env.APP_PROD_PUBLIC_PATH,
    scriptProtectedPath: process.env.APP_PROD_PROTECTED_PATH,
    publicFolderPath: process.env.APP_PROD_PUBLIC_FOLDER,
    protectedFolderPath: process.env.APP_PROD_PROTECTED_FOLDER,
    apiPath: process.env.APP_PROD_API
};
//You would change the contents of the various envs as you would like
module.exports = {
    local: {
        ENV: envLocalVars
    },
    dev: {
        ENV: envDevVars
    },
    stage: {
        ENV: envStagingVars
    },
    uat: {
        ENV: envUatVars
    },
    prod: {
        ENV: envProductionVars
    }
};
