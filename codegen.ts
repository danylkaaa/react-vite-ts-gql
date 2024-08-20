import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://beta.pokeapi.co/graphql/v1beta",
	// this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
	documents: ["src/**/*.{ts,tsx}"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
	noSilentErrors: true,
	ignoreNoDocuments: false,
};

export default config;
