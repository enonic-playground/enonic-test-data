import {
	//DATE_OBJECT,
	DATE_OBJECT_STRINGS,
	DATE_OBJECTS,
	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	//INSTANTS,
	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	//LOCAL_DATES,
	//LOCAL_DATE_TIMES,
	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,
	//LOCAL_TIMES
	MS_SINCE_EPOCH
} from './DateTime';

import {
	GEOPOINT_ARRAYS,
	//GEOPOINT_STRINGS,
	//GEOPOINT_ARRAYS_INVALID,
	//GEOPOINT_STRINGS_INVALID,
	GEOPOINTS,
	GEOPOINTS_INVALID
} from './GeoPoint';

import {
	FLOATS,
	NUMBERS_INFINITE,
	//INTEGERS_NEGATIVE,
	//INTEGERS_NON_NEGATIVE,
	//INTEGERS_POSITIVE,
	NAN,
	//INTEGERS,
	//NUMBERS_FINITE,
	NUMBERS,
	STRINGS_FLOAT,
	STRINGS_INTEGER_NEGATIVE,
	STRINGS_INTEGER_NON_NEGATIVE,
	STRING_NAN,
	STRINGS_NUMBER_INFINITE
} from './Number';

import {
	//UUID_NIL,
	//UUID_V4,
	UUID_V4_INVALID
} from './Uuid';

//──────────────────────────────────────────────────────────────────────────────

export {
	DATE_OBJECT,
	DATE_OBJECTS,
	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	INSTANTS,
	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	LOCAL_DATES,
	LOCAL_DATE_TIMES,
	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,
	LOCAL_TIMES
} from './DateTime';

export {
	GEOPOINT_ARRAYS,
	GEOPOINT_STRINGS,
	GEOPOINT_ARRAYS_INVALID,
	GEOPOINT_STRINGS_INVALID,
	GEOPOINTS,
	GEOPOINTS_INVALID
} from './GeoPoint';

export {
	FLOATS,
	NUMBERS_INFINITE,
	INTEGERS_NEGATIVE,
	INTEGERS_NON_NEGATIVE,
	INTEGERS_POSITIVE,
	NAN,
	INTEGERS,
	NUMBERS_FINITE,
	NUMBERS,
	STRINGS_FLOAT,
	STRINGS_INTEGER_NEGATIVE,
	STRINGS_INTEGER_NON_NEGATIVE,
	STRING_NAN,
	STRINGS_NUMBER_INFINITE
} from './Number';

export {
	ASCII_PUNCTUATION
} from './String';

export {
	UUID_NIL,
	UUID_V4,
	UUID_V4_INVALID
} from './Uuid';

//──────────────────────────────────────────────────────────────────────────────

export const BOOLEANS = [
	false,
	true
];
export const STRINGS_BOOLEAN = BOOLEANS.map(i => ''+i);
//console.debug('STRINGS_BOOLEAN', STRINGS_BOOLEAN);

export const EMPTY_ARRAY :Array<never> = [];
export const STRING_EMPTY_ARRAY = '[]';
//console.debug('STRING_EMPTY_ARRAY', STRING_EMPTY_ARRAY);

export const EMPTY_OBJECT = {};
export const STRING_EMPTY_OBJECT = '{}';
//console.debug('STRING_EMPTY_OBJECT', STRING_EMPTY_OBJECT);

export const EMPTY_STRING = '';

export const FUNCTION = () => {};

export const NULL = null;

export const OBJECTS = [
	EMPTY_OBJECT,
	{ key: 'property' }
];

export const UNDEFINED = undefined;

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────

export const STRINGS = ([] as Array<string>).concat([
	EMPTY_STRING,
	'a',
	STRING_EMPTY_ARRAY,
	STRING_EMPTY_OBJECT,
	'-0.0',
	'-0',
	'0.0',
	STRING_NAN,
	'new Date()'
],
	STRINGS_BOOLEAN,
	STRINGS_FLOAT,
	STRINGS_INTEGER_NEGATIVE,
	STRINGS_INTEGER_NON_NEGATIVE,
	STRINGS_NUMBER_INFINITE
	/*GEOPOINT_STRINGS,
	GEOPOINT_STRINGS_INVALID,
	//INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	//LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	UUID_NIL*/
);

