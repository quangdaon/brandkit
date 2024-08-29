# Styling Styleguides

### Do: Import as `@brand` and `@scissors`

In a Svelte project, set up aliases in `svelte.config.js`.

```js
{
  alias: {
			'@brand': './node_modules/@quangdao/brandkit/scss',
			'@scissors': './node_modules/@quangdao/scissors/scss'
  }
}
```

### Don't: Import anything outside of `@brand` or `@scissors` in a component

All components should be isolated and the rest of the `styles` folder should only include styles that apply globally.

### Do: Use `@use '@scissors/blah'` to import utility declarations

References should then be prefixed with the source namespace. For example, when referencing a mixin, import the relevant file via `@use '@scissors/blah'` then use it with `@include blah.whatever`.

### Do: Use placeholders for shared styles

In situations where common styles are shared across multiple blocks/components, create a placeholder and extend it from the relevant selectors.
