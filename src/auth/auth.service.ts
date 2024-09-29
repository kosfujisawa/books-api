import * as Cognito from '@aws-sdk/client-cognito-identity-provider';
import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
    private region: string = 'ap-southeast-2';
    private userPoolId: string = 'ap-southeast-2_cBcKFXV6s';
    private clientId: string = '75if5eu8mdiv70e7pis98dpj72';
    private authFlow: Cognito.AuthFlowType = Cognito.AuthFlowType.USER_PASSWORD_AUTH;
    private cognitoIdpClient: Cognito.CognitoIdentityProviderClient = new Cognito.CognitoIdentityProviderClient({
        region: this.region
    } as Cognito.CognitoIdentityProviderClientConfig);
    
    async signUp({
        username,
        password,
        email
    }: SignUpDto): Promise<Cognito.SignUpCommandOutput> {

        return await this.cognitoIdpClient.send(new Cognito.SignUpCommand({
            ClientId: this.clientId,
            Username: username,
            Password: password,
            UserAttributes: [{
                Name: 'email',
                Value: email
            } as Cognito.AttributeType]
        } as Cognito.SignUpCommandInput));
    }

    async confirmSignUp({
        username,
        confirmationCode
    }: ConfirmSignUpDto): Promise<Cognito.ConfirmSignUpCommandOutput> {

        return await this.cognitoIdpClient.send(new Cognito.ConfirmSignUpCommand({
            ClientId: this.clientId,
            Username: username,
            ConfirmationCode: confirmationCode
        } as Cognito.ConfirmSignUpCommandInput));
    }
    
    async signIn({
        username,
        password
    }: SignInDto): Promise<Cognito.InitiateAuthCommandOutput> {

        return await this.cognitoIdpClient.send(new Cognito.InitiateAuthCommand({
            AuthFlow: this.authFlow,
            ClientId: this.clientId,
            UserPoolId: this.userPoolId,
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password
            } as Record<string, string>
        } as Cognito.InitiateAuthCommandInput));
    }
}