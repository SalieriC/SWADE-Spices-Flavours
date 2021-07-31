import {SpicyCharacterSheet} from './characterSheet.js'
import {register_settings, ConfigurationVariables} from "./configuration.js";

Hooks.once('init', () => {
    console.log("SWADE Spices & Flavor, initializing")
    Actors.registerSheet('swade', SpicyCharacterSheet, {
        types: ['character'],
        makeDefault: false,
        label: 'Spicy Sheet',
    });
})

Hooks.once('ready', () => {
    register_settings();
    for (let config_var of ConfigurationVariables) {
        console.log(config_var)
        const value = game.settings.get('swade-spices', config_var.id)
        if (value) {
            document.documentElement.style.setProperty(config_var.variable, value);
        }
    }
})