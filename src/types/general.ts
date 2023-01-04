export interface NavData {
	app : {
		orders?: NavItem[];
		inventory?: NavItem[];
		shipnotices?: NavItem[];
		returns?: NavItem[];
		batches?: NavItem[];
		manage?: NavItem[];
		support?: NavItem[];
	}
	customer?: NavItem[];
	info?: NavItem[];
	session?: NavItem[];
	search?: NavItem[];
	act_as?: NavItem[];
	warehouse?: NavItem[];
}

export interface NavItem {
	slug: string;
	display: string;
	url: string;
}
