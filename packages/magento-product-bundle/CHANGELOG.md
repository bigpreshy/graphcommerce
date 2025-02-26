# Change Log

## 4.0.27

### Patch Changes

- Updated dependencies [[`d205b037f`](https://github.com/graphcommerce-org/graphcommerce/commit/d205b037fee82b8c03993f2c586f477e826093bf)]:
  - @graphcommerce/magento-cart@4.4.1
  - @graphcommerce/magento-cart-items@3.0.28
  - @graphcommerce/magento-product@4.4.5
  - @graphcommerce/magento-product-simple@4.0.27
  - @graphcommerce/magento-product-virtual@4.0.27

## 4.0.26

### Patch Changes

- Updated dependencies [[`bed806ddd`](https://github.com/graphcommerce-org/graphcommerce/commit/bed806dddd7e025806a69798ef9587aa165d392f)]:
  - @graphcommerce/graphql@3.2.0
  - @graphcommerce/magento-cart@4.4.0
  - @graphcommerce/magento-cart-items@3.0.27
  - @graphcommerce/magento-product@4.4.4
  - @graphcommerce/magento-product-simple@4.0.26
  - @graphcommerce/magento-product-virtual@4.0.26

## 4.0.25

### Patch Changes

- Updated dependencies []:
  - @graphcommerce/magento-cart@4.3.4
  - @graphcommerce/magento-cart-items@3.0.26
  - @graphcommerce/magento-product@4.4.3
  - @graphcommerce/magento-product-simple@4.0.25
  - @graphcommerce/magento-product-virtual@4.0.25

## 4.0.24

### Patch Changes

- Updated dependencies [[`c63ab89c2`](https://github.com/graphcommerce-org/graphcommerce/commit/c63ab89c20cb81d79188900d57f3d65a7bba71cc)]:
  - @graphcommerce/magento-product@4.4.2
  - @graphcommerce/magento-cart-items@3.0.25
  - @graphcommerce/magento-product-simple@4.0.24
  - @graphcommerce/magento-product-virtual@4.0.24
  - @graphcommerce/magento-cart@4.3.3

## 4.0.23

### Patch Changes

- Updated dependencies [[`d6262de71`](https://github.com/graphcommerce-org/graphcommerce/commit/d6262de71d2254a2b0b492e1a60f9e141767470e), [`e3005fe63`](https://github.com/graphcommerce-org/graphcommerce/commit/e3005fe6306093d47b08c6756c21c8175649e30b)]:
  - @graphcommerce/magento-cart@4.3.2
  - @graphcommerce/magento-cart-items@3.0.24
  - @graphcommerce/magento-product@4.4.1
  - @graphcommerce/magento-product-simple@4.0.23
  - @graphcommerce/magento-product-virtual@4.0.23

## 4.0.22

### Patch Changes

- Updated dependencies [[`b359fe252`](https://github.com/graphcommerce-org/graphcommerce/commit/b359fe252a50bb8195601ba97c3eef6a7be146ba)]:
  - @graphcommerce/magento-product@4.4.0
  - @graphcommerce/magento-cart@4.3.1
  - @graphcommerce/magento-cart-items@3.0.23
  - @graphcommerce/magento-product-simple@4.0.22
  - @graphcommerce/magento-product-virtual@4.0.22

## 4.0.21

### Patch Changes

- Updated dependencies [[`cf575395c`](https://github.com/graphcommerce-org/graphcommerce/commit/cf575395c16e9c571f75d4563004c3018a29aeaa)]:
  - @graphcommerce/magento-cart@4.3.0
  - @graphcommerce/magento-cart-items@3.0.22
  - @graphcommerce/magento-product@4.3.6
  - @graphcommerce/magento-product-simple@4.0.21
  - @graphcommerce/magento-product-virtual@4.0.21

## 4.0.20

### Patch Changes

- Updated dependencies [[`c6a62a338`](https://github.com/graphcommerce-org/graphcommerce/commit/c6a62a338abf8af83d3a6eb7ed796586009910ca), [`ed2b67a06`](https://github.com/graphcommerce-org/graphcommerce/commit/ed2b67a0618d9db97e79ed2a8226e0ae12403943)]:
  - @graphcommerce/magento-product@4.3.5
  - @graphcommerce/magento-cart@4.2.15
  - @graphcommerce/magento-cart-items@3.0.21
  - @graphcommerce/magento-product-simple@4.0.20
  - @graphcommerce/magento-product-virtual@4.0.20

## 4.0.19

### Patch Changes

- Updated dependencies []:
  - @graphcommerce/magento-cart@4.2.14
  - @graphcommerce/magento-cart-items@3.0.20
  - @graphcommerce/magento-product@4.3.4
  - @graphcommerce/magento-product-simple@4.0.19
  - @graphcommerce/magento-product-virtual@4.0.19

## 4.0.18

### Patch Changes

- [#1451](https://github.com/graphcommerce-org/graphcommerce/pull/1451) [`f698ff85d`](https://github.com/graphcommerce-org/graphcommerce/commit/f698ff85df6bb0922288471bb3c81856091b8061) Thanks [@paales](https://github.com/paales)! - Removed all occurences of @lingui/macro and moved to @lingui/macro / @lingui/core in preparation to move to swc.

  Since we've removed @lingui/macro, all occurences need to be replaced with @lingui/core and @lingui/react.

  All occurences of `<Trans>` and `t` need to be replaced:

  ```tsx
  import { Trans, t } from '@lingui/macro'

  function MyComponent() {
    const foo = 'bar'
    return (
      <div aria-label={t`Account ${foo}`}>
        <Trans>My Translation {foo}</Trans>
      </div>
    )
  }
  ```

  Needs to be replaced with:

  ```tsx
  import { Trans } from '@lingui/react'
  import { i18n } from '@lingui/core'

  function MyComponent() {
    const foo = 'bar'
    return (
      <div aria-label={i18n._(/* i18n */ `Account {foo}`, { foo })}>
        <Trans key='My Translation {foo}' values={{ foo }}></Trans>
      </div>
    )
  }
  ```

  [More examples for Trans](https://lingui.js.org/ref/macro.html#examples-of-jsx-macros) and [more examples for `t`](https://lingui.js.org/ref/macro.html#examples-of-js-macros)

- Updated dependencies [[`f698ff85d`](https://github.com/graphcommerce-org/graphcommerce/commit/f698ff85df6bb0922288471bb3c81856091b8061)]:
  - @graphcommerce/magento-cart@4.2.13
  - @graphcommerce/magento-cart-items@3.0.19
  - @graphcommerce/magento-product@4.3.3
  - @graphcommerce/magento-product-simple@4.0.18
  - @graphcommerce/magento-product-virtual@4.0.18
  - @graphcommerce/graphql@3.1.3

## 4.0.17

### Patch Changes

- Updated dependencies []:
  - @graphcommerce/magento-cart@4.2.12
  - @graphcommerce/magento-cart-items@3.0.18
  - @graphcommerce/magento-product@4.3.2
  - @graphcommerce/magento-product-simple@4.0.17
  - @graphcommerce/magento-product-virtual@4.0.17

## 4.0.16

### Patch Changes

- Updated dependencies [[`25ef6cf08`](https://github.com/graphcommerce-org/graphcommerce/commit/25ef6cf08c278105307d6f604b7135d637e9046c), [`80e30bb77`](https://github.com/graphcommerce-org/graphcommerce/commit/80e30bb77015755fbc00a7935d590f80c1c1c18c)]:
  - @graphcommerce/graphql@3.1.2
  - @graphcommerce/magento-cart@4.2.11
  - @graphcommerce/magento-cart-items@3.0.17
  - @graphcommerce/magento-product@4.3.1
  - @graphcommerce/magento-product-simple@4.0.16
  - @graphcommerce/magento-product-virtual@4.0.16

## 4.0.15

### Patch Changes

- Updated dependencies [[`669a17a97`](https://github.com/graphcommerce-org/graphcommerce/commit/669a17a973c47c00fed4a649a9da0bfc5670c5da)]:
  - @graphcommerce/magento-product@4.3.0
  - @graphcommerce/magento-cart-items@3.0.16
  - @graphcommerce/magento-product-simple@4.0.15
  - @graphcommerce/magento-product-virtual@4.0.15

## 4.0.14

### Patch Changes

- Updated dependencies [[`f3d06dd83`](https://github.com/graphcommerce-org/graphcommerce/commit/f3d06dd836c9a76412b419d4d2c79bbd0ee92e04)]:
  - @graphcommerce/magento-product@4.2.0
  - @graphcommerce/magento-cart@4.2.10
  - @graphcommerce/magento-cart-items@3.0.15
  - @graphcommerce/magento-product-simple@4.0.14
  - @graphcommerce/magento-product-virtual@4.0.14

## 4.0.13

### Patch Changes

- Updated dependencies []:
  - @graphcommerce/magento-cart@4.2.9
  - @graphcommerce/magento-product@4.1.11
  - @graphcommerce/magento-cart-items@3.0.14
  - @graphcommerce/magento-product-simple@4.0.13
  - @graphcommerce/magento-product-virtual@4.0.13

## 4.0.12

### Patch Changes

- Updated dependencies [[`b6b8bb5b3`](https://github.com/graphcommerce-org/graphcommerce/commit/b6b8bb5b31b0891ea24733de34a3bd5c0a9604e4), [`100f4c38c`](https://github.com/graphcommerce-org/graphcommerce/commit/100f4c38c8fcda4bc6e0425e38028b550b60adc2)]:
  - @graphcommerce/magento-product@4.1.10
  - @graphcommerce/graphql@3.1.1
  - @graphcommerce/magento-cart-items@3.0.13
  - @graphcommerce/magento-product-simple@4.0.12
  - @graphcommerce/magento-product-virtual@4.0.12
  - @graphcommerce/magento-cart@4.2.8

## 4.0.11

### Patch Changes

- Updated dependencies [[`a52a863f9`](https://github.com/graphcommerce-org/graphcommerce/commit/a52a863f9c69c6b3ae657dcce3bc9b14413ce125)]:
  - @graphcommerce/magento-product@4.1.9
  - @graphcommerce/magento-cart-items@3.0.12
  - @graphcommerce/magento-product-simple@4.0.11
  - @graphcommerce/magento-product-virtual@4.0.11

## 4.0.10

### Patch Changes

- Updated dependencies [[`d8906cf4a`](https://github.com/graphcommerce-org/graphcommerce/commit/d8906cf4afbfc234aedd91a2c581f82623267357)]:
  - @graphcommerce/magento-cart@4.2.7
  - @graphcommerce/magento-cart-items@3.0.11
  - @graphcommerce/magento-product@4.1.8
  - @graphcommerce/magento-product-simple@4.0.10
  - @graphcommerce/magento-product-virtual@4.0.10

## 4.0.9

### Patch Changes

- [#1399](https://github.com/graphcommerce-org/graphcommerce/pull/1399) [`da0ae7d02`](https://github.com/graphcommerce-org/graphcommerce/commit/da0ae7d0236e4908ba0bf0fa16656be516e841d4) Thanks [@paales](https://github.com/paales)! - Updated dependencies

- Updated dependencies [[`fb277d8e1`](https://github.com/graphcommerce-org/graphcommerce/commit/fb277d8e1e3612c5e9cf890a30d19cfd1ff70542), [`fb277d8e1`](https://github.com/graphcommerce-org/graphcommerce/commit/fb277d8e1e3612c5e9cf890a30d19cfd1ff70542), [`da0ae7d02`](https://github.com/graphcommerce-org/graphcommerce/commit/da0ae7d0236e4908ba0bf0fa16656be516e841d4)]:
  - @graphcommerce/graphql@3.1.0
  - @graphcommerce/magento-cart@4.2.6
  - @graphcommerce/magento-product@4.1.7
  - @graphcommerce/magento-cart-items@3.0.10
  - @graphcommerce/magento-product-simple@4.0.9
  - @graphcommerce/magento-product-virtual@4.0.9

## 4.0.8

### Patch Changes

- Updated dependencies []:
  - @graphcommerce/magento-cart@4.2.5
  - @graphcommerce/magento-cart-items@3.0.9
  - @graphcommerce/magento-product@4.1.6
  - @graphcommerce/magento-product-simple@4.0.8
  - @graphcommerce/magento-product-virtual@4.0.8

## 4.0.7

### Patch Changes

- Updated dependencies [[`b8d04130a`](https://github.com/graphcommerce-org/graphcommerce/commit/b8d04130a1b1cb8fc85308939235140288744465), [`9b3488c6a`](https://github.com/graphcommerce-org/graphcommerce/commit/9b3488c6a03cc09a647f43f6a8b36d96e97e5bb8)]:
  - @graphcommerce/magento-cart@4.2.4
  - @graphcommerce/magento-product@4.1.5
  - @graphcommerce/magento-cart-items@3.0.8
  - @graphcommerce/magento-product-simple@4.0.7
  - @graphcommerce/magento-product-virtual@4.0.7

## 4.0.6

### Patch Changes

- [#1378](https://github.com/graphcommerce-org/graphcommerce/pull/1378) [`b610a6e40`](https://github.com/graphcommerce-org/graphcommerce/commit/b610a6e4049e8c9e8b5d2aeff31b8e1bfc24abe5) Thanks [@paales](https://github.com/paales)! - Pin all versions internally so we can’t end up in an unfixable state for the user

- Updated dependencies [[`b610a6e40`](https://github.com/graphcommerce-org/graphcommerce/commit/b610a6e4049e8c9e8b5d2aeff31b8e1bfc24abe5)]:
  - @graphcommerce/graphql@3.0.7
  - @graphcommerce/magento-cart@4.2.3
  - @graphcommerce/magento-cart-items@3.0.7
  - @graphcommerce/magento-product@4.1.4
  - @graphcommerce/magento-product-simple@4.0.6
  - @graphcommerce/magento-product-virtual@4.0.6

## 4.0.5

### Patch Changes

- [#1369](https://github.com/graphcommerce-org/graphcommerce/pull/1369) [`ae6449502`](https://github.com/graphcommerce-org/graphcommerce/commit/ae64495024a455bbe5188588604368c1542840c9) Thanks [@paales](https://github.com/paales)! - Upgraded dependencies

- Updated dependencies [[`892018809`](https://github.com/graphcommerce-org/graphcommerce/commit/8920188093d0422ec50580e408dc28ac5f93e46a), [`ae6449502`](https://github.com/graphcommerce-org/graphcommerce/commit/ae64495024a455bbe5188588604368c1542840c9), [`892018809`](https://github.com/graphcommerce-org/graphcommerce/commit/8920188093d0422ec50580e408dc28ac5f93e46a)]:
  - @graphcommerce/graphql@3.0.6
  - @graphcommerce/magento-cart@4.2.2
  - @graphcommerce/magento-cart-items@3.0.6
  - @graphcommerce/magento-product@4.1.3
  - @graphcommerce/magento-product-simple@4.0.5
  - @graphcommerce/magento-product-virtual@4.0.5

## 4.0.4

### Patch Changes

- [#1307](https://github.com/ho-nl/m2-pwa/pull/1307) [`bd10506d3`](https://github.com/ho-nl/m2-pwa/commit/bd10506d32fdbc91d01dadc29a12ebd1e0943655) Thanks [@paales](https://github.com/paales)! - All default exports are now named exports internally and all `index.tsx` are renamed to the component name.

* [#1307](https://github.com/ho-nl/m2-pwa/pull/1307) [`27cb1f2d8`](https://github.com/ho-nl/m2-pwa/commit/27cb1f2d8dbfb8f1b301ce56fb6a2b6c1fc6a5ef) Thanks [@paales](https://github.com/paales)! - upgrade dependencies

* Updated dependencies [[`bd10506d3`](https://github.com/ho-nl/m2-pwa/commit/bd10506d32fdbc91d01dadc29a12ebd1e0943655), [`27cb1f2d8`](https://github.com/ho-nl/m2-pwa/commit/27cb1f2d8dbfb8f1b301ce56fb6a2b6c1fc6a5ef)]:
  - @graphcommerce/graphql@3.0.4
  - @graphcommerce/magento-cart@4.1.4
  - @graphcommerce/magento-cart-items@3.0.5
  - @graphcommerce/magento-product@4.0.6
  - @graphcommerce/magento-product-simple@4.0.4
  - @graphcommerce/magento-product-virtual@4.0.4

## 4.0.3

### Patch Changes

- [`973ff8645`](https://github.com/ho-nl/m2-pwa/commit/973ff86452a70ade9f4db13fdda6e963d7220e96) Thanks [@paales](https://github.com/paales)! - made packages public

- Updated dependencies [[`973ff8645`](https://github.com/ho-nl/m2-pwa/commit/973ff86452a70ade9f4db13fdda6e963d7220e96), [`81ea406d5`](https://github.com/ho-nl/m2-pwa/commit/81ea406d54d6b5c662c030a7fea444abc4117a20)]:
  - @graphcommerce/graphql@3.0.3
  - @graphcommerce/magento-cart@4.1.2
  - @graphcommerce/magento-cart-items@3.0.3
  - @graphcommerce/magento-product@4.0.3
  - @graphcommerce/magento-product-simple@4.0.3
  - @graphcommerce/magento-product-virtual@4.0.3

## 4.0.2

### Patch Changes

- [#1276](https://github.com/ho-nl/m2-pwa/pull/1276) [`ce09388e0`](https://github.com/ho-nl/m2-pwa/commit/ce09388e0d7ef33aee660612340f6fbae15ceec2) Thanks [@paales](https://github.com/paales)! - We've moved lots of internal packages from `dependencies` to `peerDependencies`. The result of this is that there will be significantly less duplicate packages in the node_modules folders.

* [#1276](https://github.com/ho-nl/m2-pwa/pull/1276) [`52a45bba4`](https://github.com/ho-nl/m2-pwa/commit/52a45bba4dc6dd6df3c81f5023df7d23ed8a534d) Thanks [@paales](https://github.com/paales)! - Upgraded to [NextJS 12.1](https://nextjs.org/blog/next-12-1)! This is just for compatibility, but we'll be implementing [On-demand Incremental Static Regeneration](https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta) soon.

  This will greatly reduce the requirement to rebuid stuff and we'll add a management UI on the frontend to be able to revalidate pages manually.

* Updated dependencies [[`381e4c86a`](https://github.com/ho-nl/m2-pwa/commit/381e4c86a8321ce96e1fa5c7d3c0a0c0ff3e02c7), [`ce09388e0`](https://github.com/ho-nl/m2-pwa/commit/ce09388e0d7ef33aee660612340f6fbae15ceec2), [`b08a8eb1d`](https://github.com/ho-nl/m2-pwa/commit/b08a8eb1d024b9d3e7712ef034029151670db275), [`52a45bba4`](https://github.com/ho-nl/m2-pwa/commit/52a45bba4dc6dd6df3c81f5023df7d23ed8a534d), [`5a4809b1a`](https://github.com/ho-nl/m2-pwa/commit/5a4809b1a705aa32f620f520085df48ee25f9949)]:
  - @graphcommerce/magento-cart@4.1.1
  - @graphcommerce/graphql@3.0.2
  - @graphcommerce/magento-cart-items@3.0.2
  - @graphcommerce/magento-product@4.0.2
  - @graphcommerce/magento-product-simple@4.0.2
  - @graphcommerce/magento-product-virtual@4.0.2

## 4.0.1

### Patch Changes

- [`0cbaa878b`](https://github.com/ho-nl/m2-pwa/commit/0cbaa878b8a844d5abbeb1797b625a33130e6514) Thanks [@paales](https://github.com/paales)! - Added homepage and repository package.json files, so that the packages link to back to the website and repository
- Updated dependencies [[`0cbaa878b`](https://github.com/ho-nl/m2-pwa/commit/0cbaa878b8a844d5abbeb1797b625a33130e6514)]:
  - @graphcommerce/graphql@3.0.1
  - @graphcommerce/magento-cart@4.0.1
  - @graphcommerce/magento-cart-items@3.0.1
  - @graphcommerce/magento-product@4.0.1
  - @graphcommerce/magento-product-simple@4.0.1
  - @graphcommerce/magento-product-virtual@4.0.1

## 4.0.0

### Major Changes

- [#1258](https://github.com/ho-nl/m2-pwa/pull/1258) [`ad36382a4`](https://github.com/ho-nl/m2-pwa/commit/ad36382a4d55d83d9e47b7eb6a02671a2a631a05) Thanks [@paales](https://github.com/paales)! - Upgraded to Material UI 5

### Patch Changes

- Updated dependencies [[`ad36382a4`](https://github.com/ho-nl/m2-pwa/commit/ad36382a4d55d83d9e47b7eb6a02671a2a631a05)]:
  - @graphcommerce/graphql@3.0.0
  - @graphcommerce/magento-cart@4.0.0
  - @graphcommerce/magento-cart-items@3.0.0
  - @graphcommerce/magento-product@4.0.0
  - @graphcommerce/magento-product-simple@4.0.0
  - @graphcommerce/magento-product-virtual@4.0.0

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.2.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@3.1.31...@graphcommerce/magento-product-bundle@3.2.0) (2021-11-12)

### Features

- added tons of translations ([9bb0ac7](https://github.com/ho-nl/m2-pwa/commit/9bb0ac709b58df6ea6141e92e4923a5ca9ae2963))

# [3.1.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@3.0.37...@graphcommerce/magento-product-bundle@3.1.0) (2021-10-27)

### Features

- **nextjs:** upgraded to nextjs 12 ([9331bc8](https://github.com/ho-nl/m2-pwa/commit/9331bc801f6419522115cc47d291d49d608d5a90))

## [3.0.1](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@3.0.0...@graphcommerce/magento-product-bundle@3.0.1) (2021-09-27)

**Note:** Version bump only for package @graphcommerce/magento-product-bundle

# 3.0.0 (2021-09-27)

### Bug Fixes

- address fragments ([96e68c3](https://github.com/ho-nl/m2-pwa/commit/96e68c3f96e40dded50ec5859909a7326b47e37b))
- ignore md files from triggering version updates ([4f98392](https://github.com/ho-nl/m2-pwa/commit/4f9839250b3a32d3070da5290e5efcc5e2243fba))
- make sure an empty cart gets initialized properly ([12df845](https://github.com/ho-nl/m2-pwa/commit/12df8456117393cc7c387ba6e072190a831b7a58))
- product specs on product pages ([098798a](https://github.com/ho-nl/m2-pwa/commit/098798aec353a8a571928faae02a303fed395977))
- remove conflicting files ([0c17ae4](https://github.com/ho-nl/m2-pwa/commit/0c17ae46be62b775ac83b35f11c532ce2d9401a3))
- update magento-product imports ([63621b4](https://github.com/ho-nl/m2-pwa/commit/63621b44be7149014f4a5af8ac87ad1c4b0327be))
- yarn workspace packages hot reload ([d03fc9f](https://github.com/ho-nl/m2-pwa/commit/d03fc9fdda3486476761786f2b56a934cc92befc))

### Features

- added PaymentModule API and persistent selection of form fields ([b67f735](https://github.com/ho-nl/m2-pwa/commit/b67f7358f62edd56a8232d625ecee56af350bfb8))
- barrel files for magento-product pages ([c8fdcf2](https://github.com/ho-nl/m2-pwa/commit/c8fdcf2f5b98821dffe2c47f5ea4e1847bd3bb1e))
- created stacked-pages package ([d86008e](https://github.com/ho-nl/m2-pwa/commit/d86008ee659ccb25b194a41d624b394a1ddbd088))
- **graphql:** introduced new graphql package that holds all generated files ([a3e7aa0](https://github.com/ho-nl/m2-pwa/commit/a3e7aa05540540533b5ced9a95f1f802ecbe499f))
- groundwork for complete reimplementation of product pages ([b224da8](https://github.com/ho-nl/m2-pwa/commit/b224da8273eb5c8173ad30d006391b2291331623))
- introduced magento-product-types package ([1a0932b](https://github.com/ho-nl/m2-pwa/commit/1a0932b5d882608dcf8fd2e3b17ee9868f5f5776))
- **magento-graphql:** added core magentoTypePolicies ([bdf15d0](https://github.com/ho-nl/m2-pwa/commit/bdf15d0d3c04e88339a8385d76f3b1ab9589fde3))
- next.js 11 ([7d61407](https://github.com/ho-nl/m2-pwa/commit/7d614075a778f488045034f74be4f75b93f63c43))
- **playwright:** added new playwright package to enable browser testing ([6f49ec7](https://github.com/ho-nl/m2-pwa/commit/6f49ec7595563775b96ebf21c27e39da1282e8d9))
- renamed all packages to use [@graphcommerce](https://github.com/graphcommerce) instead of [@reachdigital](https://github.com/reachdigital) ([491e4ce](https://github.com/ho-nl/m2-pwa/commit/491e4cec9a2686472dac36b79f999257c0811ffe))
- upgrade to node 14 ([d079a75](https://github.com/ho-nl/m2-pwa/commit/d079a751e9bfd8dc7f5009d2c9f31c336a0c96ab))
- upgraded to nextjs 11 ([0053beb](https://github.com/ho-nl/m2-pwa/commit/0053beb7ef597c190add7264256a0eaec35868da))

## 2.0.8 (2020-10-28)

### Bug Fixes

- make sure themes extensions are found ([5aa18db](https://github.com/ho-nl/m2-pwa/commit/5aa18db514fd2e2f50681367e39523f8e742ece0))

### Features

- added generated graphql.ts files ([3e44415](https://github.com/ho-nl/m2-pwa/commit/3e44415b018e74b502e9e98479aa5e84041f337d))
- split into packages ([2ee7fd6](https://github.com/ho-nl/m2-pwa/commit/2ee7fd6c0056f467d114f04d92c6c0ddf622d151))

### BREAKING CHANGES

- huge folder structure refactor, please read README to reinstall

# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.102.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@2.101.10...@graphcommerce/magento-product-bundle@2.102.0) (2021-08-12)

### Features

- upgraded to nextjs 11 ([0053beb](https://github.com/ho-nl/m2-pwa/commit/0053beb7ef597c190add7264256a0eaec35868da))

# [2.101.0](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@2.100.19...@graphcommerce/magento-product-bundle@2.101.0) (2021-07-26)

### Features

- **playwright:** added new playwright package to enable browser testing ([6f49ec7](https://github.com/ho-nl/m2-pwa/commit/6f49ec7595563775b96ebf21c27e39da1282e8d9))

## [2.100.11](https://github.com/ho-nl/m2-pwa/compare/@graphcommerce/magento-product-bundle@2.100.10...@graphcommerce/magento-product-bundle@2.100.11) (2021-07-20)

### Bug Fixes

- ignore md files from triggering version updates ([4f98392](https://github.com/ho-nl/m2-pwa/commit/4f9839250b3a32d3070da5290e5efcc5e2243fba))
