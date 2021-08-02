import {THEMES} from "./themes.js";

export const ConfigurationVariables = [
    {id: 'LeftBarBGColour', variable: '--spicy-left-bar-bg-color', config_type: "colour"},
    {id: 'TopBarColour', variable: '--spicy-top-bar-bg-color', config_type: "colour"},
    {id: 'BodyBGColour', variable: '--spicy-main-body-bg-color', config_type: "colour"},
    {id: 'LeftBarBGImage', variable: '--spicy-left-bar-bg-image', config_type: "file"},
    {id: 'TopBarBGImage', variable: '--spicy-top-bar-bg-image', config_type: "file"},
    {id: 'BodyBGImage', variable: '--spicy-main-body-bg-image', config_type: "file"},
];

export function register_settings(){
    for (let setting of ConfigurationVariables) {
        game.settings.register('swade-spices', setting.id, {
            name: game.i18n.localize("SWADESPICE.SettingName-" + setting.id),
            hint: game.i18n.localize("SWADESPICE.SettingHint-" + setting.id),
            default: '',
            scope: 'world',
            config: true,
        });
    }
    const theme_choices = {Custom: 'Custom'}
    for (let theme in THEMES) {
        theme_choices[theme] = theme
    }
    game.settings.register('swade-spices', 'theme', {
        name: game.i18n.localize("SWADESPICE.ThemeName"),
        hint: game.i18n.localize("SWADESPICE.ThemeHint"),
        default: 'Pulp',
        scope: 'world',
        config: true,
        type: String,
        choices: theme_choices,
        onChange: () => {
            window.location.reload();
        }
    })
}