var babel = require("rollup-plugin-babel");
function banner () {
    var pkg = require("../package.json");
    var version = pkg.version;
    return `/*!
    * ${pkg.name} ${version}
    * Licensed under MIT
    */
    `;
}
function getCompiler(opt) {
    return babel({
        babelrc: false,
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        browsers:
                        "last 2 versions, > 1%, ie >=8, Chrome >= 45, safari >= 10",
                        node: "0.12"
                    },
                    modules: false,
                    loose: true
                }
            ]
        ],
        exclude: "node_modules/**",
        plugins: [
            [
                "@babel/plugin-transform-runtime",
                {
                    corejs: 2
                }
            ]
        ]
    })
}
exports.banner = banner;
exports.getCompiler = getCompiler