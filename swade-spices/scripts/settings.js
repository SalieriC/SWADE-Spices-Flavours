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

    getData(options) {
        console.log(options);
        return {something: "this is somethinf"};
    }

    async _updateObject(event, formData) {
        console.log(event, formData)
    }
}
