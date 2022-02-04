// https://github.com/ChristopherKlay/StadiaEnhanced/discussions/13

const TRANSLATION_DE = {
    default: 'Standard',
    native: 'Nativ',
    hide: 'Verstecke',
    show: 'Zeige',
    total: 'Gesamt',
    visible: 'Sichtbar',
    hidden: 'Versteckt',
    enabled: 'Aktiviert',
    disabled: 'Deaktiviert',
    auto: 'Automatisch',
    manual: 'Manuell',
    all: 'Alle',
    locked: "Gesperrt",
    complete: 'Vollständig',
    incomplete: 'Unvollständig',
    games: 'Spiele',
    allgames: 'Alle Spiele',
    leavepro: 'Verlässt Pro',
    bundles: 'Bundles',
    addons: 'Add-ons',
    wishlist: 'Wunschliste',
    responsive: 'Responsiv',
    windowed: 'Fenster Modus',
    fullscreen: 'Vollbild',
    onsale: 'Im Angebot',
    prodeals: 'Pro Angebote',
    userprofile: 'Mein Profil',
    usermedia: 'Aufnahmen und Spielstatus',
    searchbtnbase: 'Suche auf',
    avatarpopup: 'Neue Avatar URL (keine für Zurücksetzung):',
    date: 'Datum',
    time: 'Zeit',
    sessiontime: 'Sitzungszeit',
    codec: 'Codec',
    resolution: 'Auflösung',
    hardware: 'Hardware',
    software: 'Software',
    trafficsession: 'Sitzungs-Traffic',
    trafficcurrent: 'Derzeitiger Traffic',
    trafficaverage: 'Durchschnittlicher Traffic',
    packetloss: 'Paketverlust',
    framedrop: 'Verlorene Frames',
    latency: 'Latenz',
    jitter: 'Jitter-Puffer',
    decodetime: 'Dekodierungs Zeit',
    compression: 'Kompression',
    bitrate: 'Bitrate',
    streammon: 'Stream Monitor',
    stream: 'Stream',
    network: 'Netzwerk',
    session: 'Sitzung',
    extdetail: 'Erweiterte Details',
    maxresolution: 'Maximale Auflösung',
    fps: 'Framerate',
    testdiscl: '<b>Vorwarnung:</b> Dieses Spiel muss noch getestet werden.',
    datadiscl: 'Dies ist die im 4K Modus (Stadia Pro benötigt) maximal erreichbare Framerate.\
                            In Spielen mit Qualität/Performance Option, wurde Qualität gewählt. \
                            Diese Daten werden durch <a href="https://twitter.com/OriginaIPenguin" target="_blank">@OriginaIPenguin</a> bereitgestellt, \
                            die vollständige Ansicht befindet sich <a href="https://linktr.ee/StadiaDatabase" target="_blank">hier</a>.',
    noteOne: '4K Modus',
    noteTwo: '30/60 FPS Umschaltbar',
    noteThree: '60 FPS im 1080p Modus',
    noteFour: '30 FPS im 1080p Modus',
    noteFive: 'Nicht kompatibel mit 4K Modus',
    unsupported: 'Nicht unterstützt',
    crossfriends: 'Kein plattformübergreifendes Freunde System',
    filtersettings: 'Filter Einstellungen',
    saturation: 'Sättigung',
    contrast: 'Kontrast',
    brightness: 'Helligkeit',
    sharpen: 'Schärfe',
    community: 'Community',
    speedtest: 'Geschwindigkeitstest',
    quickaccess: 'Schnellzugriff',
    messages: 'Nachrichten',
    comfeature: "Community Funktionen",
    avatar: 'Avatar',
    interface: 'Oberfläche',
    shortcut: 'StadiaIcons',
    shortcuttitle: 'Installiere eine Verknüpfung für',
    shortcutdesc: 'Erlaubt das Erstellen einer Verknüpfung von Spielen auf dem Gerät.',
    stadiadatabase: 'Stadia Datenbank',
    stadiadatabasedesc: 'Zeigt einen "Erweiterte Details" Bereich auf der Store Seite von Spielen, welcher Framerate, Auflösung und weitere Informationen über das Spiel zeigt.',
    contactdev: 'Entwickler/Publisher kontaktieren',
    stadiahunters: 'Stadia Hunters',
    stadiahuntersdesc: 'Zugriff auf die Stadia Hunters Community, inclusive Hilfestellungen, Ranglisten und Erfolge. Der perfekte Begleiter für Erfolge Jäger.',
    stadiahunterstitle: 'auf Stadia Hunters',
    stadiahunterslogin: 'Hier klicken zum Anmelden',
    stadiahuntersnotfound: 'Nutzer nicht gefunden',
    stadiahunterslevel: 'Level',
    stadiahuntersworldrank: 'Welt Rang',
    stadiahuntersxphover: 'Level Fortschritt',
    gridsize: 'Rastergröße',
    griddesc: 'Ändert die Anzahl der Spiele pro Reihe in der Übersicht der Mediathek.',
    clock: 'Uhr',
    clockdesc: 'Zeigt die Uhrzeit in der Freundesliste, als Einblendung im Spiel, oder beides.',
    friendslist: 'Freundesliste',
    igoverlay: 'Spiel Einblendung',
    listoverlay: 'Liste & Einblendung',
    filter: 'Spiele Filter',
    filterdesc: 'Erlaubt das Sortieren der Mediathek durch Verstecken von Spielen.',
    invitebase: 'Einladungslink kopieren',
    inviteactive: 'Kopiert!',
    gamelabel: 'Spiele Beschriftung',
    gamelabeldesc: 'Entfernt Beschriftungen wie "Pro" von Spielen auf dem Startbildschirm.',
    dimoverlay: 'Dimmendes Overlay',
    dimoverlaydesc: 'Entfernt den verdunkelnden Effekt von Spielen, wenn das Stadia Menü geöffnet ist.',
    homegallery: 'Nutzer Galerie',
    homegallerydesc: 'Versteckt den "Aufnahmen" Bereich am unteren Ende des Startbildschirmes.',
    quickprev: 'Nachrichten Vorschau',
    quickprevdesc: 'Versteckt die Vorschau der letzten Nachricht in der Freundesliste.',
    quickrep: 'Schnellantwort',
    quickrepdesc: 'Versteckt die Antwortvorschläge in Chats.',
    offlinefriend: 'Offline Freunde',
    offlinefrienddesc: 'Versteckt offline Freunde in der Freundesliste.',
    invisiblefriend: 'Unsichtbare Freunde',
    invisiblefrienddesc: 'Versteckt Freunde ohne bekannten online Status in der Freundesliste.',
    notification: 'Benachrichtigungen',
    notificationdesc: 'Zeige eine Benachrichtigung wenn Stadia Enhanced auf eine neue Version geupdated wurde ("Automatisch" versteckt diese nach 5 Sekunden, "Manuell" zeigt sie, bis der Nutzer mit der Seite interagiert).',
    streammode: 'Streaming Modus',
    streammodedesc: 'Aktivieren um bestimmte Elemente (z.B. die Freundesliste) während des Streamens (über z.B. OBS / Discord) unleserlich zu machen.',
    catprev: 'Kategorie Vorschau',
    catprevdesc: 'Entfernt die Anzeige der Kategorien bei Spielen auf dem Startbildschirm.',
    streammondesc: 'Aktivieren um den Streaming Monitor beim Starten von Spielen automatisch zu starten.',
    resolutiondesc: 'Die angezielte Auflösung für Spiele. 1440p und 2160p benötigen VP9 und Stadia Pro.',
    codecdesc: 'Der für Spiele genutzte Codec.',
    confirmreset: 'Möchtest du die Einstellungen sicher zurücksetzen?',
    statistics: 'Statistiken',
    gamesfinished: 'Spiele Abgeschlossen',
    achievementsunlocked: 'Erfolge Freigeschaltet',
    totalPlayTime: 'Gesamtspielzeit',
    splitstore: 'Store Listen teilen',
    splitstoredesc: 'Teilt Listen im Store für eine bessere Übersicht in zwei Spalten.',
    inlineimage: 'Vorschau für Bilder',
    inlinedesc: 'Ersetzt Bilder in gängigen Formaten (jpg/gif/png) mit einer klickbaren Vorschau.',
    familyelements: 'Familienfreigabe Optionen',
    familyelementsdesc: 'Versteckt die "Dieses Spiel für die Familie freigeben" Elemente.',
    donations: 'Spenden',
    reportbug: 'Melde einen Fehler',
    exportset: 'Einstellungen exportieren',
    importset: 'Einstellungen importieren',
    importerror: 'Die ausgewählte Datei beinhaltet kein gültiges Stadia Enhanced Profil.',
    resetsettings: 'Einstellungen zurücksetzen'
}