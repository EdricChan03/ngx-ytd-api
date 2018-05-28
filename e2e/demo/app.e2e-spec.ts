import { AppPage } from './app.po';

describe('ngx-ytd-api Demo app', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should be initialised correctly', (done: DoneFn) => {
		page.navigateTo();
		page.getBody().getAttribute('class').then(result => {
			expect(result).toBe('mat-typography');
			done();
		});
	});
});
