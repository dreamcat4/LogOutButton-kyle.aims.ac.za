const Gettext = imports.gettext;
const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const _ = Gettext.gettext;
const System = Main.panel.statusArea.aggregateMenu._system;

let _logoutButton = null;

function init() {
    Convenience.initTranslations();
}

function enable () {
    _logoutButton = System._createActionButton('application-exit-symbolic', _("Log Out"));
    _logoutButton.connect('button-press-event', _logout);
    System._actionsItem.actor.add(_logoutButton, { expand: true, x_fill: false });
}

function disable () {
    System.actor.remove(_logoutButton);
}

function _logout () {
    System.menu.itemActivated();
    Main.overview.hide();
    System._session.LogoutRemote(0)
}
