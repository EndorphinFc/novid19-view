export interface ChinaTotal {
	heal: number;
	showlocalinfeciton: number;
	deadAdd: number;
	mediumRiskAreaNum: number;
	localConfirmAdd: number;
	confirm: number;
	dead: number;
	importedCase: number;
	localWzzAdd: number;
	nowSevere: number;
	highRiskAreaNum: number;
	localConfirm: number;
	mRiskTime: string;
	localConfirmH5: number;
	local_acc_confirm: number;
	confirmAdd: number;
	nowLocalWzz: number;
	suspect: number;
	noInfect: number;
	showLocalConfirm: number;
	noInfectH5: number;
	mtime: string;
	nowConfirm: number;
}

export interface ChinaAdd {
	heal: number;
	dead: number;
	nowConfirm: number;
	suspect: number;
	noInfect: number;
	localConfirmH5: number;
	confirm: number;
	nowSevere: number;
	importedCase: number;
	localConfirm: number;
	noInfectH5: number;
}

export interface ShowAddSwitch {
	all: boolean;
	confirm: boolean;
	nowConfirm: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	suspect: boolean;
	dead: boolean;
	heal: boolean;
	localinfeciton: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	highRiskAreaNum: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	confirm: number;
	wzz: number;
	showHeal: boolean;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	nowConfirm: number;
	showRate: boolean;
	mtime: string;
	dead: number;
	heal: number;
}

export interface Today {
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
}

export interface Total {
	showHeal: boolean;
	wzz: number;
	adcode: string;
	confirm: number;
	dead: number;
	showRate: boolean;
	mtime: string;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
	heal: number;
	highRiskAreaNum: number;
	continueDayZeroConfirmAdd: number;
}

export interface Today {
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
	confirm: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	mtime: string;
	nowConfirm: number;
	showRate: boolean;
	heal: number;
	adcode: string;
	showHeal: boolean;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	confirm: number;
	dead: number;
	continueDayZeroLocalConfirm: number;
	wzz: number;
	highRiskAreaNum: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
	adcode: string;
	date: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
	city: string;
	adcode: string;
	local_confirm_add: number;
	highRiskAreaNum: number;
	province: string;
	date: string;
	isUpdated: boolean;
	mtime: string;
	local_wzz_add: string;
	mediumRiskAreaNum: number;
	isSpecialCity: boolean;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}