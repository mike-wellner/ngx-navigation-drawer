module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {

    //
    // Fix configurations
    //

    // No preference - just for uniformity
    "color-function-notation": "legacy",
    // No preference - just for uniformity
    "alpha-value-notation": "number",
    // No preference - just for uniformity
    "color-hex-length": "long",
    // No preference - just for uniformity
    "length-zero-no-unit": true,
    // grid-template is way more readable in multiline
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        "ignoreShorthands": ["grid-template"]
      }
    ],
    // Our general angular code structure comes with a style scss file
    "no-empty-source": null,
    // Needed for ::ng-deep
    "selector-pseudo-element-no-unknown": null,

    // Should be enabled
    "scss/no-global-function-names": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "no-descending-specificity": true
  }
};
