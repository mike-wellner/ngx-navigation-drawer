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

    //
    // Should be changed to the default or other values but takes alot of time to test and check the outcome
    //
    "scss/no-global-function-names": null, // TODO: Exchange deprecated function calls
    "value-no-vendor-prefix": null, // TODO: Check if we actually need the vendor values
    "property-no-vendor-prefix": null, // TODO: Check if we actually need the vendor properties
    "no-descending-specificity": null // TODO: Most important! Will improve SCSS styling and produce less "why does this actually work???"

  }
};
