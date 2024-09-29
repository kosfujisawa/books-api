import * as Cognito from '@aws-sdk/client-cognito-identity-provider';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
export declare class AuthService {
    private region;
    private userPoolId;
    private clientId;
    private authFlow;
    private cognitoIdpClient;
    signUp({ username, password, email }: SignUpDto): Promise<Cognito.SignUpCommandOutput>;
    confirmSignUp({ username, confirmationCode }: ConfirmSignUpDto): Promise<Cognito.ConfirmSignUpCommandOutput>;
    signIn({ username, password }: SignInDto): Promise<Cognito.InitiateAuthCommandOutput>;
}
