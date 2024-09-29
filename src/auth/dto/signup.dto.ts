import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {
  @IsString()
  @Length(1, 128)
  @IsNotEmpty()
  username: string;

  @IsString()
  @Length(6, 128)
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @Length(1, 256)
  @IsNotEmpty()
  email: string;
}
