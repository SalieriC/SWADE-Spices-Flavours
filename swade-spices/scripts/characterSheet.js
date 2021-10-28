// noinspection JSFileReferences,NpmUsedModulesInstalled
/* globals game */
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
        let items_grouped = {}
        for (let item of this.actor.items) {
            if (item.type in items_grouped) {
                items_grouped[item.type].push(item)
            } else {
                items_grouped[item.type] = [item]
            }
        }
        let trait_tab = {left: this.create_attribute_tab(data),
                         right: this.create_item_tab(
                             items_grouped.skill, game.i18n.localize("SWADE.Skills"), true)}
        let edge_tab = this.create_item_tab(items_grouped.edge, game.i18n.localize("SWADE.Edges"), true)
        data.spicytabs = {'trait': trait_tab, 'edge': edge_tab}
        return data
    }

    create_attribute_tab(data) {
        const ATTR_TRANSLATION_STRINGS = {
            strength: "SWADE.AttrStr", agility: "SWADE.AttrAgi", vigor: "SWADE.AttrVig",
            spirit: "SWADE.AttrSpr", smarts: "SWADE.AttrSma"}
        let tab = {'name': game.i18n.localize("SWADE.Attributes"),
            items: []}
        for (let attribute in data.data.data.attributes) {
            const die = data.data.data.attributes[attribute].die
            let name = attribute
            if (attribute in ATTR_TRANSLATION_STRINGS) {
                name = game.i18n.localize(ATTR_TRANSLATION_STRINGS[attribute])
            }
            name += this.create_die_string(die)
            tab.items.push({item_id: attribute, name: name, rollable: true})
        }
        return tab
    }

    create_item_tab(items, name, ordered) {
        let tab = {'name': name, items: []}
        const items_ordered = ordered?items.sort((a, b) => a.name.localeCompare(b.name)):items
        for (let item of items_ordered) {
            let rollable = false
            let name = item.name
            if (item.data.data.die) {
                const die = item.data.data.die
                name += this.create_die_string(die)
                rollable = true
            }
            tab.items.push({item_id: item.id, name: name, rollable: rollable})
        }
        return tab
    }

    create_die_string(die) {
        let name = ' d' + die.sides
        if (die.modifier) {
            if (die.modifier > 0) {
                name += '+'
            }
            name += `${die.modifier}`
        }
        return name
    }
}