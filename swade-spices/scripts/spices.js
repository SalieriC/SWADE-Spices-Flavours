import {SpicyCharacterSheet} from './characterSheet.js'

Hooks.once('init', () => {
    console.log("SWADE Spices & Flavor, initializing")
    Actors.registerSheet('swade', SpicyCharacterSheet, {
        types: ['character'],
        makeDefault: false,
        label: 'Spicy Sheet',
    });
})