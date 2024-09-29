import { ClassProvider, Module, ModuleMetadata } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { APP_FILTER } from '@nestjs/core';
import { AuthExceptionFilter } from './auth.exception-filter';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        {
            provide: APP_FILTER,
            useClass: AuthExceptionFilter,
        } as ClassProvider
    ]
} as ModuleMetadata)
export class AuthModule {}