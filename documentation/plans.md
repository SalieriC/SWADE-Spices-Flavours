# Code Base  
- Probably best to use the js of the official sheet to make the Spicy Sheet more resilient to changes in the SWADE System.  
- Create a complete new HTML and CSS for the Spicy Sheet. PEG only allows for small modifications on the Official Sheet.

# Look & Feel  
## Header
- Space for a custom logo.  
- Character Name (font size scales)  
- Small preview of the character artwork (customisable: token or character art)  
- Race (displays a link to the race entry when a racial template is dragged on the sheet)  
- Gender (a drop down menue with "male", "female" and "diverse", options can be extended in the modules settings but those three options are important so that other modules like SWIM can use that for gender specific sound effects)  
- Rank (Novice, Seasoned, etc. Cannot be edited by the player (updated by the amount of advances, see below). Names should be customisable for settings like ETU)  
- Number of Advances (increasing them updated the Rank according to the rules.)  
- Curr/Max Wounds, Fatigue, Bennies (or better in a Tab?)  
- Different background images for header and body?

## Tabs  
Tabs on the side of the sheet could save a lot of space. Edit: Not sure about this, it is not standard behaviour, most people expect tabs os top. But some systems had done this with some sucess.
- **Traits:**  
- - Curr/Max Wounds, Fatigue, Bennies (or better in the header?)  
- - Attributes (Agility, Smarts, Spirit, Strength and Vigor)  
- - Derived Statistics (Size, Scale (calculated by the sheet), Pace, Parry, Toughness)
- - - By default Parry and Toughness include mods (toggleable in the settings) and show mods next to the box.  
- - - ~~Clickink on the mod allows to set a generic mod (`data.stats.parry.modifier.generic`), which is independent of Active Effects mods which affect `data.stats.parry.modifier`) but added to this (this allows to set modifiers from stuff like Block without the need of an AE (this is also true for toughness)).~~ Only system can change the actor data, we can add flags not modify the real data.
- - Skills  
- - Quick Access (allows to display frequently used items (including Edges, Hindrances, etc.) to be displayed on the first tab. Items have a star to put them on the quick access).  
  
- **Features (formerly Edges & Hindrances):**  
- - Hindrances at the top
- - Edges  
- - Special Abilities

- **Inventory (formerly Gear):**  
- - Curr/Max Encumbrance (`data.stats.encumbrance.value` and `data.stats.encumbrance.max`) (can be disabled in the settings)  
- - Currency (can be disabled in the settings & respects the system setting of the name of the currency)  
- - Wealth (a die type, toggleable in the settings)  
- - Weapons (no speration of ranged an melee would be somewhat better imo as melee weapons which can be used in ranged combat (i.e. knives) whould always be listed in the ranged section)  
- - Armor (should include Shield as well I think)  
- - Misc (everything else)  

- **Powers:**  
- - Hidden if no AB is present. Sure?, some people is confused to hell by this behaviour in core.
- - Lists `All` and seperated by the AB.  
- - Power Points (renameable in the settings and an option to have PP for each AB or only one field in `All`, can also be completely turned off in the settings for the No PP Setting Rule)  
- - The Powers themselves.  

- **Effects:**  
- - A new tab that lists all Active Effects similar to the DnD 5e sheet, seperated by:
- - - Temporary (if they have a set duration)
- - - Passive (if they have no duration)  
- - - Inactive (if they are marked as suspended)  

- **Additional Stats:**  
- - A new tab that lists all activated Additional Stats and only shows up when at least one Additional Stat is activated in Tweaks, seperated by their type:  
- - - Text  
- - - Number  
- - - Checkbox  
- - - Die

- **Biography (formerly Description):**  
- - Character portrait  
- - Advances text field
- - Description text field

# Ambitions & Goals  
- A sheet more useable and user friendly than the official sheet.  
- Customisable from ground up.  
- Little to no clutter.  
- *Consistency*. Clicking in the same place should lead to the same results.  
- Complete compatibility with BR2 and PDFoundry (clickable PDF links).
- Quick Insert integration.  
