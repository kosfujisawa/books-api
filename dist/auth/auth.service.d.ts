import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
import { ConfirmSignUpCommandOutput, InitiateAuthCommandOutput, SignUpCommandOutput } from '@aws-sdk/client-cognito-identity-provider';
export declare class AuthService {
    private region;
    private userPoolId;
    private clientId;
    private authFlow;
    private cognitoIdpClient;
    signUp({ username, password, email, }: SignUpDto): Promise<SignUpCommandOutput>;
    confirmSignUp({ username, confirmationCode, }: ConfirmSignUpDto): Promise<ConfirmSignUpCommandOutput>;
    signIn({ username, password, }: SignInDto): Promise<InitiateAuthCommandOutput>;
}
