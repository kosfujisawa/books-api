import { IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

export class ConfirmSignUpDto {
    @IsString()
    @Length(1, 128)
    @IsNotEmpty()
    username :string;

    @IsNumberString()
    @Length(6, 6)
    @IsNotEmpty()
    confirmationCode: string;
}