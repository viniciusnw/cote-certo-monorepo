import { createUnionType } from 'type-graphql';

import { Seller } from 'resolvers/User/types/seller.object-type'
import { Customer } from 'resolvers/User/types/customer.object-type'

export const UserUnion = createUnionType({
  name: "User",
  types: () => [Customer, Seller]
});
