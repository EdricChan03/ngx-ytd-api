import { Injectable } from '@angular/core';

export interface Demo {
	name: string;
	id: string;
	icon?: string;
	svgIcon?: string;
}
export declare type Doc = Demo;
/**
 * @deprecated Use `Demo[]` instead
 */
export declare type Demos = Demo[];
/**
 * @deprecated Use `Doc[]` instead
 */
export declare type Docs = Doc[];

const DEMOS: Demo[] = [
	{
		name: 'Search',
		id: 'search',
		icon: 'search'
	},
	{
		name: 'Videos',
		id: 'videos',
		svgIcon: 'docs:video'
	}
];
const DOCS: Doc[] = [
	{
		name: 'Getting started',
		id: 'getting-started',
		icon: 'chrome_reader_mode'
	}
];
@Injectable({
	providedIn: 'root'
})
export class ListsService {
	/**
	 * Retrieves demos
	 */
	getDemos(): Demo[] {
		return DEMOS;
	}
	/**
	 * Adds a demo to the demos array
	 * @param demo The demo to add
	 */
	addDemo(demo: Demo) {
		DEMOS.push(demo);
	}

	/**
	 * Retrieves documentation
	 */
	getDocs(): Doc[] {
		return DOCS;
	}
	/**
	 * Adds a doc to the docs array
	 * @param doc The doc to add
	 */
	addDoc(doc: Doc) {
		DOCS.push(doc);
	}

}
