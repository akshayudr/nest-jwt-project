import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(authCredentialsDto: AuthCredentialsDto): Promise<import("../entity/user.schema").User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
export {};
