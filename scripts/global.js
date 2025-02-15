// this module... obviously
export const thisModule = 'sw5e-npc-importer';

// module defaults and registered settings
export const defaultPackage = 'sw5e-compendium';
export const settingPackageToUse = 'packageToUse';
export const settingAdditionalTraits = 'additionalStats';
export const settingDefaultDisposition = 'defaultDisposition';
export const settingDefaultActorType = 'defaultActorType';
export const settingDefaultIsWildcard = 'defaultIsWildcard';
export const settingBulletPointIcons = 'bulletPointIcons';
export const settingLastSaveFolder = 'lastSaveFolder';
export const settingCompsToUse = 'compsToUse';
export const settingActiveCompendiums = 'activeCompendiums';
export const settingParaeLanguage = 'parseLanguage';
export const settingModifiedSpecialAbs = 'modSpecailAbs';
export const settingToken = 'tokenSettings';
export const settingCalculateIgnoredWounds = 'calculateIgnoreWounds';
export const settingCalculateAdditionalWounds = 'calculateAdditionalWounds';
export const settingAutoCalcToughness = 'autoCalcToughness';
export const settingAutoCalcSize = 'autoCalcSize';
export const settingallAsSpecialAbilities = 'allAsSpecialAbilities';
export const twoHandsNotaiton = 'twoHandsNotaiton';
export var allPacks = [];

// global logger
export const log = function (msg) {
  console.log(`SW5E Stat Block Importer | ${msg}`);
};

// regex
export const newLineRegex = /\r\n|\n|\r/g;
export const gearParsingRegex =
  /(^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.\-]+)(\(([^()]+)\))?,?/gi;
export const armorModRegex = /\+\d+/;
export const plusMinusNumRegex = /([+-])\\d+/;
