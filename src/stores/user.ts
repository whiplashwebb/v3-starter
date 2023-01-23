import { AUTH_COOKIE_NAME } from '@whiplashmerch/design-system';
import {
	customerMock,
	getApiV21CustomersId,
	getApiV21Me,
	getApiV21Nav, getApiV21WarehousesId,
	HttpClient, navMock, userMock, warehouseMock,
} from '@whiplashmerch/whiplash-api-client-private';
import type {
	APIV21EntitiesUser,
	APIV21EntitiesCustomer,
	APIV21EntitiesWarehouse,
	NavData,
} from '@whiplashmerch/whiplash-api-client-private';
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',  {
	state: () => {
		return {
			token: import.meta.env.VITE_OVERRIDE_TOKEN || Cookies.get(AUTH_COOKIE_NAME) || undefined,
			baseUrl: import.meta.env.VITE_API_ROOT || 'no-base-url-found',
			navData: null as null | NavData,
			currentUser: null as null | APIV21EntitiesUser,
			currentWarehouse: null as null | APIV21EntitiesWarehouse,
			currentCustomer: null as null | APIV21EntitiesCustomer,
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
					this.currentWarehouse = warehouseMock;
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
					this.currentWarehouse = warehouseMock;
					this.currentCustomer = customerMock;

					resolve();
				} else {
					this.getCurrentUser()
						.then((currentUser) => {
							this.currentUser = currentUser;

							const promises = [];

							if (currentUser.warehouse_id) {
								promises.push(this.loadWarehouse(currentUser.warehouse_id));
							}

							// Customer doesn't actually work like this, this imagines a future state of the api
							if (currentUser.customer_ids) {
								promises.push(this.loadCustomer(currentUser.customer_ids));
							}

							Promise.all(promises)
								.then(() => {
									resolve();
								})
								.catch(reject);
						})
						.catch(reject);
				}
			});
		},
		getWarehouse(warehouseId: number): Promise<APIV21EntitiesWarehouse> {
			return new Promise((resolve, reject) => {
				getApiV21WarehousesId(this.httpClient, warehouseId)
					.then((warehouse) => {
						resolve(warehouse);
					})
					.catch(reject);
			});
		},
		loadWarehouse(warehouseId: number): Promise<void> {
			return new Promise((resolve, reject) => {
				this.getWarehouse(warehouseId)
					.then((warehouse) => {
						this.currentWarehouse = warehouse;
						resolve();
					})
					.catch(reject);
			});
		},
		getCustomer(customerId: number): Promise<APIV21EntitiesCustomer> {
			return new Promise((resolve, reject) => {
				getApiV21CustomersId(this.httpClient, customerId)
					.then((customer) => {
						resolve(customer);
					})
					.catch(reject);
			});
		},
		loadCustomer(customerId: number): Promise<void> {
			return new Promise((resolve, reject) => {
				this.getCustomer(customerId)
					.then((customer) => {
						this.currentCustomer = customer;
						resolve();
					})
					.catch(reject);
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
		logout(): void {
			this.token = null;
			this.navData = null;
			this.currentUser = null;
			this.currentCustomer = null;
			this.currentWarehouse = null;
			this.initComplete = false;
		},
	},
});
