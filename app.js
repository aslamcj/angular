var express = require('express');
var app = express();
var fs = require('fs');

app.get('/public/portalplatform/json/securityQuestions/all', function(req, res) {
    fs.readFile(__dirname + '/' + 'security-questions.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/currentsprint/public/portalplatform/rest/userSignup/create', function(req, res) {
    fs.readFile(__dirname + '/' + 'signup.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/serviceproxy/endpoint/portal/workspace/json/selfActivateToken', function(req, res) {
    fs.readFile(__dirname + '/' + 'selfActivateToken.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/userReg/getUserId', function(req, res) {
    // res.status(503);
    fs.readFile(__dirname + '/' + 'user-validate.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/pkmslogin.form', function(req, res) {
setTimeout((function() {
	//res.status(503);
    fs.readFile(__dirname + '/' + 'user-login.json', 'utf8', function(err, data) {
        res.end(data);
    });
	}), 2000);
});

app.post('/public/portalplatform/eai/auth', function(req, res) {
    fs.readFile(__dirname + '/' + 'user-login.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/isTokenIssued', function(req, res) {
    fs.readFile(__dirname + '/' + 'is-token.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/event/eventstatus', function(req, res) {

    fs.readFile(__dirname + '/' + 'blockUser.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/basic', function(req, res) {
    fs.readFile(__dirname + '/' + 'basic-information.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/termsAndCondition/', function(req, res) {
    fs.readFile(__dirname + '/' + 'terms-data.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/securityQuestions/all/12345', function(req, res) {
    fs.readFile(__dirname + '/' + 'security-questions.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/rest/userSignup/create', function(req, res) {

    fs.readFile(__dirname + '/' + 'signup.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/serviceproxy/endpoint/portal/workspace/json/selfActivateToken', function(req, res) {
    fs.readFile(__dirname + '/' + 'selfActivateToken.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/userReg/getUserId/', function(req, res) {
    //res.status(503);
    fs.readFile(__dirname + '/' + 'user-validate.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/isTokenIssued', function(req, res) {
    fs.readFile(__dirname + '/' + 'is-token.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/event/eventstatus/', function(req, res) {
    fs.readFile(__dirname + '/' + 'blockUser.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/basic', function(req, res) {
    fs.readFile(__dirname + '/' + 'basic-information.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/termsAndCondition', function(req, res) {
    fs.readFile(__dirname + '/' + 'terms-data.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/customerTypes/all', function(req, res) {
    fs.readFile(__dirname + '/' + 'customer-types.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/userReg/validatesNewUserAlias', function(req, res) {
    fs.readFile(__dirname + '/' + 'userValidate.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/agreement/details', function(req, res) {
    fs.readFile(__dirname + '/' + 'legal.agreement.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get( '/content/mcc/config/termsofuse.jsonview-json.html', function ( req, res ) {
    fs.readFile( __dirname + "/" + "legal.agreement.json", 'utf8', function ( err, data ) {
        res.end( data );
    } );
} );

app.post('/public/portalplatform/json/userReg/validateNewUserEmail', function(req, res) {
    fs.readFile(__dirname + '/' + 'emailValidate.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get( "/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/targettingAttributes", function ( req, res ) {
    fs.readFile( __dirname + "/" + "myCompanyTargettingAttributes.json", 'utf8', function ( err, data ) {
        res.end( data );
    } );
} );

app.get( "/serviceproxy/endpoint/portal/workspace/json/dataServices/customerAccount", function ( req, res ) {
    fs.readFile( __dirname + "/" + "customerAccount.json", 'utf8', function ( err, data ) {
        res.end( data );
    } );
} );

//start of forgot password

app.get('/public/portalplatform/json/userReg/getUserId', function(req, res) {

    fs.readFile(__dirname + '/' + 'forgotPasswordGetUserType.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/event/eventstatus', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordEventStatus.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/forgotPinOrPassword/validatePassword/:userId', function(req, res) {

    fs.readFile(__dirname + '/' + 'forgotPasswordSecurityQuestions.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/rest/validateSecurityQA', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordValidateSecurityQA.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/json/submitForgotPin', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordsubmitForgotPin.json', 'utf8', function(err, data) {

        res.end(data);
    });
});
app.post('/public/portalplatform/rest/submitForgotPassword', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordsubmitForgotPassword.json', 'utf8', function(err, data) {

        res.end(data);
    });
});

app.get('/public/portalplatform/json/userReg/getUserId/:userId', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordSecurityQuestions.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
//Check user type - token or password user
app.get('/public/portalplatform/json/userReg/getUserId/userAlias=', function(req, res) {

    fs.readFile(__dirname + '/' + 'forgotPasswordCheckUserType.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/event/eventstatus/:userId', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordEventStatus.json', 'utf8', function(err, data) {
        res.end(data);
    });
});


app.post('/public/portalplatform/rest/validateSecurityQA', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordValidateSecurityQA.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/submitForgotPin', function(req, res) {
    fs.readFile(__dirname + '/' + 'forgotPasswordsubmitForgotPin.json', 'utf8', function(err, data) {

        res.end(data);
    });
});

app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/basic', function(req, res) {
    fs.readFile(__dirname + '/' + 'basic-info.json', 'utf8', function(err, data) {

        res.end(data);
    });
});

app.post('/serviceproxy/endpoint/portal/workspace/json/userProfile/update', function(req, res) {

    fs.readFile(__dirname + '/' + 'completeSetupform.xml', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/pkmspasswd.form', function(req, res) {
	setTimeout(function() {
		fs.readFile(__dirname + '/' + 'change-password.json', 'utf8', function(err, data) {
			res.end(data);
		});
	}, 2000);
});

app.get('/public/portalplatform/json/securityQuestions/all', function(req, res) {
    fs.readFile(__dirname + '/' + 'security-questions.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/replaceSecureId/validateUser/:userId', function(req, res) {
    fs.readFile(__dirname + '/' + 'replace-secureid.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/json/replaceSecureId/validateUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'replace-secureid.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/event/eventstatus', function(req, res) {
    fs.readFile(__dirname + '/' + 'eventstatus.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/rest/replaceSecureId/validateAnswers', function(req, res) {
    fs.readFile(__dirname + '/' + 'validateAnswers.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/rest/submitReplaceSecureId', function(req, res) {
    fs.readFile(__dirname + '/' + 'submitReplaceSecureid.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

//My Company
app.get('/serviceproxy/endpoint/portal/workspace/json/profile/organizationDetails', function(req, res) {
    fs.readFile(__dirname + '/' + 'organizationDetails.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/currentsprint/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'MemberLookUp.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/adminDetails/retrieveSAUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'retrieveSAUsers.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'companyList.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/MemberLookUp/checkSaRequirementMet', function(req, res) {
    fs.readFile(__dirname + '/' + 'checkSaRequirementMet.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/favorites', function(req, res) {
    fs.readFile(__dirname + '/' + 'favorites.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/favorites', function(req, res)
{
    fs.readFile(__dirname + '/' + 'addFavorite.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/favorites/:userFavoriteId/delete', function(req, res)
{
    fs.readFile(__dirname + '/' + 'deleteFavorites.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/targettingAttributes', function(req, res) {
    fs.readFile(__dirname + '/' + 'myCompanyTargettingAttributes.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/currentsprint/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'myCompanySearch.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/serviceproxy/endpoint/portal/workspace/json/dataServices/accounts', function(req, res) {
    fs.readFile(__dirname + '/' + 'myCompanygetAccounts.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/serviceproxy/endpoint/portal/workspace/json/adminDetails/retrieveSAUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'myCompanyRetrieveSAUsers.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/serviceproxy/endpoint/portal/workspace/json/dataServices/organizations', function(req, res) {
    fs.readFile(__dirname + '/' + 'myCompanyRelatedCompanies.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/adminDetails/retrieveSAUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'retrieveSAUsers.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'companyList.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/favorites/:userFavoriteId/delete', function(req, res) {
    fs.readFile(__dirname + '/' + 'deleteFavorites.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/json/MemberLookUp/checkSaRequirementMet', function(req, res) {
    fs.readFile(__dirname + '/' + 'checkSaRequirementMet.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/serviceproxy/endpoint/portal/workspace/json/profile/organizationDetails', function(req, res) {
    fs.readFile(__dirname + '/' + 'organizationDetails.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'MemberLookUp.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/targettingAttributesForMid', function(req, res) {
    fs.readFile(__dirname + '/' + 'targettingAttributesForMid.json', 'utf8', function(err, data) {
        res.end(data);
    });
});


app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/adminDetails/retrieveSAUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'retrieveSAUsers.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/MemberLookUp', function(req, res) {
    fs.readFile(__dirname + '/' + 'companyList.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/json/MemberLookUp/checkSaRequirementMet', function(req, res) {
    fs.readFile(__dirname + '/' + 'checkSaRequirementMet.json', 'utf8', function(err, data) {
        res.end(data);
    });
});


app.get('/currentsprint/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/targetedAlerts', function(req, res) {
    fs.readFile(__dirname + '/' + 'notificationAlert.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/countries/all', function(req, res) {
    fs.readFile(__dirname + '/' + 'country-list.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/serviceproxy/endpoint/portal/alertsservices/xml/alertsManagement/removeAlerts/consumer/320780', function(req, res) {
    fs.readFile(__dirname + '/' + 'removeNotificationAlert.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/serviceproxy/endpoint/portal/alertsservices/xml/alertsManagement/removeAlerts/consumer/320777', function(req, res) {
    fs.readFile(__dirname + '/' + 'removeNotificationAlert.json', 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/countries/USA/subdivisions', function(req, res) {
    fs.readFile(__dirname + '/' + 'stateList.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/countries/FR/subdivisions', function(req, res) {
    fs.readFile(__dirname + '/' + 'stateListFr.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/userReg/validateNewUserEmail', function(req, res) {
    fs.readFile(__dirname + '/' + 'emailValidate.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/isRequestPending', function(req, res) {
    fs.readFile(__dirname + '/' + 'isRequestPending.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/currentsprint/serviceproxy/endpoint/portal/workspace/rest/userProfile/update', function(req, res) {

    fs.readFile(__dirname + '/' + 'userProfileform.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get("/currentsprint/serviceproxy/endpoint/portal/workspace/json/products/availableProducts", function(req,res){
    fs.readFile(__dirname + "/" + "store-applications.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post( "/serviceproxy/endpoint/portal/workspace/json/dataServices/customerAccount", function ( req, res ) {
    fs.readFile( __dirname + "/" + "icaList.json", 'utf8', function ( err, data ) {
      res.end( data );
    } );
} );

app.get( "/serviceproxy/endpoint/portal/workspace/json/profile/currentUser/targettingAttributes", function ( req, res ) {
    fs.readFile( __dirname + "/" + "icaTargetAttr.json", 'utf8', function ( err, data ) {
        res.end( data );
    } );
} );

//Check user type - token or password user
app.get('/public/portalplatform/json/userReg/getUserId/userAlias=', function(req, res) {

    fs.readFile(__dirname + "/" + "forgotPasswordCheckUserType.json", 'utf8', function(err, data) {
        console.log("data", data);
        res.end(data);
    });
});
app.get('/public/portalplatform/json/event/eventstatus/:userId', function(req, res) {
    fs.readFile(__dirname + "/" + "forgotPasswordEventStatus.json", 'utf8', function(err, data) {
        console.log("data", data);
        res.end(data);
    });
});


app.post("/public/portalplatform/rest/validateSecurityQA", function(req, res) {
    fs.readFile(__dirname + "/" + "forgotPasswordValidateSecurityQA.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post("/public/portalplatform/json/submitForgotPin", function(req, res) {
    fs.readFile(__dirname + "/" + "forgotPasswordsubmitForgotPin.json", 'utf8', function(err, data) {

        res.end(data);
    });
});

app.post("/currentsprint/serviceproxy/endpoint/portal/workspace/json/userProfile/update", function(req, res) {

    fs.readFile(__dirname + "/" + "completeSetupform.xml", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post("/pkmspasswd.form", function(req, res) {
    fs.readFile(__dirname + "/" + "change-password.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/securityQuestions/all', function(req, res) {
    fs.readFile(__dirname + "/" + "security-questions.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get('/public/portalplatform/json/replaceSecureId/validateUser/:userId', function(req, res) {
    fs.readFile(__dirname + "/" + "replace-secureid.json", 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/json/replaceSecureId/validateUser', function(req, res) {
    fs.readFile(__dirname + "/" + "replace-secureid.json", 'utf8', function(err, data) {
        res.end(data);
    });
});
app.get('/public/portalplatform/json/event/eventstatus', function(req, res) {
    fs.readFile(__dirname + "/" + "eventstatus.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post('/public/portalplatform/rest/replaceSecureId/validateAnswers', function(req, res) {
    fs.readFile(__dirname + "/" + "validateAnswers.json", 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/public/portalplatform/rest/submitReplaceSecureId', function(req, res) {
    fs.readFile(__dirname + "/" + "submitReplaceSecureid.json", 'utf8', function(err, data) {
        res.end(data);
    });
});
app.post('/serviceproxy/endpoint/portal/workspace/json/selfChangePinToken', function(req, res) {
    fs.readFile(__dirname + '/change-pin.json', 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get("/serviceproxy/endpoint/metabase/Entities/Extranet/ContactUsSubject", function(req, res) {
    fs.readFile(__dirname + "/" + "contact-us-subject.xml", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.get("/serviceproxy/endpoint/metabase/Entities/Extranet/ContactUsTopic", function(req, res) {
    fs.readFile(__dirname + "/" + "contact-us-topic.xml", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.post("/serviceproxy/endpoint/portal/workspace/json/B2BMessageService/contactUs", function(req, res) {
    fs.readFile(__dirname + "/" + "contact-us.json", 'utf8', function(err, data) {
        res.end(data);
    });
});

app.listen(3000);
