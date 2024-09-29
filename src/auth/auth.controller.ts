import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/SignUp.dto';
import { ConfirmSignUpDto } from './dto/confirm-signup.dto';
import { SignInDto } from './dto/signin.dto';
import {
  ConfirmSignUpCommandOutput,
  InitiateAuthCommandOutput,
  SignUpCommandOutput,
} from '@aws-sdk/client-cognito-identity-provider';

@Controller('auth')
export class AuthController {
  constructor(readonly cognitoService: AuthService) {}

  @Post('register')
  async signUp(@Body() signUpDto: SignUpDto): Promise<SignUpCommandOutput> {
    return await this.cognitoService.signUp(signUpDto);
  }

  @Post('confirmregister')
  async confirmSignUp(
    @Body() confirmSignUpDto: ConfirmSignUpDto,
  ): Promise<ConfirmSignUpCommandOutput> {
    return await this.cognitoService.confirmSignUp(confirmSignUpDto);
  }

  @Post('login')
  async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<InitiateAuthCommandOutput> {
    return await this.cognitoService.signIn(signInDto);
  }
}
