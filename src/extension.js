/*********************************************************************
* The LogOutButton is Copyright (C) 2016 Kyle Robbertze
* African Institute for Mathematical Sciences, South Africa
*
* LogOutButton is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License version 3 as 
* published by the Free Software Foundation.
*
* LogOutButton is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with LogOutButton.  If not, see <http://www.gnu.org/licenses/>.
**********************************************************************/

const Gettext = imports.gettext;
const ExtensionUtils = imports.misc.extensionUtils;
const Main = imports.ui.main;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const _ = Gettext.gettext;
const System = Main.panel.statusArea.aggregateMenu._system;

let _logoutButton = null;

/**
 * Initialises the extension
 */
function init() {
    Convenience.initTranslations();
}

/*
 * Enables the extension
 */
function enable () {
    _logoutButton = System._createActionButton('application-exit-symbolic', _("Log Out"));
    _logoutButton.connect('button-press-event', _logout);
    System._actionsItem.actor.add(_logoutButton, { expand: true, x_fill: false });
}

/*
 * Disables the extension
 */
function disable () {
    System.actor.remove(_logoutButton);
}

/*
 * Initiates a log out when the log out button is clicked
 */
function _logout () {
    System.menu.itemActivated();
    Main.overview.hide();
    System._session.LogoutRemote(0)
}
