import { AuthService } from './auth.service';
import { ConfirmSignUpCommandOutput, InitiateAuthCommandOutput, SignUpCommandOutput } from '@aws-sdk/client-cognito-identity-provider';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
export declare class AuthController {
    readonly cognitoService: AuthService;
    constructor(cognitoService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<SignUpCommandOutput>;
    confirmSignUp(confirmSignUpDto: ConfirmSignUpDto): Promise<ConfirmSignUpCommandOutput>;
    signIn(signInDto: SignInDto): Promise<InitiateAuthCommandOutput>;
}
