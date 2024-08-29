# SCiSSors Guidelines

The goal with the `@quangdao/scissors` package is to house commonly used SCSS utilities (mixins, functions, etc) that are not specific to the brand.

### Don't: Declare actual CSS in `@quangdao/scissors`

Style rules should strictly be isolated to the appropriate component or global style. Declarations in `scissors` should not generate any CSS on their own unless referred to explicitly.