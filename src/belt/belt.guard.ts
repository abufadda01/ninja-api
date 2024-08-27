import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // get the request obj from the context so we have access to all req object properties
    const request = context.switchToHttp().getRequest()
    
    // this boolean value returns depends on our validate logic (authentication)
    // and based on it we give user permission to access this route
    return true;
  }
}
