# LogOutButton
LogOutButton is a GNOME Shell extension that shows a log out button next to the
power-off, lock and settings buttons in the system action list.

## Install
### Dependencies:
Building LogOutButton from source requires:

 - Glib development files (`libglib2.0-dev`)
 - `intltool`
 - `automake`

### Install
From the repository directory run

    ./autogen.sh
    ./configure
    make local-install

You may need to restart GNOME (Alt + F2, r) before you see LogOutButton in your
list of extensions
