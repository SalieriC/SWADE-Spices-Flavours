export const ConfigurationVariables = [
    {id: 'LeftBarBGColour', variable: '--spicy-left-bar-bg-color'},
    {id: 'TopBarColour', variable: '--spicy-top-bar-bg-color'},
    {id: 'BodyBGColour', variable: '--spicy-main-body-bg-color'},
    {id: 'LeftBarBGImage', variable: '--spicy-left-bar-bg-image'},
    {id: 'TopBarBGImage', variable: '--spicy-top-bar-bg-image'},
    {id: 'BodyBGImage', variable: '--spicy-main-body-bg-image'},
];

export function register_settings(){
    for (let setting of ConfigurationVariables) {
        game.settings.register('swade-spices', setting.id, {
            name: game.i18n.localize("SWADESPICE.SettingName-" + setting.id),
            hint: game.i18n.localize("SWADESPICE.SettingHint" + setting.id),
            default: '',
            scope: 'world',
            config: true,
        });
    }
}