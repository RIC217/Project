const { Menu } = require("electron");

module.exports = (addBookmarkFunc,aboutFunc,openURL,bookmarks)=>{
    let bookmarksTab = [
        {
            label: "Ajouter cette page aux favoris",
            id: "addBookmark",
            click: addBookmarkFunc
        },
        {type:"separator"}
    ]
    bookmarks.forEach((bookmark,i) => {
        bookmarksTab.push({label: bookmark.title+" - "+bookmark.url,id:"bookmark"+(i+1),click:()=>openURL(bookmark.url)})
    });
    let finalMenu = [
    {label: "Fichier",submenu: [{role: "close",id: "close",label: "Quitter"}]},
    {label: 'View',submenu: [
            { role: 'reload',id:"reload", label:"Actualiser"},
            { role: 'forceReload', id:"forceReload", label:"Forcer l'actualisation"},
            { role: 'toggleDevTools', id:"devTools", label : "Afficher les outils développeurs"},
            { type: 'separator'},
            { role: 'resetZoom', id:"resetZoom", label:"Réinitialiser le zoom"},
            { role: 'zoomIn', id:"zoomIn", label:"Zoom +"},
            { role: 'zoomOut', id:"zoomOut", label:"Zoom -"},
            { type: 'separator'},
            { role: 'togglefullscreen', id:"fullScreen", label:"Plein écran"}
        ]},
    {
        label: "Favoris",submenu: [
            {label: "Favoris",id: "bookmarks",submenu:bookmarksTab}
        ]
    },
    {
        label: "Aide",
        submenu: [
            {
                label: "A propos",
                click: aboutFunc
            },
            {
                type: "separator"
            },
            {
                label: "Plus d'infomations",
                click: ()=>{
                    shell.openExternal("https://github.com/MaelDevFr/Project")
                }
            }
        ]
        }
    ]
    Menu.setApplicationMenu(Menu.buildFromTemplate(finalMenu))
    return finalMenu
}