const Gettext = imports.gettext;
const Config = imports.misc.config;
const ExtensionUtils = imports.misc.extensionUtils;

function initTranslations(domain) {
    let extension = ExtensionUtils.getCurrentExtension();
    domain = domain || extension.metadata['gettext-domain'];
    Gettext.textdomain(domain);
    let localeDir = extension.dir.get_child('locale');
    if (localeDir.query_exists(null)) {
        Gettext.bindtextdomain(domain, localeDir.get_path());
    } else {
        Gettext.bindtextdomain(domain, Config.LOCALEDIR);
    }
}
