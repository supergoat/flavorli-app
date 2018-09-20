/* Color Definitions
============================================================================= */
const NAMED_COLORS: COLOR_TYPES = {
  alabaster: '#F9F9F9',
  alabasterLight: '#FBFBFB',
  apple: '#32CD32',
  azure: '#2E60B0',
  black: '#000000',
  bone: '#E9DBCE',
  forestGreen: '#2BAD2B',
  gallery: '#EEEEEE',
  mariner: '#2277D8',
  orinoco: '#DFF8C8',
  osloGrey: '#7e8890',
  oxfordBlue: '#333C4E',
  riverBed: '#424B5C',
  silver: '#CDCDCD',
  stRopaz: '#2E589B',
  white: "#FFFFFF",
};

/* Color Type Definitions
============================================================================= */
type COLOR_TYPES =
  'alabaster'
  | 'alabasterLight'
  | 'apple'
  | 'azure'
  | 'black'
  | 'bone'
  | 'forestGreen'
  | 'gallery'
  | 'mariner'
  | 'orinoco'
  | 'osloGrey'
  | 'oxfordBlue'
  | 'riverBed'
  | 'silver'
  | 'stRopaz'
  | 'white'

/* Export
============================================================================= */
export default {
  ...NAMED_COLORS
}
