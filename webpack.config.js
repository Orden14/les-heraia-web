const Encore = require("@symfony/webpack-encore");

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("public/build/")
    .setPublicPath("/build")
    .addEntry("app", "./assets/app.js")
    .splitEntryChunks()
    .enableStimulusBridge("./assets/controllers.json")
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = "usage";
        config.corejs = "3.38";
    })
    .enableSassLoader()
    .enablePostCssLoader();

module.exports = Encore.getWebpackConfig();
