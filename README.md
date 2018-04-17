# gulp-template
This is simple boilerplate for gulp projects. It has browser reload and SCSS preprocessor and basic HTML and CSS markup with media queries and SCSS variables. Mobile first design.


Template folder architecture: 

```
gulp-template/
├── app
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── js
│   │   │   └── main.js
│   │   └── sass
│   │       ├── base
│   │       │   ├── _base.scss
│   │       │   ├── _icons.scss
│   │       │   └── _typography.scss
│   │       ├── components
│   │       │   ├── _buttons.scss
│   │       │   └── _forms.scss
│   │       ├── config
│   │       │   ├── _reset.scss
│   │       │   └── _variables.scss
│   │       ├── helpers
│   │       │   ├── _helper-classes.scss
│   │       │   └── _mixins.scss
│   │       ├── main.scss
│   │       └── partials
│   │           └── shared
│   │               ├── _shared-footer.scss
│   │               ├── _shared-header.scss
│   │               ├── _shared-main.scss
│   │               └── _shared-navigation.scss
│   └── index.html
├── gulpfile.js
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

How to use:

1) npm install
2) gulp watch
3) You are ready to start coding.
4) For media queries look at sass/config/variables
