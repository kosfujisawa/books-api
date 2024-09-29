import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
import {
  AttributeType,
  AuthFlowType,
  CognitoIdentityProviderClient,
  CognitoIdentityProviderClientConfig,
  ConfirmSignUpCommand,
  ConfirmSignUpCommandInput,
  ConfirmSignUpCommandOutput,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
  InitiateAuthCommandOutput,
  SignUpCommand,
  SignUpCommandInput,
  SignUpCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider';

@Injectable()
export class AuthService {
  private region: string = 'ap-southeast-2';
  private userPoolId: string = 'ap-southeast-2_cBcKFXV6s';
  private clientId: string = '75if5eu8mdiv70e7pis98dpj72';
  private authFlow: AuthFlowType = AuthFlowType.USER_PASSWORD_AUTH;
  private cognitoIdpClient: CognitoIdentityProviderClient =
    new CognitoIdentityProviderClient({
      region: this.region,
    } as CognitoIdentityProviderClientConfig);

  async signUp({
    username,
    password,
    email,
  }: SignUpDto): Promise<SignUpCommandOutput> {
    return await this.cognitoIdpClient.send(
      new SignUpCommand({
        ClientId: this.clientId,
        Username: username,
        Password: password,
        UserAttributes: [
          {
            Name: 'email',
            Value: email,
          } as AttributeType,
        ],
      } as SignUpCommandInput),
    );
  }

  async confirmSignUp({
    username,
    confirmationCode,
  }: ConfirmSignUpDto): Promise<ConfirmSignUpCommandOutput> {
    return await this.cognitoIdpClient.send(
      new ConfirmSignUpCommand({
        ClientId: this.clientId,
        Username: username,
        ConfirmationCode: confirmationCode,
      } as ConfirmSignUpCommandInput),
    );
  }

  async signIn({
    username,
    password,
  }: SignInDto): Promise<InitiateAuthCommandOutput> {
    return await this.cognitoIdpClient.send(
      new InitiateAuthCommand({
        AuthFlow: this.authFlow,
        ClientId: this.clientId,
        UserPoolId: this.userPoolId,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password,
        } as Record<string, string>,
      } as InitiateAuthCommandInput),
    );
  }
}
