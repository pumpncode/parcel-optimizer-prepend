# parcel-optimizer-prepend

A parcel plugin to add text at the start of your bundle file.

1. Add this plugin to the optimizers in your .parcelrc file:

	```json
		{
			"extends": "@parcel/config-default",
			"optimizers": {
				"*.js": ["...", "@pumpn/parcel-optimizer-prepend"]
			}
		}
	```

	Use "..." as the first entry to not overwrite the default optimizers.

2. Add a `parcel-optimizer-prepend` option and the text you wish to prepend to your package.json:

	```json
		{
			"parcel-optimizer-prepend": "/* this will be at the top of the file */\n"
		}
	```

	You are responsible for linebreaks, this plugin won't add them for you.

3. Stay safe!
