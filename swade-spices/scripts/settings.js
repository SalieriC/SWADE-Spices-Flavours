/*export class ColourConfiguration extends FormApplication {
    constructor(object, options) {
        super(object, options);
    }
}*/
export class ColourConfiguration extends FormApplication {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "colourSettings";
        options.template = "modules/swade-spices/templates/colourConfiguration.html";
      
        options.width = 600;
        return options;
      }

    getData(_) {
        let curr_colours = {};
        curr_colours.curr_windowBGColourButton = game.settings.get("swade-spices", "windowBGColour")
        return curr_colours;
    }

    async _updateObject(event, formData) {
        const new_windowBGColourButton = formData.windowBGColourButton;
        game.settings.set("swade-spices", "windowBGColour", new_windowBGColourButton);
    }
}
