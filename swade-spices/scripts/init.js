/* Hiding this for now as it is unfinished in 0.3.0
import {ColourConfiguration} from "./settings.js";
*/

function register_settings() {
    // Custom bennie settings
    // noinspection JSUnresolvedVariable
    /* Hiding this for now as it is unfinished in 0.3.0
    game.settings.registerMenu('swade-spices', 'colour-config', {
        name: game.i18n.localize("SWADESPICE.ColourSettingConf"),
        label: game.i18n.localize("SWADESPICE.ColourSettingConfLabel"),
        hint: game.i18n.localize("SWADESPICE.ColourSettingConfHint"),
        icon: 'fas fa-globe',
        type: ColourConfiguration,
    });
    */
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
    // Header size
    game.settings.register('swade-spices', 'PC_header_size', {
        name: game.i18n.localize("SWADESPICE.PCHeaderSizeName"),
        hint: game.i18n.localize("SWADESPICE.PCHeaderSizeHint"),
        type: Boolean,
        default: '',
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
    game.settings.register('swade-spices', 'font-family', {
        name: game.i18n.localize('SWADESPICE.FontFamilyName'),
        hint: game.i18n.localize("SWADESPICE.FontFamilyHint"),
        type: String,
        default: "",
        scope: "world",
        config: true
    });
    // Open sheet SFX
    game.settings.register('swade-spices', 'openSFX', {
        name: game.i18n.localize("SWADESPICE.openSFXName"),
        hint: game.i18n.localize("SWADESPICE.openSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: 'modules/swade-spices/assets/open_sheet-www.fesliyanstudios.com.ogg',
        scope: 'world',
        config: true,
    });
    // Close sheet SFX
    game.settings.register('swade-spices', 'closeSFX', {
        name: game.i18n.localize("SWADESPICE.closeSFXName"),
        hint: game.i18n.localize("SWADESPICE.closeSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: 'modules/swade-spices/assets/close_sheet-www.fesliyanstudios.com.ogg',
        scope: 'world',
        config: true,
    });
    // Open item sheet SFX
    game.settings.register('swade-spices', 'openItemSFX', {
        name: game.i18n.localize("SWADESPICE.openItemSFXName"),
        hint: game.i18n.localize("SWADESPICE.openItemSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: 'modules/swade-spices/assets/open_sheet-www.fesliyanstudios.com.ogg',
        scope: 'world',
        config: true,
    });
    // Close item sheet SFX
    game.settings.register('swade-spices', 'closeItemSFX', {
        name: game.i18n.localize("SWADESPICE.closeItemSFXName"),
        hint: game.i18n.localize("SWADESPICE.closeItemSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: 'modules/swade-spices/assets/close_sheet-www.fesliyanstudios.com.ogg',
        scope: 'world',
        config: true,
    });
    // Lock Token Rotation by default.
    game.settings.register('swade-spices', 'lockRotation', {
        name: game.i18n.localize("SWADESPICE.lockRotationName"),
        hint: game.i18n.localize("SWADESPICE.lockRotationHint"),
        type: Boolean,
        default: true,
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Hide PP from actor sheets and power items.
    game.settings.register('swade-spices', 'hidePP', {
        name: game.i18n.localize("SWADESPICE.hidePPName"),
        hint: game.i18n.localize("SWADESPICE.hidePPHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true,
    });
    // Hide Currency from PC sheet.
    game.settings.register('swade-spices', 'hideCurr', {
        name: game.i18n.localize("SWADESPICE.hideCurrName"),
        hint: game.i18n.localize("SWADESPICE.hideCurrHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true,
    });
    // Hide Text from Header Buttons
    game.settings.register('swade-spices', 'hideText', {
        name: game.i18n.localize("SWADESPICE.hideTextName"),
        hint: game.i18n.localize("SWADESPICE.hideTextHint"),
        type: Boolean,
        default: false,
        scope: 'world',
        config: true,
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


function getTextWidth (fontSize, value) {
  let div = document.createElement('div');
  div.innerHTML = value;
  div.style.fontSize = fontSize;
  div.style.width = 'auto';
  div.style.display = 'inline-block';
  div.style.visibility = 'hidden';
  div.style.position = 'fixed';
  div.style.overflow = 'auto';
  document.body.append(div)
  let width = div.clientWidth;
  div.remove();
  return width;
}


function modify_community_sheets(app, html) {
    if (game.settings.get('swade-spices', 'hideText')) {actor_sheet_header();}
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
    // Optional centered itemname
    if (game.settings.get('swade-spices', 'charname_centered')) {
        html.find("input.itemname, .itemname>input").css("text-align", `center`);
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
    let font_family = game.settings.get('swade-spices', 'font-family');
    if (font_family) {
        html.find('.window-content').css('font-family', font_family);
    }
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
    // Font size in char input.
    const name_input = html.find('.charname')
    // We need to give it some time to adjust rendenring
    if (name_input.length) {
        setTimeout(() => {
            const input_with = name_input[0].offsetWidth;
            const text_with = getTextWidth('40px', name_input[0].value);
            if (text_with > input_with) {
                // Name too long, adjust font
                let ideal_font_size = Math.floor(40 * input_with / text_with);
                ideal_font_size -= 1;
                name_input.css('font-size', `${ideal_font_size}px`);
            }
        }, 50);
    }
    // Open sheet SFX
    let open_sfx = game.settings.get('swade-spices', 'openSFX',);
    if (open_sfx && "spicesRenderer" in app === false) {
        // Check for initial render of the sheet to prevent sfx upon editing the sheet
        app.spicesRenderer = true;
        // Playing the sfx
        AudioHelper.play({ src: `${open_sfx}` }, false);
    }
    // Hide PP
    if (game.settings.get('swade-spices', 'hidePP')) {
        let hide_PP = "hidden";
        let hide_row = "none";
        document.documentElement.style.setProperty('--block_pp', `${hide_PP}`);
        document.documentElement.style.setProperty('--prevent_empty_space', `${hide_row}`);
    }
    // Hide Currency
    if (game.settings.get('swade-spices', 'hideCurr')) {
        let hide_curr = "hidden";
        document.documentElement.style.setProperty('--block_curr', `${hide_curr}`);
    }
}

function modify_character_sheet(app, html, __) {
    // Skill Icons
    // add_icons(app.object, html)
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
    //Header size
    if (game.settings.get('swade-spices', 'PC_header_size')) {
        html.find('.swade-logo').css('width', '30%');
        console.log(html.find('.swade-logo'))
        html.find('.swade-logo').css('height', 'auto');
        html.find('.swade-portrait').css('width', '20%')
        html.find('.swade-portrait').css('height', 'auto')
    }
}

function modify_npc_sheet(app, html, _) {
    // Skill Icons
    add_icons(app.object, html)
    modify_community_sheets(app, html)
    // Change the portrait to the token
    const img = html.find('.profile-img')[0];
    if (game.settings.get('swade-spices', 'protrait_first') === 'token') {
        img.src = app.object.token.data.img;
    }
}

function modify_official_sheet(app, html, __) {
    let back_benny = CONFIG.SWADE.bennies.textures.back;
    if (back_benny) {
        html.find(".bennies .spend-benny").css(
                "background-image", `url(${back_benny})`);
    }
    // Open sheet SFX
    let open_sfx = game.settings.get('swade-spices', 'openSFX',);
    if (open_sfx && "spicesRenderer" in app === false) {
        // Check for initial render of the sheet to prevent sfx upon editing the sheet
        app.spicesRenderer = true;
        // Playing the sfx
        AudioHelper.play({ src: `${open_sfx}` }, false);
    }
}

function modify_item_sheet(app, html) {
    if (game.settings.get('swade-spices', 'hideText')) {item_sheet_header();}
    // Character Portrait on owned items
    if (app.object.isOwned) {
        if (game.settings.get('swade-spices', 'protrait_items')) {
            const src = game.settings.get('swade-spices', 'protrait_items') === 'actor' ?
                app.object.actor.data.img :
                (app.object.actor.token ? app.object.actor.token.data.img :
                    (app.object.actor.data.token ? app.object.actor.data.token.img : app.object.actor.data.img));
            html.find(".sheet-header").append(
                `<img src="${src}" class="swade-portrait">`)
        }
    }
    // Font size in item input.
    const name_input = html.find('input.itemname, .itemname>input')
    // We need to give it some time to adjust rendenring
    if (name_input.length) {
        setTimeout(() => {
            const input_with = name_input[0].offsetWidth;
            const text_with = getTextWidth('40px', name_input[0].value);
            if (text_with > input_with) {
                // Name too long, adjust font
                let ideal_font_size = Math.floor(40 * input_with / text_with);
                ideal_font_size -= 1;
                name_input.css('font-size', `${ideal_font_size}px`);
            }
        }, 50);
    }
    // Open sheet SFX
    let open_sfx = game.settings.get('swade-spices', 'openItemSFX',);
    if (open_sfx && "spicesRenderer" in app === false) {
        // Check for initial render of the sheet to prevent sfx upon editing the sheet
        app.spicesRenderer = true;
        // Playing the sfx
        AudioHelper.play({ src: `${open_sfx}` }, false);
    }
    modify_community_sheets(app, html);
}

function close_sheet(app, __, ___) {
    // Close sheet SFX
    let close_sfx = game.settings.get('swade-spices', 'closeSFX');
    if (close_sfx) {
        AudioHelper.play({ src: `${close_sfx}` }, false);
        // delete the spicesRenderer upon closing so that sfx plays the next time the sheet is opened.
        if ("spicesRenderer" in app) {delete app.spicesRenderer;}
    }
}

function close_item_sheet(app, __, ___) {
    let close_sfx = game.settings.get('swade-spices', 'closeItemSFX');
    if (close_sfx) {
        AudioHelper.play({ src: `${close_sfx}` }, false);
        // delete the spicesRenderer upon closing so that sfx plays the next time the sheet is opened.
        if ("spicesRenderer" in app) {delete app.spicesRenderer;}
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
    //Make sheet BG the chat BG.
    if (game.settings.get('swade-spices', 'chatBackgroundOption')) {
        const chat_background = game.settings.get("swade-spices", "sheetBack");
        const chat_background_colour = game.settings.get("swade-spices", "windowBGColour");
        if (chat_background) {
            document.documentElement.style.setProperty('--background_chat', `url("/${chat_background}")`);
            document.documentElement.style.setProperty('--chat-bg-colour', `${chat_background_colour}`);
        }
    }
});

function actor_sheet_header() {
    $(".configure-token").text('');
    $(".configure-token").append(`<abbr title="Prototype Token"><a class="header-button configure-token"><i class="fas fa-user-circle"></i></abbr></a>`);
    item_sheet_header();
}

function item_sheet_header() {
    $(".configure-sheet").text('');
    $(".configure-sheet").append(`<abbr title="Sheet"><a class="header-button configure-sheet"><i class="fas fa-cog"></i></abbr></a>`);
    $(".configure-actor").text('');
    $(".configure-actor").append(`<abbr title="Tweaks"><a class="header-button configure-actor"><i class="fas fa-dice"></i></abbr></a>`);
    affect_all_headers();
}

function journal_header() {
    $(".entry-image").text('');
    $(".entry-image").append(`<abbr title="Image"><a class="header-button entry-image"><i class="fas fa-image"></i></abbr></a>`);
    $(".entry-text").text('');
    $(".entry-text").append(`<abbr title="Text"><a class="header-button entry-text"><i class="fas fa-file-alt"></i></abbr></a>`);
    $(".share-image").text('');
    $(".share-image").append(`<abbr title="Show Players"><a class="header-button share-image"><i class="fas fa-eye"></i></abbr></a>`);
    affect_all_headers();
}

function affect_all_headers() {
    $(".close").text('');
    $(".close").append(`<abbr title="Close"><a class="header-button close"><i class="fas fa-times"></i></abbr></a>`);
}

Hooks.on(`renderSwadeCharacterSheet`, modify_character_sheet);

Hooks.on('renderSwadeNPCSheet', modify_npc_sheet);

Hooks.on('renderSwadeItemSheet', modify_item_sheet);

Hooks.on('renderSwadeVehicleSheet', modify_community_sheets);

Hooks.on(`renderCharacterSheet`, modify_official_sheet);

Hooks.on(`closeSwadeCharacterSheet`, close_sheet);

Hooks.on('closeSwadeNPCSheet', close_sheet);

Hooks.on('closeSwadeItemSheet', close_item_sheet);

Hooks.on('closeSwadeVehicleSheet', close_sheet);

Hooks.on(`closeCharacterSheet`, close_sheet);

Hooks.on('renderJournalSheet', () => {
    if (game.settings.get('swade-spices', 'hideText')) {journal_header();}
});

Hooks.on('renderRollTableConfig', () => {
    if (game.settings.get('swade-spices', 'hideText')) {affect_all_headers();}
});

Hooks.on('renderSettingsConfig', () => {
    if (game.settings.get('swade-spices', 'hideText')) {affect_all_headers();}
});

Hooks.on('renderModuleManagement', () => {
    if (game.settings.get('swade-spices', 'hideText')) {affect_all_headers();}
});

Hooks.on('renderCompendium', () => {
    if (game.settings.get('swade-spices', 'hideText')) {affect_all_headers();}
});

Hooks.on('renderSceneConfig', () => {
    if (game.settings.get('swade-spices', 'hideText')) {affect_all_headers();}
});

// The "preCreateActor" hook differs from the "createActor" hook in that it is only executed on the client that is creating the actor (createActor will trigger on all clients), and it happens before the actual Actor instance is created, which allows you to safely add data to the actor easily before it's created. We can modify actorData and all of those modifications will show up in the final result.
Hooks.on('preCreateActor', (actorData, options, userID) => {
    // Makes sure that if the actor data doesn't already contain a prototype token, we create a blank object for the prototype token that we can modify (otherwise we'll just modify whatever is already there)
    actorData.token = actorData.token ?? {};
    // Constant that collects all the changes (makes it future proof in case more options are added later).
    const defaultTokenOptions = {};
    // Checks for settings and adds the relevant option to our constant above.
    if (game.settings.get ('swade-spices', 'lockRotation')) {
        defaultTokenOptions.lockRotation = true;
    }
    // Here we use mergeObject to combine any existing prototype token data with the new changes we want to add. It will take the changes we have and either add them to the prototype token if they don't already exist, or overwrite them if they do already exist.
    mergeObject(actorData.token, defaultTokenOptions);
});