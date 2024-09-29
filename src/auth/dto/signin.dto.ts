import { IsNotEmpty, IsString, Length } from 'class-validator';
import { SignUpDto } from './SignUp.dto';

export class SignInDto extends SignUpDto {
  @IsString()
  @Length(1, 128)
  @IsNotEmpty()
  username: string;

  @IsString()
  @Length(6, 128)
  @IsNotEmpty()
  password: string;
}
