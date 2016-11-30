const Main = imports.ui.main;
const System = Main.panel.statusArea.aggregateMenu.System;

let _logoutButton = null;

function init() {
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
