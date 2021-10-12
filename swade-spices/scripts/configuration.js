// noinspection JSCheckFunctionSignatures,JSValidateTypes
/* global game, FormApplication, saveDataToFile, Dialog, renderTemplate, ui, readTextFromFile */
/* jshint -W089 */

import {THEMES} from "./themes.js";

export const ConfigurationVariables = [
    {id: 'LeftBarBGColour', variable: '--spicy-left-bar-bg-color', config_type: "colour", tab:"Tab1"},
    {id: 'TopBarColour', variable: '--spicy-top-bar-bg-color', config_type: "colour", tab:"Tab1"},
    {id: 'BodyBGColour', variable: '--spicy-main-body-bg-color', config_type: "colour", tab:"Tab1"},
    {id: 'LeftBarBGImage', variable: '--spicy-left-bar-bg-image', config_type: "file", tab:"Tab1"},
    {id: 'TopBarBGImage', variable: '--spicy-top-bar-bg-image', config_type: "file", tab:"Tab1"},
    {id: 'BodyBGImage', variable: '--spicy-main-body-bg-image', config_type: "file", tab:"Tab1"},
    {id: 'CharnameTextColour', variable: '--spicy-top-bar-charname-color', config_type: "colour", tab:"Tab2"},
    {id: 'LeftBarLogo', variable: '--spicy-left-bar-logo', config_type: "file", tab:"Tab2"},
    {id: 'LeftBarHealthTextColour', variable: '--spicy-left-bar-health-text-color', config_type: "colour", tab:"Tab2"},
    {id: 'LeftBarStatusTextColour', variable: '--spicy-left-bar-status-text-color', config_type: "colour", tab:"Tab2"},
    {id: 'LeftBarDerivedNameTextColour', variable: '--spicy-left-bar-derived-name-text-color', config_type: "colour", tab:"Tab2"},
    {id: 'LeftBarDerivedValueTextColour', variable: '--spicy-left-bar-derived-value-text-color', config_type: "colour", tab:"Tab2"},
    {id: 'LeftBarDerivedModifierTextColour', variable: '--spicy-left-bar-derived-modifier-text-color', config_type: "colour", tab:"Tab2"},
    {id: 'CheckboxColour', variable: '--spicy-checkbox-color', config_type: "colour", tab:"Tab2"},
    {id: 'CheckboxColourChecked', variable: '--spicy-checkbox-color-checked', config_type: "colour", tab:"Tab2"},
    {id: 'CheckmarkColour', variable: '--spicy-checkmark-color', config_type: "colour", tab:"Tab2"},
    {id: 'CheckmarkColourFocus', variable: '--spicy-checkbox-color-focus', config_type: "colour", tab:"Tab2"},
    {id: 'MainBodyTabIconsQA', variable: '--spicy-main-body-tab-icon-qa', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsTraits', variable: '--spicy-main-body-tab-icon-traits', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsEdges', variable: '--spicy-main-body-tab-icon-edges', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsHindrances', variable: '--spicy-main-body-tab-icon-hindrances', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsAbilities', variable: '--spicy-main-body-tab-icon-abilities', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsInventory', variable: '--spicy-main-body-tab-icon-inventory', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsPowers', variable: '--spicy-main-body-tab-icon-powers', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsEffects', variable: '--spicy-main-body-tab-icon-effects', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabIconsDescription', variable: '--spicy-main-body-tab-icon-description', config_type: "file", tab:"Tab3"},
    {id: 'MainBodyTabBackgroundColour', variable: '--spicy-main-body-tab-background-color', config_type: "color", tab:"Tab1"},
    {id: 'MainBodyTabTextColour', variable: '--spicy-main-body-tab-background-color', config_type: "color", tab:"Tab1"}
    
];

export function register_settings(){
    for (let setting of ConfigurationVariables) {
        game.settings.register('swade-spices', setting.id, {
            name: game.i18n.localize("SWADESPICE.SettingName-" + setting.id),
            hint: game.i18n.localize("SWADESPICE.SettingHint-" + setting.id),
            default: '',
            scope: 'world',
            config: false,
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
    })
    game.settings.register('swade-spices', 'compactMode', {
        name: game.i18n.localize("SWADESPICE.CompactModeName"),
        hint: game.i18n.localize("SWADESPICE.CompactModeHint"),
        default: 'true',
        scope: 'world',
        config: true,
        type: Boolean,
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

    activateListeners(html) {
        html.find('.spices-export').on('click', export_custom_theme)
        html.find('.spices-import').on('click', import_custom_theme)
        html.find('.spices-tab-header').on('click', this.change_tab)
        return super.activateListeners(html);
    }

    change_tab(event) {
        const tab_name = event.currentTarget.dataset.tab
        $('.spices-tab').each((_, tab) => {
            if (tab.dataset.tab === tab_name) {
                $(tab).addClass('active')
            } else {
                $(tab).removeClass('active')
            }
        })
    }

    getData() {
        let tabs = {}
        for (let setting of ConfigurationVariables) {
            if (! tabs.hasOwnProperty(setting.tab)) {
                tabs[setting.tab] = []
            }
            tabs[setting.tab].push(
                {id: setting.id,
                 use_color_picker: setting.config_type === "colour",
                 use_file_picker: setting.config_type === "file",
                 value: game.settings.get('swade-spices', setting.id),
                 name: game.i18n.localize("SWADESPICE.SettingName-" + setting.id),
                 hint: game.i18n.localize("SWADESPICE.SettingHint-" + setting.id)})
        }
        return {tabs: tabs}
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


/**
 * Exports custom customizations to a json file.
 */
function export_custom_theme() {
    let options = {}
    for (let setting of ConfigurationVariables) {
        options[setting.id] = game.settings.get('swade-spices', setting.id)
    }
    saveDataToFile(JSON.stringify(options), 'json', "customizations.json")
}

/**
 * Import global customizations from disk
 * @return {Promise<void>}
 */
async function import_custom_theme() {
    // noinspection JSUnusedGlobalSymbols
    new Dialog({
      title: `Import Data: ${this.name}`,
      content: await renderTemplate("templates/apps/import-data.html",
          {
            hint1: game.i18n.localize("SWADESPICE.ImportHint"),
            hint2: game.i18n.localize("SWADESPICE.ImportWarning")}),
      buttons: {
        import: {
          icon: '<i class="fas fa-file-import"></i>',
          label: "Import",
          callback: html => {
            const form = html.find("form")[0];
            if ( !form.data.files.length ) {return ui.notifications.error("You did not upload a data file!")}
            readTextFromFile(form.data.files[0]).then((json) => {
                const settings = JSON.parse(json)
                for (let setting in settings) {
                    game.settings.set('swade-spices', setting, settings[setting])
                }
                window.location.reload()
            });
          }
        },
        no: {
          icon: '<i class="fas fa-times"></i>',
          label: "Cancel"
        }
      },
      default: "import"
    }, {
      width: 400
    }).render(true);
}