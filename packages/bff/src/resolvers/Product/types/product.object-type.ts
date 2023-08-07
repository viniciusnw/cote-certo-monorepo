import { createUnionType, registerEnumType } from 'type-graphql';

import { ProductCompare } from './product-compare.object-type'
import { ProductComparison } from './product-comparison.object-type'
import { ProductFavorites } from './product-favorites.object-type'
import { ProductFull } from './product-full.object-type'
import { ProductHalf } from './product-half.object-type'
import { ProductHorizontal } from './product-horizontal.object-type'

export enum ProductEnum {
  Compare = 'ProductCompare',
  Comparison = 'ProductComparison',
  Favorites = 'ProductFavorites',
  Full = 'ProductFull',
  Half = 'ProductHalf',
  Horizontal = 'ProductHorizontal'
}

export const ProductUnion = createUnionType({
  name: "Product",
  types: () => [
    ProductCompare,
    ProductComparison,
    ProductFavorites,
    ProductFull,
    ProductHalf,
    ProductHorizontal
  ]
});

registerEnumType(ProductEnum, {
  name: "ProductEnum",
  description: "List of Products types",
});