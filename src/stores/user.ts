import { getApiV21Nav, HttpClient } from '@whiplashmerch/whiplash-api-client-private';
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

import { AUTH_COOKIE_NAME } from '@/constants';
import type { NavData } from '@/types';

export const useUserStore = defineStore('user',  {
	state: () => {
		return {
			token: import.meta.env.VITE_OVERRIDE_TOKEN || Cookies.get(AUTH_COOKIE_NAME) || undefined,
			baseUrl: import.meta.env.VITE_API_ROOT || 'no-base-url-found',
			navData: null as null | NavData,
			initComplete: false,
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
				this.getNav()
					.then((navData) => {
						this.navData = navData;
						resolve();
					})
					.catch(reject);
			});
		},
		init(): Promise<void> {
			return new Promise((resolve, reject) => {
				Promise.all([
					this.loadNav(),
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
