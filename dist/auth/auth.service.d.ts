import { Model } from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User, UserDocument } from './entity/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(user: User): Promise<{
        accessToken: string;
    }>;
    validateUser(authCredentialsDto: AuthCredentialsDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
