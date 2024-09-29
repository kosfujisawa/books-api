"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Cognito = require("@aws-sdk/client-cognito-identity-provider");
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor() {
        this.region = 'ap-southeast-2';
        this.userPoolId = 'ap-southeast-2_cBcKFXV6s';
        this.clientId = '75if5eu8mdiv70e7pis98dpj72';
        this.authFlow = Cognito.AuthFlowType.USER_PASSWORD_AUTH;
        this.cognitoIdpClient = new Cognito.CognitoIdentityProviderClient({
            region: this.region
        });
    }
    async signUp({ username, password, email }) {
        return await this.cognitoIdpClient.send(new Cognito.SignUpCommand({
            ClientId: this.clientId,
            Username: username,
            Password: password,
            UserAttributes: [{
                    Name: 'email',
                    Value: email
                }]
        }));
    }
    async confirmSignUp({ username, confirmationCode }) {
        return await this.cognitoIdpClient.send(new Cognito.ConfirmSignUpCommand({
            ClientId: this.clientId,
            Username: username,
            ConfirmationCode: confirmationCode
        }));
    }
    async signIn({ username, password }) {
        return await this.cognitoIdpClient.send(new Cognito.InitiateAuthCommand({
            AuthFlow: this.authFlow,
            ClientId: this.clientId,
            UserPoolId: this.userPoolId,
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password
            }
        }));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map