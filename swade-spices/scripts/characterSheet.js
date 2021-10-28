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
                         right: this.create_skill_tab(items_grouped.skill)}
        trait_tab.left.name = 'Attributes'
        trait_tab.right.name = 'Skills'
        data.spicytabs = {'trait': trait_tab}
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
            tab.items.push({item_id: attribute, name: name})
        }
        return tab
    }

    create_skill_tab(skills) {
        let tab = {'name': game.i18n.localize("SWADE.Skills"), items: []}
        const skill_ordered = skills.sort((a, b) => a.name.localeCompare(b.name))
        for (let skill of skill_ordered) {
            const die = skill.data.data.die
            let name = skill.name
            name += this.create_die_string(die)
            tab.items.push({item_id: skill.id, name: name})
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