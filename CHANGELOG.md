# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Planned
- Put sub-menues to the config page as it is getting quite big.
- Add a way to return to the default colour on the colour pickers.
- Option to select Fonts.
### Maybeboard
- Dynamically change the characters name font size so that longer names are still displayed fully.
- Option to add Attribute icons.
- Option to show owner portrait on item sheets if an item from a character sheet is opened, making it easy to see who this belongs to.
- A way to export settings as a way to create and share presets with other worlds and users.
- Show the Benny image on the community sheet.
- Adding Benny Image to the community sheet.

## [0.3.0] - Unreleased
### Added
- SFX upon opening and closing sheets (currently a bit buggy).
- - Includes assets.
- Option to lock the token rotation by default, which is especially useful for portrait-style token art (as seen in PEGs VTT assets) so that the art doesn't rotate when you rotate your directed light source (essentially creating compatibility from the system to the core rules module).
- - This option is true by default because the core rules mainly use portrait style tokens. You can disable it any time though.
- - This also locks the rotation for actors upon importing them (i.e. from a compendium). It does not affect actors which already exist in the world though.
- Option to hide the Power Points from both actor sheets and the power item sheet. Useful for the No Power Points setting rule.
- Option to hide the currency from the PC sheet. Useful for the Wealth system or if you want the money to have a weight.
### Fixed
- Typos.

## [0.2.0] - 2021-02-10
### Added
- Option to set the tabs and headers border colour.
- Option to change the border radius of the sheets headers and tabs individually (to give it a sharp or round edge).
- - Tab border radius also affects the powers border radius in the Powers tab.
- Colour Picker to change the scrollbar colours (does not affect those in currently edited fields).
- Option to change the active tab text colour
- Option to change the Quick Access background colour.
- Option to change the background colour of every second (even) Skill. This colour is also used for Gear (Inventory tab), Edges and Hindrances (both in the Edges tab).
- Option to change the passive (non-selected) AB tab background colour. Active and hovered over tabs use the colour of the general tabs. The text colour is inherited from the passive and active general tabs respectively.
- In the Powers tab the headline of the powers use the passive tab background and text colour now.
- Option to set a sheets background colour. This is important for background images with transparency, you won't notice changes otherwise.
- - If you set your sheets background image to also be your chats background image, this colour will also used for the chat. If you don't toggle this option, there will be no ill effects.
- Option to show the character portrait/token image on owned items.
### Fixed
- Hovered and active Tabs now can have a seperate colour.
- The hint for the character portrait option now reads "Put a portrait of the character behind the name.", previously it incorrectly read "before".
### Changed
- It is now possible to choose whether to show the character portrait or the token image on the character sheet.
### Removed
- Colour pickers do not force a reload anymore as it was not working properly. **Important: Remember to always reload your world (on PC this is F5) upon changes unless the world reloads on saving your settings anyway. Otherwise some changes might not show up**

## [0.1.4] - 2021-02-03
### Added
- More visible toggle for Active Effects (hopefully for colour blind people as well).
- Option to make the sheets background image the chat message background.
- Option to give whispered chat messages a border colour, the border is 3 pixels wide and transparent (invisible) by default.
- Colour Picker to change the status checkmark colours.
### Fixed
- Hovered and active Tabs now can have a seperate colour.
- The hint for the character portrait option now reads "Put a portrait of the character behind the name.", previously it incorrectly read "before".

## [0.1.3] - 2021-02-03
### Fixed
- Fixed a minor bug that caused the front side of the Benny not showing properly.

## [0.1.2] - 2021-02-03
### Added
- Option to change the Benny front and back image. If changed, the Benny will also be shown on the official sheet.
### Fixed
- All community sheets should have the checkbox colours now.

## [0.1.1] - 2021-02-02
### Added
- Colour Picker to change the status checkbox colours (only PC sheet atm). (The checkmark currently cannot be edited.)
### Fixed
- Item and Vehicle Sheets are now affected.

## [0.1.0] - 2021-02-01
### Added
- Option to display a custom Logo to the PC sheet.
- Option to display Skill icons on the Sheets.
- Option to show character artwork on the top of the sheet.
- Option to center the character name within its field.
- Option to change the background and text colour of the sheets headers and tabs.
- Option to change the background and text colour of the PC sheets item colums background and text.
- Added dependancies for [lib - Color Settings](https://foundryvtt.com/packages/colorsettings/) and the [SWADE system](https://foundryvtt.com/packages/swade/).

## [0.0.2] - 2021-01-30
### Added
- Option to configure a custom background image for the community sheet.

## [0.0.1] - 2021-01-30
### Added
- Basic module file structure.
