import { ExceptionFilter, Catch, ArgumentsHost, UnauthorizedException } from '@nestjs/common';

@Catch(UnauthorizedException)
export class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost): void {
        const statusCode: number = 403;
        host.switchToHttp().getResponse().status(statusCode).json({
            statusCode,
            message: exception.message,
        } as any);
    }
}