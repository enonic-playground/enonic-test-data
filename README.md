# `@enonic/test-data`

Exports constants that contain test values for most javascript and some Enonic XP data-types.

Some of these test values are Egde(min/max extremes) and Boundary(just outside edge) case values.

## Usage

```ts
import {
	GEOPOINT_ARRAYS,
	GEOPOINT_ARRAYS_INVALID
} from '@enonic/test-data';

console.debug(GEOPOINT_ARRAYS);
/*
	[59.9090442,10.7423389],
	[-90,-180],
	[90,-180],
	[0,0],
	[-90,180],
	[90,180]
*/

console.debug(GEOPOINT_ARRAYS_INVALID);
/*
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
	[90,180.0000001]
*/
```

<hr />

<img src="media/enonic.svg" alt="Enonic logo" title="Enonic logo" width="160px">

<hr />
