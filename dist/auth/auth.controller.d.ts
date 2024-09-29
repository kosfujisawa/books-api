import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
import { ConfirmSignUpCommandOutput, InitiateAuthCommandOutput, SignUpCommandOutput } from '@aws-sdk/client-cognito-identity-provider';
export declare class AuthController {
    readonly cognitoService: AuthService;
    constructor(cognitoService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<SignUpCommandOutput>;
    confirmSignUp(confirmSignUpDto: ConfirmSignUpDto): Promise<ConfirmSignUpCommandOutput>;
    signIn(signInDto: SignInDto): Promise<InitiateAuthCommandOutput>;
}