//──────────────────────────────────────────────────────────────────────────────
// NOT
//──────────────────────────────────────────────────────────────────────────────
export const NOT_BOOLEANS = ([] as Array<unknown>).concat(
	//BOOLEANS,
	DATE_OBJECTS,
	//[EMPTY_ARRAY], // Enonic XP doesn't index an empty array
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINTS,
	[NAN],
	//NULL, // Enonic XP doesn't index an empty null
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_DATE_OBJECTS = ([] as Array<unknown>).concat(
	LOCAL_TIME_STRINGS_INVALID,

	BOOLEANS,
	//DATE_OBJECTS,
	//[EMPTY_ARRAY], // Enonic XP doesn't index an empty array
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINTS,
	[NAN],
	//NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS//,
	// UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_GEOPOINTS = ([] as Array<unknown>).concat(
	GEOPOINTS_INVALID,
	BOOLEANS,
	DATE_OBJECTS,
	//[EMPTY_ARRAY], // Enonic XP doesn't index an empty array
	[EMPTY_OBJECT],
	//FLOATS, // -0.0 and 0 becomes 0 which is an integer
	[FUNCTION],
	//GEOPOINTS, // Array of integer and floats
	[NAN],
	//NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_INSTANT_STRINGS = ([] as Array<unknown>).concat(
	INSTANT_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,

	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECTS,
	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
	[EMPTY_ARRAY],
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINTS, // Array of integer and floats
	[NAN],
	[NULL], // Enonic XP doesn't index null
	NUMBERS,
	STRINGS,
	[UNDEFINED]
);

export const NOT_LOCAL_DATE_STRINGS = ([] as Array<unknown>).concat(
	LOCAL_DATE_STRINGS_INVALID,

	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,

	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,

	DATE_OBJECTS,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
	[EMPTY_ARRAY],
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINTS, // Array of integer and floats
	[NAN],
	[NULL], // Enonic XP doesn't index null
	NUMBERS,
	STRINGS,
	[UNDEFINED]
);

export const NOT_LOCAL_DATE_TIME_STRINGS = ([] as Array<unknown>).concat(
	LOCAL_DATE_TIME_STRINGS_INVALID,

	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,

	DATE_OBJECTS,

	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
	[EMPTY_ARRAY],
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINTS, // Array of integer and floats
	[NAN],
	[NULL], // Enonic XP doesn't index null
	NUMBERS,
	STRINGS,
	[UNDEFINED]
);

export const NOT_NUMBERS = ([] as Array<unknown>).concat(
	BOOLEANS,
	DATE_OBJECTS,
	[EMPTY_ARRAY],
	[EMPTY_OBJECT],
	[FUNCTION],
	//GEOPOINTS, // Array of integer and floats
	[NAN],
	//NULL, // Enonic XP doesn't index null
	//NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

// Have to be placed after NOT_NUMBERS...
export const NOT_INTEGERS = ([] as Array<unknown>).concat(
	FLOATS,
	NUMBERS_INFINITE,
	NOT_NUMBERS
);

export const NOT_OBJECTS = ([] as Array<unknown>).concat(
	BOOLEANS,
	DATE_OBJECTS,
	[EMPTY_ARRAY],
	//EMPTY_OBJECT,
	[FUNCTION],
	GEOPOINTS, // Array of integer and floats
	[NAN],
	[NULL],
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_STRINGS = ([] as Array<unknown>).concat(
	BOOLEANS,
	DATE_OBJECTS,
	//[EMPTY_ARRAY], // Enonic XP doesn't index an empty array
	[EMPTY_OBJECT],
	[FUNCTION],
	GEOPOINT_ARRAYS,
	//GEOPOINT_STRINGS,
	[NAN],
	//NULL, // Enonic XP doesn't index null
	NUMBERS//,
	//STRINGS,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_UUID_V4 :Array<unknown> = [
	...UUID_V4_INVALID,
	EMPTY_STRING,
	'a',
	true,
	false,
	//EMPTY_ARRAY,
	{},
	-1,
	1,
	-Infinity,
	Infinity
];
