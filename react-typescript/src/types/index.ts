export type MaxAreaData =
	| { success: true; n1: number; n2: number; w: number; h: number }
	| { success: false; error: string }
	| null;
