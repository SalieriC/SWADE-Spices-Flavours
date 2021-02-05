
function register_settings() {
    // Custom bennie settings
    // noinspection JSUnresolvedVariable
    game.settings.register('swade-spices', 'bennyFront', {
        name: game.i18n.localize("SWADESPICE.BennieFrontName"),
        hint: game.i18n.localize("SWADESPICE.BennieFrontHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    game.settings.register('swade-spices', 'bennyBack', {
        name: game.i18n.localize("SWADESPICE.BennieBackName"),
        hint: game.i18n.localize("SWADESPICE.BennieBackHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
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
    // Tab and Header background colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "tabColour", {
        name: game.i18n.localize("SWADESPICE.tabColourName"),
        hint: game.i18n.localize("SWADESPICE.tabColourHint"),
        label: game.i18n.localize("SWADESPICE.tabColourButton"),
        restricted: true,
        defaultColor: "#972824",
        scope: "world",
    });
    // Active Tab background colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "activeTabColour", {
        name: game.i18n.localize("SWADESPICE.activeTabColourName"),
        hint: game.i18n.localize("SWADESPICE.activeTabColourHint"),
        label: game.i18n.localize("SWADESPICE.activeTabColourButton"),
        restricted: true,
        defaultColor: "#aca592",
        scope: "world",
        onChange: () => {
            window.location.reload();
        }
    });
    // Tab and Header text colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "textColour", {
        name: game.i18n.localize("SWADESPICE.textColourName"),
        hint: game.i18n.localize("SWADESPICE.textColourHint"),
        label: game.i18n.localize("SWADESPICE.textColourButton"),
        restricted: true,
        defaultColor: "#dfe6f5",
        scope: "world",
    });
    // Item column background colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "columnColour", {
        name: game.i18n.localize("SWADESPICE.columnColourName"),
        hint: game.i18n.localize("SWADESPICE.columnColourHint"),
        label: game.i18n.localize("SWADESPICE.columnColourButton"),
        restricted: true,
        defaultColor: "#972824",
        scope: "world",
    });
    // Item column text colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "columnTextColour", {
        name: game.i18n.localize("SWADESPICE.columnTextColourName"),
        hint: game.i18n.localize("SWADESPICE.columnTextColourHint"),
        label: game.i18n.localize("SWADESPICE.columnTextColourButton"),
        restricted: true,
        defaultColor: "#ffffff",
        scope: "world",
    });
    // Checkbox background colour
    new window.Ardittristan.ColorSetting("swade-spices", "checkboxBGColour", {
        name: game.i18n.localize("SWADESPICE.checkboxBGColourName"),
        hint: game.i18n.localize("SWADESPICE.checkboxBGColourHint"),
        label: game.i18n.localize("SWADESPICE.checkboxBGColourButton"),
        restricted: true,
        defaultColor: "#aca592",
        scope: "world",
    });
    //Checkmark colour
    new window.Ardittristan.ColorSetting("swade-spices", "checkmarkColour", {
        name: game.i18n.localize("SWADESPICE.checkmarkColourName"),
        hint: game.i18n.localize("SWADESPICE.checkmarkColourHint"),
        label: game.i18n.localize("SWADESPICE.checkmarkColourButton"),
        restricted: true,
        defaultColor: "#972824",
        scope: "world",
    });
    // Skill icons
    game.settings.register('swade-spices', 'add_icons', {
        name: game.i18n.localize("SWADESPICE.AddSkillIcons"),
        hint: game.i18n.localize("SWADESPICE.AddSkillIconsHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true
    });
    // Portrait before name
    game.settings.register('swade-spices', 'protrait_first', {
        name: game.i18n.localize("SWADESPICE.PortraitFirst"),
        hint: game.i18n.localize("SWADESPICE.PortraitFirstHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true
    });
    // Charname centered
    game.settings.register('swade-spices', 'charname_centered', {
        name: game.i18n.localize("SWADESPICE.CharnameCenteredName"),
        hint: game.i18n.localize("SWADESPICE.CharnameCenteredHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true
    });
    // Fonts
    game.settings.register('swade-spices', 'font-family', {
        name: game.i18n.localize('SWADESPICE.FontFamilyName'),
        hint: game.i18n.localize("SWADESPICE.FontFamilyHint"),
        type: String,
        default: "",
        scope: "world",
        config: true
    });
}

function add_icons (actor, html) {
    if (! game.settings.get('swade-spices', 'add_icons')) return;
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

function modify_community_sheets(_, html) {
    // Sheet Background
    let back_sheet = game.settings.get(
        'swade-spices', 'sheetBack');
    if (back_sheet) {
        html.find(".window-content").css("background-image", `url(${back_sheet})`);
    }
    // Optional centered charname
    if (game.settings.get('swade-spices', 'charname_centered')) {
        html.find("input.charname, .charname>input").css("text-align", `center`);
    }
    //Header and Tabs background colour
    let colour_tab = game.settings.get(
        'swade-spices', 'tabColour');
    html.find(".header-field").css("background", `${colour_tab}`);
    //Header and Tabs text colour
    let colour_text = game.settings.get(
        'swade-spices', 'textColour');
        html.find(".header-field").css("color", `${colour_text}`);
        html.find(".tabs .item").css("color", `${colour_text}`);
    //Item column background colour
    let colour_column = game.settings.get(
        'swade-spices', 'columnColour');
        html.find(".item-titles").css("background", `${colour_column}`);
    //Item column text colour
    let colour_columnText = game.settings.get(
        'swade-spices', 'columnTextColour');
        html.find(".item-titles").css("color", `${colour_columnText}`);
    // Checkbox Background colour
    let colour_checkboxBG = game.settings.get(
        'swade-spices', 'checkboxBGColour');
        html.find(".checkmark").css("background-color", `${colour_checkboxBG}`);
    // Fonts
    let font_family = game.settings.get('swade-spices', 'font-family');
    if (font_family) {
        html.find('.window-content').css('font-family', font_family);
    }
    // Disabled active effects
    html.find('.effect-controls>a>i.fa-power-off[style="color: gray;"]').parent().parent().parent().css(
        'text-decoration', 'line-through');
    //Checkmark Colour
    let colour_checkmark = game.settings.get("swade-spices", "checkmarkColour");
    if (colour_checkmark) {
        document.documentElement.style.setProperty('--checkmark_colour', `solid ${colour_checkmark}`);
    }
}

function modify_character_sheet(app, html, __) {
    // Skill Icons
    add_icons(app.object, html)
    modify_community_sheets(app, html)
    // Custom Logo
    let logo_sheet = game.settings.get(
        'swade-spices', 'sheetLogo');
    if (logo_sheet) {
        html.find(".charname").before(`<img class="swade-logo" src="${logo_sheet}">`);
    }
    // Character Portrait on front page
    if (game.settings.get('swade-spices', 'protrait_first')) {
        html.find(".charline").append(`<img class="swade-portrait" src="${app.object.img}">`);
    }
}

function modify_npc_sheet(app, html, _) {
    // Skill Icons
    add_icons(app.object, html)
    modify_community_sheets(app, html)
}

function modify_official_sheet(_, html, __) {
    let back_benny = CONFIG.SWADE.bennies.textures.back;
    if (back_benny) {
        html.find(".bennies .spend-benny").css(
                "background-image", `url(${back_benny})`);
    }
}

Hooks.on(`ready`, () => {
    console.log('Swade Spices & Flavours for SWADE | Ready');
    register_settings();
    try{window.Ardittristan.ColorSetting.tester} catch {
        ui.notifications.notify('Please make sure you have the "lib - ColorSettings" module installed and enabled.', "error");
    }
    const benny_front = game.settings.get(
        'swade-spices', 'bennyFront');
    if (benny_front) {
        CONFIG.SWADE.bennies.textures.front = benny_front;
    }
    const benny_back = game.settings.get(
        'swade-spices', 'bennyBack');
    if (benny_back) {
        CONFIG.SWADE.bennies.textures.back = benny_back;
    }
    // Modify css variables
    const colour_tab_passive = game.settings.get("swade-spices", "tabColour");
    if (colour_tab_passive) {
        document.documentElement.style.setProperty('--passive_tab_color', colour_tab_passive);
    }
    const colour_tab_active = game.settings.get("swade-spices", "activeTabColour");
    if (colour_tab_active) {
        document.documentElement.style.setProperty('--active_tab_color', colour_tab_active);
    }
    const chat_background = game.settings.get("swade-spices", "sheetBack");
    if (chat_background) {
        document.documentElement.style.setProperty('--background_chat', `url("/${chat_background}")`);
    }
});

Hooks.on(`renderSwadeCharacterSheet`, modify_character_sheet);

Hooks.on('renderSwadeNPCSheet', modify_npc_sheet);

Hooks.on('renderSwadeItemSheet', modify_community_sheets);

Hooks.on('renderSwadeVehicleSheet', modify_community_sheets);

Hooks.on(`renderCharacterSheet`, modify_official_sheet);