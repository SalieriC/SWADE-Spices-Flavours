import {SpicyCharacterSheet} from './characterSheet.js'
import {register_settings, ConfigurationVariables} from "./configuration.js";
import {THEMES} from "./themes.js";

function register_templates(){
    loadTemplates(['modules/swade-spices/templates/leftBar.html',
        'modules/swade-spices/templates/topBar.html',
        'modules/swade-spices/templates/mainBody.html',
        'modules/swade-spices/templates/descriptionTab.html',
        'modules/swade-spices/templates/itemTables.html',
        'modules/swade-spices/templates/inventoryHeader.html']).then(
        () => {console.log("SWADE Spices templates loaded")})
}

Hooks.once('init', () => {
    console.log("SWADE Spices & Flavor, initializing")
    Actors.registerSheet('swade', SpicyCharacterSheet, {
        types: ['character'],
        makeDefault: false,
        label: 'Spicy Sheet',
    });
})

Hooks.once('ready', () => {
    register_settings()
    register_templates()
    const theme = game.settings.get('swade-spices', 'theme')
    for (let config_var of ConfigurationVariables) {
        let value = theme === 'Custom' ?
            game.settings.get('swade-spices', config_var.id) :
            THEMES[theme][config_var.id]
        if (value) {
            if (config_var.config_type === 'file') {
                if (value.slice(0, 1) !== '/') {
                    value = '/' + value
                }
                value = `url(${value})`
            }
            document.documentElement.style.setProperty(config_var.variable, value)
        }
    }
})