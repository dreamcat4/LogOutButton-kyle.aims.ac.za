# LogOutButton
LogOutButton is a GNOME Shell extension that shows a log out button next to the
power-off, lock and settings buttons in the system action list.

## Install
### Dependencies:
Building LogOutButton from source requires:

 - Glib development files (`libglib2.0-dev`)
 - `gettext`

### Install

    mkdir -p ~/.local/share/gnome-shell/extensions/LogOutButton@kyle.aims.ac.za
    cp -r src/* locale ~/.local/share/gnome-shell/extensions/LogOutButton@kyle.aims.ac.za/

You may need to restart GNOME (Alt + F2, r) before you see LogOutButton in your
list of extensions
