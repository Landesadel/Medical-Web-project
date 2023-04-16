module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'\\.(scss)$': 'identity-obj-proxy',
	},
	transformIgnorePatterns: ['node_modules/(?!axios.*)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
		".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
	},
	testEnvironment: 'jsdom',

	testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/testSetup.js'],

};
