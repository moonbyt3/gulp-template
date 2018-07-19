# gulp-template
This is simple boilerplate for gulp projects. It has browser reload and SCSS preprocessor and basic HTML and CSS markup with media queries and SCSS variables. Mobile first design.


Project architecture: 

```
├── app
│   ├── assets
│   │   ├── css
│   │   │   └── main.css
│   │   ├── fonts
│   │   │   ├── font-icons.eot
│   │   │   ├── font-icons.ttf
│   │   │   └── font-icons.woff
│   │   ├── js
│   │   │   └── main.js
│   │   ├── sass
│   │   │   ├── base
│   │   │   │   ├── _base.scss
│   │   │   │   ├── _buttons.scss
│   │   │   │   ├── _forms.scss
│   │   │   │   ├── _icon-font.scss
│   │   │   │   ├── _icons.scss
│   │   │   │   └── _typography.scss
│   │   │   ├── config
│   │   │   │   ├── _colors.scss
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── helpers
│   │   │   │   ├── _helper-classes.scss
│   │   │   │   └── _mixins.scss
│   │   │   ├── main.scss
│   │   │   ├── shared
│   │   │   │   ├── _shared-footer.scss
│   │   │   │   ├── _shared-header.scss
│   │   │   │   ├── _shared-main.scss
│   │   │   │   └── _shared-navigation.scss
│   │   │   └── templates
│   │   │       └── _icon-font.scss
│   │   └── svg
│   │       └── twitter.svg
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
