export default {
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.{ts,tsx}',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/dist/',
		'<rootDir>/test/'
	],
	coverageProvider: 'v8', // Changes Uncovered Lines

	// preset: 'ts-jest/presets/js-with-babel-legacy',
	// preset: 'ts-jest/presets/js-with-babel',
	// preset: 'ts-jest/presets/js-with-ts',

	// testEnvironment: 'jsdom', // Doesn't change Uncovered Lines
	testEnvironment: 'node',

	transform: {
		// '^.+\\.(js|jsx|ts|tsx)$': [
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: 'test/tsconfig.json',
			}
		]
	},
	// transformIgnorePatterns: [
	// ]
};
