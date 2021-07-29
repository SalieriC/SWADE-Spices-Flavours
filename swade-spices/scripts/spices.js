import {SpiceCharacterSheet} from './characterSheet.js'

Hooks.once('init', () => {
    console.log("SWADE Spices & Flavor, initializing")
    Actors.registerSheet('swade', SpiceCharacterSheet, {
        types: ['character'],
        makeDefault: false,
        label: 'Spice Sheet',
    });
})