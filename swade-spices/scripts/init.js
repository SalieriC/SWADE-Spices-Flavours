
function register_settings() {
    // Custom bennie settings
    // noinspection JSUnresolvedVariable
    game.settings.register('swade-spices', 'sheetBack', {
        name: game.i18n.localize("SWADEBack.sheetBackName"),
        hint: game.i18n.localize("SWADEBack.sheetBackHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
}

function modify_character_sheet(_, html, __) {
    console.log('Swade Spices & Flavours for SWADE | Ready');
    let back_sheet = game.settings.get(
        'swade-spices', 'sheetBack');
    if (back_sheet) {
        html.find(".window-content").css("background-image", `url(${back_sheet})`);
    }
}


Hooks.on(`ready`, () => {
    console.log('Swade Spices & Flavours for SWADE | Ready');
    register_settings();
});

Hooks.on(`renderSwadeCharacterSheet`, modify_character_sheet)