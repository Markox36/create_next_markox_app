export interface GlobalColors {
	primary: string;
	secondary: string;
	text_primary: string;
	text_secondary: string;
}

export interface GlobalFonts {
	mainFont: string;
	mainFontRegular: number;
	mainFontBold: number;
}

export interface GlobalSizes {
	mobileSmall: string;
	mobileMedium: string;
	mobileLarge: string;
	desktopSmall: string;
	desktopMedium: string;
	desktopLarge: string;
}

export interface Globals {
	fonts: GlobalFonts;
	sizes: GlobalSizes;
	colors: GlobalColors;
}
