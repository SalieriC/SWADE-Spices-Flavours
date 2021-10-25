// noinspection JSFileReferences,NpmUsedModulesInstalled
import CharacterSheet from "/systems/swade/module/sheets/official/CharacterSheet.js";

export class SpicyCharacterSheet extends CharacterSheet {
    // noinspection JSUnusedGlobalSymbols
    static get defaultOptions() {
        return {
            ...super.defaultOptions,
            classes: ['sheet', 'actor'],
        };
    }

    // noinspection JSCheckFunctionSignatures
    get template() {
        return 'modules/swade-spices/templates/spicySheet.html';
    }

    getData() {
        let data = super.getData()
        let trait_tab = {left: {}, right: {}}
        trait_tab.left.name = 'Attributes'
        trait_tab.right.name = 'Skills'
        data.spicytabs = {'trait': trait_tab}
        console.log(data)
        return data
    }
}