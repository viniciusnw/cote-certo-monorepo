import { Service } from "typedi";
import { JwtService, encrypt, decrypt } from "core/services";
import { Customer } from "resolvers/User/types/customer.object-type";
import { Seller } from "resolvers/User/types/seller.object-type";

@Service()
export class AuthRepository {
  constructor(private jwtService: JwtService) { }

  public createCustomerToken(user: Customer | Seller, retoken: string): string {
    const client = { ...user };
    const payload = { client, retoken, role: typeof user };
    const token = this.jwtService.sign(payload, true);
    return token;
  }

  public createReToken({ email, password }): string {
    return encrypt({ email, password });
  }

  public getReToken({ retoken }): string {
    return decrypt(retoken);
  }
}
