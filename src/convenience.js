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
const Config = imports.misc.config;
const ExtensionUtils = imports.misc.extensionUtils;

/**
 * Initialises the translations system
 */
function initTranslations(domain) {
    let extension = ExtensionUtils.getCurrentExtension();
    domain = domain || extension.metadata['gettext-domain'];
    Gettext.textdomain(domain);
    /*
     * If the extension was installed locally the translations sit in a
     * subdirectory in the main repository
     */
    let localeDir = extension.dir.get_child('locale');
    if (localeDir.query_exists(null)) {
        Gettext.bindtextdomain(domain, localeDir.get_path());
    } else {
        Gettext.bindtextdomain(domain, Config.LOCALEDIR);
    }
}
