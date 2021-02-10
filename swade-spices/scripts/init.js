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
    });
    // Sheet Background
    game.settings.register('swade-spices', 'sheetBack', {
        name: game.i18n.localize("SWADESPICE.sheetBackName"),
        hint: game.i18n.localize("SWADESPICE.sheetBackHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        scope: 'world',
        config: true,
    });
    // Window background colour
    new window.Ardittristan.ColorSetting("swade-spices", "windowBGColour", {
        name: game.i18n.localize("SWADESPICE.windowBGColourName"),
        hint: game.i18n.localize("SWADESPICE.windowBGColourHint"),
        label: game.i18n.localize("SWADESPICE.windowBGColourButton"),
        restricted: true,
        defaultColor: "#faf9ed",
        scope: "world",
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
    });
    // Active Tab text colour picker
    new window.Ardittristan.ColorSetting("swade-spices", "activeTabTextColour", {
        name: game.i18n.localize("SWADESPICE.activeTabTextColourName"),
        hint: game.i18n.localize("SWADESPICE.activeTabTextColourHint"),
        label: game.i18n.localize("SWADESPICE.activeTabTextColourButton"),
        restricted: true,
        defaultColor: "#dfe6f5",
        scope: "world",
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
    // Tab and Header border colour
    new window.Ardittristan.ColorSetting("swade-spices", "tabBorderColour", {
        name: game.i18n.localize("SWADESPICE.tabBorderColourName"),
        hint: game.i18n.localize("SWADESPICE.tabBorderColourHint"),
        label: game.i18n.localize("SWADESPICE.tabBorderColourButton"),
        restricted: true,
        defaultColor: "#2c4251",
        scope: "world",
    });
    // Tab border radius
    game.settings.register('swade-spices', 'tabBorderRadius', {
        name: game.i18n.localize("SWADESPICE.tabBorderRadiusName"),
        hint: game.i18n.localize("SWADESPICE.tabBorderRadiusHint"),
        type: Number,
        default: '4',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Header border radius
    game.settings.register('swade-spices', 'headerBorderRadius', {
        name: game.i18n.localize("SWADESPICE.headerBorderRadiusName"),
        hint: game.i18n.localize("SWADESPICE.headerBorderRadiusHint"),
        type: Number,
        default: '0',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Quick Access Background Colour
    new window.Ardittristan.ColorSetting("swade-spices", "quicAccessBGColour", {
        name: game.i18n.localize("SWADESPICE.quicAccessBGColourName"),
        hint: game.i18n.localize("SWADESPICE.quicAccessBGColourHint"),
        label: game.i18n.localize("SWADESPICE.quicAccessBGColourButton"),
        restricted: true,
        defaultColor: "#00000033",
        scope: "world",
    });
    // Even Skills background colour
    new window.Ardittristan.ColorSetting("swade-spices", "evenSkillsBGColour", {
        name: game.i18n.localize("SWADESPICE.evenSkillsBGColourName"),
        hint: game.i18n.localize("SWADESPICE.evenSkillsBGColourHint"),
        label: game.i18n.localize("SWADESPICE.evenSkillsBGColourButton"),
        restricted: true,
        defaultColor: "#0000001a",
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
    // Passive AB Tab Colour
    new window.Ardittristan.ColorSetting("swade-spices", "passiveABTabColour", {
        name: game.i18n.localize("SWADESPICE.passiveABTabColourName"),
        hint: game.i18n.localize("SWADESPICE.passiveABTabColourHint"),
        label: game.i18n.localize("SWADESPICE.passiveABTabColourButton"),
        restricted: true,
        defaultColor: "#972824",
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
    // Portrait behind name
    game.settings.register('swade-spices', 'protrait_first', {
        name: game.i18n.localize("SWADESPICE.PortraitFirst"),
        hint: game.i18n.localize("SWADESPICE.PortraitFirstHint"),
        type: String,
        default: '',
        scope: 'world',
        config: true,
        choices: {'' : game.i18n.localize("SWADESPICE.None"),
            actor: game.i18n.localize("SWADESPICE.Actor"),
            token: game.i18n.localize("SWADESPICE.Token")}
    });
    // Portrait on owned items name
    game.settings.register('swade-spices', 'protrait_items', {
        name: game.i18n.localize("SWADESPICE.PortraitItemsName"),
        hint: game.i18n.localize("SWADESPICE.PortraitItemsHint"),
        type: String,
        default: '',
        scope: 'world',
        config: true,
        choices: {'' : game.i18n.localize("SWADESPICE.None"),
            actor: game.i18n.localize("SWADESPICE.Actor"),
            token: game.i18n.localize("SWADESPICE.Token")}
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
    // Sheets Background become chats background.
    game.settings.register('swade-spices', 'chatBackgroundOption', {
        name: game.i18n.localize("SWADESPICE.ChatBackgroundName"),
        hint: game.i18n.localize("SWADESPICE.ChatBackgroundHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Private chat message border colour
    new window.Ardittristan.ColorSetting("swade-spices", "privateMessageBorder", {
        name: game.i18n.localize("SWADESPICE.privateMessageBorderName"),
        hint: game.i18n.localize("SWADESPICE.privateMessageBorderHint"),
        label: game.i18n.localize("SWADESPICE.privateMessageBorderButton"),
        restricted: true,
        defaultColor: "#ffffff00",
        scope: "world",
    });
    //Scrollbar background colour
    new window.Ardittristan.ColorSetting("swade-spices", "scrollbarColour", {
        name: game.i18n.localize("SWADESPICE.scrollbarColourName"),
        hint: game.i18n.localize("SWADESPICE.scrollbarColourHint"),
        label: game.i18n.localize("SWADESPICE.scrollbarColourButton"),
        restricted: true,
        defaultColor: "#782e22",
        scope: "world",
    });
    //Scrollbar border colour
    new window.Ardittristan.ColorSetting("swade-spices", "scrollbarBorderColour", {
        name: game.i18n.localize("SWADESPICE.scrollbarBorderColourName"),
        hint: game.i18n.localize("SWADESPICE.scrollbarBorderColourHint"),
        label: game.i18n.localize("SWADESPICE.scrollbarBorderColourButton"),
        restricted: true,
        defaultColor: "#ff6400",
        scope: "world",
    });
    /* Fonts
    game.settings.register('swade-spices', 'font-family', {
        name: game.i18n.localize('SWADESPICE.FontFamilyName'),
        hint: game.i18n.localize("SWADESPICE.FontFamilyHint"),
        type: String,
        default: "",
        scope: "world",
        config: true
    });*/
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
    let colour_text = game.settings.get('swade-spices', 'textColour');
        /*html.find(".header-field").css("color", `${colour_text}`);
        html.find(".tabs .item").css("color", `${colour_text}`);*/
        document.documentElement.style.setProperty('--passive_tab_text_colour', `${colour_text}`);
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
    /* Fonts
    let font_family = game.settings.get('swade-spices', 'font-family');
    if (font_family) {
        html.find('.window-content').css('font-family', font_family);
    }*/
    // Disabled active effects
    html.find('.effect-controls>a>i.fa-power-off[style="color: gray;"]').parent().parent().parent().css(
        'text-decoration', 'line-through');
    // Checkmark Colour
    let colour_checkmark = game.settings.get("swade-spices", "checkmarkColour");
    if (colour_checkmark) {
        document.documentElement.style.setProperty('--checkmark_colour', `solid ${colour_checkmark}`);
    }
    // Tab and Header Border Colour
    let colour_tab_border = game.settings.get("swade-spices", "tabBorderColour");
    if (colour_tab_border) {
        document.documentElement.style.setProperty('--tab_border_colour', `1px solid ${colour_tab_border}`);
    }
    // Tab Border Radius
    let border_tab_radius = game.settings.get("swade-spices", "tabBorderRadius");
    if (border_tab_radius) {
        document.documentElement.style.setProperty('--tab_border_radius', `${border_tab_radius}px`);
    }
    // Header Border Radius
    let border_header_radius = game.settings.get("swade-spices", "headerBorderRadius");
    if (border_header_radius) {
        document.documentElement.style.setProperty('--header_border_radius', `${border_header_radius}px`);
    }
    let quick_access_bg = game.settings.get("swade-spices", "quicAccessBGColour");
    if (quick_access_bg) {
        document.documentElement.style.setProperty('--quick_access_bg_colour', `${quick_access_bg}`);
    }
    let passive_ab_tab = game.settings.get("swade-spices", "passiveABTabColour");
    if (passive_ab_tab) {
        document.documentElement.style.setProperty('--passive_ab_tab', `${passive_ab_tab}`);
    }
    let window_bg_colour = game.settings.get("swade-spices", "windowBGColour");
    if (window_bg_colour) {
        document.documentElement.style.setProperty('--window-bg-colour', `${window_bg_colour}`);
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
        const src = game.settings.get('swade-spices', 'protrait_first') === 'actor' ?
            app.object.img : (app.token ? app.token.data.img : app.object.data.token.img);
        html.find(".charline").append(`<img class="swade-portrait" src="${src}">`);
    }
    let even_skills_bg = game.settings.get("swade-spices", "evenSkillsBGColour");
    if (even_skills_bg) {
        document.documentElement.style.setProperty('--skills_even_bg_colour', `${even_skills_bg}`);
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

function modify_item_sheet(app, html) {
    // Character Portrait on owned items
    if (app.object.isOwned) {
        if (game.settings.get('swade-spices', 'protrait_items')) {
            console.log(app.object)
            const src = game.settings.get('swade-spices', 'protrait_items') === 'actor' ?
                app.object.actor.data.img :
                (app.object.actor.data.token ? app.object.actor.data.token.img : app.object.actor.data.img);
            html.find(".sheet-header").append(
                `<img src="${src}" class="swade-portrait">`)
        }
    }
    modify_community_sheets(app, html);
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
    //Active Tab Colour
    const colour_tab_active = game.settings.get("swade-spices", "activeTabColour");
    if (colour_tab_active) {
        document.documentElement.style.setProperty('--active_tab_color', colour_tab_active);
    }
    //Active Tab Text Colour
    const colour_tab_text_active = game.settings.get("swade-spices", "activeTabTextColour");
    if (colour_tab_text_active) {
        document.documentElement.style.setProperty('--active_tab_text_color', colour_tab_text_active);
    }
    //Make sheet BG the chat BG.
    if (game.settings.get('swade-spices', 'chatBackgroundOption')) {
        const chat_background = game.settings.get("swade-spices", "sheetBack");
        const chat_background_colour = game.settings.get("swade-spices", "windowBGColour");
        if (chat_background) {
            document.documentElement.style.setProperty('--background_chat', `url("/${chat_background}")`);
            document.documentElement.style.setProperty('--chat-bg-colour', `${chat_background_colour}`);
        }
    }
    //Whisper message border colour
    const private_border = game.settings.get("swade-spices", "privateMessageBorder");
    if (private_border) {
        document.documentElement.style.setProperty('--private_color', `3px solid ${private_border}`);
    }
    //Scrollbar BG colour
    const scrollbar_bg = game.settings.get("swade-spices", "scrollbarColour");
    if (scrollbar_bg) {
        document.documentElement.style.setProperty('--scrollbar_background', `${scrollbar_bg}`);
    }
    //Scrollbar border colour
    const scrollbar_border = game.settings.get("swade-spices", "scrollbarBorderColour");
    if (scrollbar_border) {
        document.documentElement.style.setProperty('--scrollbar_border', `1px solid ${scrollbar_border}`);
    }
});

Hooks.on(`renderSwadeCharacterSheet`, modify_character_sheet);

Hooks.on('renderSwadeNPCSheet', modify_npc_sheet);

Hooks.on('renderSwadeItemSheet', modify_item_sheet);

Hooks.on('renderSwadeVehicleSheet', modify_community_sheets);

Hooks.on(`renderCharacterSheet`, modify_official_sheet);