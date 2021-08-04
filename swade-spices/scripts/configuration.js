// noinspection JSCheckFunctionSignatures,JSValidateTypes

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
            config: false,
            onChange: () => {
                window.location.reload();
            }
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
    game.settings.registerMenu('swade-spices', 'custom-config', {
        name: "SWADESPICE.CustomSheetName",
        label: "SWADESPICE.CustomSheetLabel",
        hint: "SWADESPICE.CustomSheetHint",
        type: CustomConfigForm
    });
}

class CustomConfigForm extends FormApplication {
    static get defaultOptions() {
        let options = super.defaultOptions;
        options.id = 'spices-custom-config';
        options.template = "/modules/swade-spices/templates/customConfig.html";
        options.width = 630
        options.height = 700
        return options;
    }

    getData() {
        let settings_array = []
        for (let setting of ConfigurationVariables) {
            settings_array.push(
                {id: setting.id,
                 use_color_picker: setting.config_type === "colour",
                 use_file_picker: setting.config_type === "file",
                 value: game.settings.get('swade-spices', setting.id),
                 name: game.i18n.localize("SWADESPICE.SettingName-" + setting.id),
                 hint: game.i18n.localize("SWADESPICE.SettingHint-" + setting.id)})
        }
        return {settings_array: settings_array}
    }

    async _updateObject(_, formData) {
        for (let id in formData) {
            if (formData[id]) {
                await game.settings.set('swade-spices', id, formData[id])
            } else {
                await game.settings.set('swade-spices', id, '')
            }
        }
        window.location.reload()
    }
}