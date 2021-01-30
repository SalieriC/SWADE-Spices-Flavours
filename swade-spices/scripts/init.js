
function register_settings() {
    // Custom bennie settings
    // noinspection JSUnresolvedVariable
    // Sheet Logo
    game.settings.register('swade-spices', 'sheetLogo', {
        name: game.i18n.localize("SWADESPICE.sheetLogoName"),
        hint: game.i18n.localize("SWADESPICE.sheetLogoHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Sheet Background
    game.settings.register('swade-spices', 'sheetBack', {
        name: game.i18n.localize("SWADESPICE.sheetBackName"),
        hint: game.i18n.localize("SWADESPICE.sheetBackHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Skill icons
    game.settings.register('swade-spices', 'add_icons', {
        name: game.i18n.localize("SWADESPICE.AddSkillIcons"),
        hint: game.i18n.localize("SWADESPICE.AddSkillIconsHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true
    })
}

function add_icons (actor, html) {
    console.log(actor, html)
	// Remove all scrollables and inline actor styles
	html.find('.scrollable').removeClass('scrollable');
	html.find('.quickaccess-list, .inventory, .power-list, .skills-list, .gear-list, .gear.skills').css(
		'overflow', 'visible');
	let skill_list;
	if (actor.data.type === "character") {
		skill_list = html.find('li.item.skill');
	} else {
        skill_list = html.find('span.item.skill');
	}
	for (let skill_element of skill_list) {
		let skill_wrapper = $(skill_element);
		if (actor.data.type === 'npc') {
			// Remove the block-inline style so the skills are shown one per
			// line.
			skill_wrapper.removeAttr("style");
			skill_wrapper.attr('style', 'display:flex;');
		}
		let item_id = String(skill_wrapper.attr('data-item-id'));
		let skill = actor.getOwnedItem(item_id);
		skill_wrapper.prepend(`<img alt="roll" class="swade-skill-image" src="${skill.img}" data-item-id="${item_id}">`);
		// Edit text of NPC skills
		skill_wrapper.find('a.contextmenu-edit').each((_, element) => {
			let text = element.innerHTML.trim();
			if (!text.includes('&nbsp;')) {
				text = '&nbsp;' + text;
			}
			if (text.slice(-1) === ',') {
				text = text.slice(0, text.length - 1);
			}
			element.innerHTML = text;
		});
	}
}

function modify_character_sheet(app, html, __) {
    let icons_true = game.settings.get(
        'swade-spices', 'add_icons');
    if(icons_true) {
        add_icons(app.object, html)};
    let back_sheet = game.settings.get(
        'swade-spices', 'sheetBack');
    if (back_sheet) {
        html.find(".window-content").css("background-image", `url(${back_sheet})`);
    }
    // Custom Logo
    let logo_sheet = game.settings.get(
        'swade-spices', 'sheetLogo');
    if (logo_sheet) {
        html.find(".charname").before(`<img class="swade-logo" src="${logo_sheet}">`);
    }
}

function modify_npc_sheet(app, html, __) {
    let icons_true = game.settings.get(
        'swade-spices', 'add_icons');
    if(icons_true) {
        add_icons(app.object, html)};
    let back_sheet = game.settings.get(
        'swade-spices', 'sheetBack');
    if (back_sheet) {
        html.find(".window-content").css("background-image", `url(${back_sheet})`);
    }
}

Hooks.on(`ready`, () => {
    console.log('Swade Spices & Flavours for SWADE | Ready');
    register_settings();
});

Hooks.on(`renderSwadeCharacterSheet`, modify_character_sheet);

Hooks.on('renderSwadeNPCSheet', modify_npc_sheet);