import { getApiV21Me, getApiV21Nav, HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import type { APIV21EntitiesUser } from '@whiplashmerch/whiplash-api-client-private';
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

import { AUTH_COOKIE_NAME, navMock, userMock } from '@/constants';
import type { NavData } from '@/types';

export const useUserStore = defineStore('user',  {
	state: () => {
		return {
			token: import.meta.env.VITE_OVERRIDE_TOKEN || Cookies.get(AUTH_COOKIE_NAME) || undefined,
			baseUrl: import.meta.env.VITE_API_ROOT || 'no-base-url-found',
			navData: null as null | NavData,
			currentUser: null as null | APIV21EntitiesUser,
			initComplete: false,
			useMock: true,
		};
	},
	getters: {
		httpClient(): HttpClient {
			return new HttpClient({
				baseURL: this.baseUrl,
				headers: {
					Authorization: `Bearer ${ this.token }`,
				},
			});
		},
	},
	actions: {
		getNav(): Promise<NavData> {
			return new Promise((resolve, reject) => {
				getApiV21Nav(this.httpClient)
					.then((response) => {
						// The client has an error where it thinks this response is void
						resolve(response as unknown as NavData);
					})
					.catch(reject);
			});
		},
		loadNav(): Promise<void> {
			return new Promise((resolve, reject) => {
				if (this.useMock) {
					this.navData = navMock;
					resolve();
				} else {
					this.getNav()
						.then((navData) => {
							this.navData = navData;
							resolve();
						})
						.catch(reject);
				}
			});
		},
		getCurrentUser(): Promise<APIV21EntitiesUser> {
			return new Promise((resolve, reject) => {
				getApiV21Me(this.httpClient)
					.then((response) => {
						resolve(response);
					})
					.catch(reject);
			});
		},
		loadCurrentUser(): Promise<void> {
			return new Promise((resolve, reject) => {
				if (this.useMock) {
					this.currentUser = userMock;
					resolve();
				} else {
					this.getCurrentUser()
						.then((currentUser) => {
							this.currentUser = currentUser;
							resolve();
						})
						.catch(reject);
				}
			});
		},
		init(): Promise<void> {
			return new Promise((resolve, reject) => {
				Promise.all([
					this.loadNav(),
					this.loadCurrentUser(),
				])
					.then(() => {
						this.initComplete = true;
						resolve();
					})
					.catch(reject);
			});
		},
		logout() {

		},
	},
});
