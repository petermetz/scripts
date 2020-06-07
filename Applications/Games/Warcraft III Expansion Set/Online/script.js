include(["engines", "wine", "quick_script", "online_installer_script"]);
include(["engines", "wine", "plugins", "windows_version"]);
include(["engines", "wine", "verbs", "vcrun2015"]);
include(["engines", "wine", "verbs", "corefonts"]);

var installerImplementation = {
    run: function () {
        new OnlineInstallerScript()
            .name("Warcraft III Expansion Set")
            .editor("Blizzard")
            .applicationHomepage("http://www.blizzard.com/en-gb/games/war3/")
            .author("Grimler91")
            .url("https://www.battle.net/download/getInstaller?os=win&installer=Warcraft-III-Setup.exe")
        // The checksum changes each time you download
            .category("Games")
            .executable("Warcraft III.exe")
            .wineVersion(LATEST_STAGING_VERSION)
            .wineDistribution("staging")
            .preInstall(function (wine/*, wizard*/) {
                wine.windowsVersion("win10");
                wine.corefonts();
                wine.vcrun2015();
            })
            .go();
    }
};

/* exported Installer */
var Installer = Java.extend(org.phoenicis.scripts.Installer, installerImplementation);
