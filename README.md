## Usage
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Enable this module and all its dependencies in your SWADE game world (the module won't show on non SWADE worlds). Navigate to the Module configuration and set up your theme. **Important: Remember to always reload your world (on PC this is F5) upon changes unless the world reloads on saving your settings anyway. Otherwise some changes might not show up** Changes on the colour pickers do not force a reload because then it would reload the world each time a colour from a single colour picker is chosen which is slowing down theme creation tremendously. Thus you may need to reload your world manually.  
This module will soon feature some sound effects (sfx) and will come with assets. **Be very careful when using your own assets!** You will have no way to stop the sfx from playing once they start playing (except reloading), so only use very short sound files (probably less than 3 seconds or so).  
  
If you want to support me you can do so on my Ko-fi:  
[![Ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/salieric)  
This is one way to show me that my module is actually used and well-received. These donations will only go to me (SlaieriC), not Javier.  

## Current Features
Currently the module has the following features (almost all of them are optional):
- Option to configure a custom background image for the community sheets.
- Option to display a custom Logo to the PC sheet.
- Option to display Skill icons on the Sheets.
- Option to show character artwork or token artwork on the top of the PC sheet.
- Option to center the character name within its field.
- Option to change the background, border and text colour of the sheets headers and tabs.
- Option to change the background and text colour of the PC sheets item colums background and text.
- Option to change the border radius of the sheets headers and tabs individually (to give it a sharp or round edge).
- - The tab radius is also used for powers in the Powers Tab.
- Colour Picker to change the scrollbar colours (does not affect those in currently edited fields).
- Colour Picker to change the status checkbox colours. (The checkmark currently cannot be edited.)
- Option to change the Benny front and back image. If changed, the Benny will also be shown on the official sheet.
- More visible toggle for Active Effects (hopefully for colour blind people as well).
- Option to make the sheets background image the chat message background.
- Option to give whispered chat messages a border colour, the border is 3 pixels wide and transparent (invisible) by default.
- Option to change the active tab text colour
- Option to change the Quick Access background colour.
- Option to change the background colour of every second (even) Skill. This colour is also used for Gear (Inventory tab), Edges and Hindrances (both in the Edges tab).
- Option to change the passive (non-selected) AB tab background colour. Active and hovered over tabs use the colour of the general tabs. The text colour is inherited from the passive and active general tabs respectively.
- Option to set a sheets background colour. This is important for background images with transparency, you won't notice changes otherwise.
- - If you set your sheets background image to also be your chats background image, this colour will also used for the chat. If you don't toggle this option, there will be no ill effects.
- Option to display character or token artwork on owned items.
- SFX upon opening and closing sheets (currently a bit buggy as it plays upon editing a sheet as well).
- - Includes assets.
- - Only plays for the one who is opening/closing the sheet, not everyone.
- Option to lock the token rotation by default, which is especially useful for portrait-style token art (as seen in PEGs VTT assets) so that the art doesn't rotate when you rotate your directed light source (essentially creating compatibility from the system to the core rules module).
- - This option is true by default because the core rules mainly use portrait style tokens. You can disable it any time though.
- - This also locks the rotation for actors upon importing them (i.e. from a compendium). It does not affect actors which already exist in the world though.
- Option to hide the Power Points from both actor sheets and the power item sheet. Useful for the No Power Points setting rule.
- Option to hide the currency from the PC sheet. Useful for the Wealth system or if you want the money to have a weight.

## Planned Features
You can take a look at the [Changelog](https://github.com/SalieriC/SWADE-Spices-Flavours/blob/main/CHANGELOG.md) to see our unreleased but planned features.

## Dependencies
- Obviously you need a [SWADE System](https://foundryvtt.com/packages/swade/) world to make any use of the module,
- you also need [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) and
- [lib - Color Settings](https://foundryvtt.com/packages/colorsettings/) activated in your world (you will be notified about it).

## Credits and Mentions
**Developed by:** [Salieri](https://github.com/SalieriC) & [Javier](https://github.com/javierriveracastro)  
Colour Picker made possible by [lib - Color Settings](https://foundryvtt.com/packages/colorsettings/)  

### Assets (used with explicit permission):
**SFX:**  
- Open & close sheet sfx: [fesliyanstudios.com](https://www.fesliyanstudios.com/)

For questions you can reach me on Discord: SalieriC#8263. 
For suggestions and bugs please create an issue.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/jvir"><img src="https://avatars.githubusercontent.com/u/5990316?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jvir</b></sub></a><br /><a href="#translation-jvir" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/parvusdomus"><img src="https://avatars.githubusercontent.com/u/71666845?v=4?s=100" width="100px;" alt=""/><br /><sub><b>parvusdomus</b></sub></a><br /><a href="#translation-parvusdomus" title="Translation">🌍</a> <a href="https://github.com/SalieriC/SWADE-Spices-Flavours/issues?q=author%3Aparvusdomus" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/montver"><img src="https://avatars.githubusercontent.com/u/72754407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>montver</b></sub></a><br /><a href="#ideas-montver" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://ko-fi.com/examinator"><img src="https://avatars.githubusercontent.com/u/2758908?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steven Weingärtner</b></sub></a><br /><a href="#ideas-eXaminator" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Alis-72"><img src="https://avatars.githubusercontent.com/u/75221971?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alis-72</b></sub></a><br /><a href="#a11y-Alis-72" title="Accessibility">️️️️♿️</a> <a href="#ideas-Alis-72" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Tenyryas"><img src="https://avatars.githubusercontent.com/u/61804473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tenyryas</b></sub></a><br /><a href="#example-Tenyryas" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/Ethaks"><img src="https://avatars.githubusercontent.com/u/589855?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethaks</b></sub></a><br /><a href="#example-Ethaks" title="Examples">💡</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/eclarke12"><img src="https://avatars.githubusercontent.com/u/42503461?v=4?s=100" width="100px;" alt=""/><br /><sub><b>errational</b></sub></a><br /><a href="#example-eclarke12" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
