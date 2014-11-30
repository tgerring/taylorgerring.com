
var GLOBSTAR = '**/*';

var basePaths = {
    src: 'src/',
    dest: 'build/'
};

var typeMap = {
    // templates
    jade:       ['*.jade'],

    // styles
    css:        [GLOBSTAR + '.css'],
    less:       [GLOBSTAR + '.less'],

    // scripts
    js:         [GLOBSTAR + '.js', '!vendor/*.js'],
    coffee:     [GLOBSTAR + '.coffee'],
    jslibs:     ['vendor/*.js'],

    // images
    png:        [GLOBSTAR + '.png'],
    jpg:        [GLOBSTAR + '.jpg', GLOBSTAR + '.jpeg'],
    gif:        [GLOBSTAR + '.gif'],
    svg:        [GLOBSTAR + '.svg'],

    // extras
    extras:   [GLOBSTAR]
};

module.exports = {
  SERVER_PORT: 1337,
  GLOBSTAR: GLOBSTAR,
  basePaths: basePaths,


  typePaths: {
    templates: {
      src: basePaths.src + 'templates/',
      dest: basePaths.dest + ''
    },
    styles: {
      src: basePaths.src + 'styles/',
      dest: basePaths.dest + 'styles/'
    },
    scripts: {
      src: basePaths.src + 'scripts/',
      dest: basePaths.dest + 'scripts/'
    },
    images: {
      src: basePaths.src + 'images/',
      dest: basePaths.dest + 'images/'
    },
    extras: {
      src: basePaths.src + 'extras/',
      dest: basePaths.dest + ''
    },
    i18n: {
      src: basePaths.src + 'extras/locales',
      dest: basePaths.dest + 'locales/'
    }
  },

  typeMap: typeMap,

  appFiles: {
    templates:  typeMap.jade,
    styles:     typeMap.css.concat(typeMap.less),
    scripts:    typeMap.js.concat(typeMap.coffee),
    images:     typeMap.png.concat(typeMap.gif).concat(typeMap.jpg).concat(typeMap.svg),
    extras:     typeMap.extras
  },

  vendorFiles: {
    scripts:    typeMap.jslibs
  },

  scriptOrder: [
    'jquery-1.11.1.min.js',
    'jquery.backstretch.min.js',
  ],

  styleOrder: [
    'main.css'
  ]
};
