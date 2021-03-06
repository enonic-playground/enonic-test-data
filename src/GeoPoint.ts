import type {GeoPointArray} from './index.d';


export const GEOPOINT_ARRAYS :Array<GeoPointArray> = [
	[59.9090442,10.7423389],
	[-90,-180],
	[90,-180],
	[0,0],
	[-90,180],
	[90,180]
];

export const GEOPOINT_STRINGS = [
	'59.9090442,10.7423389',
	'-90,-180',
	'90,-180',
	'0,0',
	'-90,180',
	'90,180'
];

//──────────────────────────────────────────────────────────────────────────────
// Invalid
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINT_ARRAYS_INVALID :Array<GeoPointArray> = [
	[-91,-180],
	[-90.0000001,-181],

	[-90,-181],
	[-90,-180.0000001],

	[91,-180],
	[90.0000001,-180],

	[90,-181],
	[90,-180.0000001],

	[-91,180],
	[-90.0000001,180],

	[-90,181],
	[-90,180.0000001],

	[91,180],
	[90.0000001,180],

	[90,181],
	[90,180.0000001]//,

	//[0,0,0] // Array of number
];

export const GEOPOINT_STRINGS_INVALID = [
	'-91,-180',
	'-90,-181',
	'91,-180',
	'90,-181',
	'-91,180',
	'-90,181',
	'91,180',
	'90,181'//,
	//'0,0,0'
];

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINTS = ([] as Array<GeoPointArray|string>).concat(
	GEOPOINT_ARRAYS,
	GEOPOINT_STRINGS
);

export const GEOPOINTS_INVALID = ([] as Array<GeoPointArray|string>).concat(
	GEOPOINT_ARRAYS_INVALID,
	GEOPOINT_STRINGS_INVALID
);
