import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExpressJwtOptions, passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy, StrategyOptionsWithSecret } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri:
          'https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_cBcKFXV6s/.well-known/jwks.json',
      } as ExpressJwtOptions),
    } as StrategyOptionsWithSecret);
  }

  async validate(): Promise<any> {
    return {} as any;
  }
}
