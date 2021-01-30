
function register_settings() {
    // Custom bennie settings
    // noinspection JSUnresolvedVariable
    game.settings.register('swade-spices', 'nothingYet', {
        name: game.i18n.localize("SWADENothing.NothingYetName"),
        hint: game.i18n.localize("SWADENothing.NothingYetHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    game.settings.register('swade-spices', 'StillNothing', {
        name: game.i18n.localize("SWADEStill.StillNothingName"),
        hint: game.i18n.localize("SWADEStill.StillNothingHint"),
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
}


Hooks.on(`ready`, () => {
    console.log('Swade Spices & Flavours for SWADE | Ready');
    register_settings();
});

Hooks.on(`renderCharacterSheet`, modify_character_sheet)