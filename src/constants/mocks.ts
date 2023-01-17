import type {
	APIV21EntitiesCustomer,
	APIV21EntitiesUser,
	APIV21EntitiesWarehouse
} from '@whiplashmerch/whiplash-api-client-private';

import type { NavData } from '@/types';

export const navMock: NavData = {
	app: {
		orders: [
			{
				slug: 'search-orders',
				display: 'Orders',
				url: 'https://app-qa.getwhiplash.com/orders',
			},
		],
		inventory: [
			{
				slug: 'list-items',
				display: 'Browse / Search',
				url: 'https://app-qa.getwhiplash.com/items',
			},
			{
				slug: 'list-locations',
				display: 'Locations',
				url: 'https://app-qa.getwhiplash.com/locations',
			},
			{
				slug: 'list-location-transfers',
				display: 'Location Transfers',
				url: 'https://app-qa.getwhiplash.com/location_transfers',
			},
			{
				slug: 'locations-merge-locations',
				display: 'Merge Locations',
				url: 'https://app-qa.getwhiplash.com/locations/merge',
			},
			{
				slug: 'list-location-audits',
				display: 'Location Audits',
				url: 'https://app-qa.getwhiplash.com/location_audits',
			},
			{
				slug: 'scan-location',
				display: 'Select Audit Location',
				url: 'https://app-qa.getwhiplash.com/locations/scan',
			},
			{
				slug: 'create-shelf-labels',
				display: 'Create Shelf Labels',
				url: 'https://app-qa.getwhiplash.com/locations/create_shelf_labels',
			},
			{
				slug: 'shipnotice-by-item',
				display: 'Ship notice by Item',
				url: 'https://app-qa.getwhiplash.com/items/scan/inbound',
			},
			{
				slug: 'convert-to-pickable',
				display: 'Convert To Pickable',
				url: 'https://app-qa.getwhiplash.com/location_conversions/new',
			},
			{
				slug: 'assign-locations',
				display: 'Assign Locations',
				url: 'https://app-qa.getwhiplash.com/items/scan/assign_location',
			},
			{
				slug: 'upcoming-releases-beta',
				display: 'Upcoming Releases',
				url: 'https://app-qa.getwhiplash.com/releases/upcoming',
			},
		],
		shipnotices: [
			{
				slug: 'search-shipnotices',
				display: 'Ship Notices',
				url: 'https://app-qa.getwhiplash.com/shipnotices',
			},
		],
		returns: [
			{
				slug: 'search-returns',
				display: 'Returns',
				url: 'https://app-qa.getwhiplash.com/consumer_returns',
			},
		],
		batches: [
			{
				slug: 'list-order-batches',
				display: 'Batches',
				url: 'https://app-qa.getwhiplash.com/order_batches',
			},
		],
		manage: [
			{
				slug: 'carrier-accounts',
				display: 'Carrier Accounts',
				url: 'https://app-qa.getwhiplash.com/carrier_accounts',
			},
			{
				slug: 'admin-customers',
				display: 'Customers',
				url: 'https://app-qa.getwhiplash.com/customers/manage',
			},
			{
				slug: 'admin-documents',
				display: 'Files',
				url: 'https://app-qa.getwhiplash.com/documents',
			},
			{
				slug: 'incidents',
				display: 'Incidents',
				url: 'https://app-qa.getwhiplash.com/incidents',
			},
			{
				slug: 'integrations',
				display: 'Integrations',
				url: 'https://app-qa.getwhiplash.com/integrations',
			},
			{
				slug: 'manifests',
				display: 'Manifests',
				url: 'https://app-qa.getwhiplash.com/manifests',
			},
			{
				slug: 'meta-keys',
				display: 'Meta Keys',
				url: 'https://app-qa.getwhiplash.com/meta_keys',
			},
			{
				slug: 'notifications',
				display: 'Notifications',
				url: 'https://app-qa.getwhiplash.com/notification_subscriptions',
			},
			{
				slug: 'oauth-apps',
				display: 'Oauth Applications',
				url: 'https://qa.getwhiplash.com/oauth/applications',
			},
			{
				slug: 'partners',
				display: 'Partners',
				url: 'https://app-qa.getwhiplash.com/partners',
			},
			{
				slug: 'projects',
				display: 'Projects',
				url: 'https://app-qa.getwhiplash.com/projects',
			},
			{
				slug: 'reports',
				display: 'Reports',
				url: 'https://qa.getwhiplash.com/reports/overview',
			},
			{
				slug: 'rules',
				display: 'Rules',
				url: 'https://app-qa.getwhiplash.com/rules',
			},
			{
				slug: 'shipping-method-markups',
				display: 'Shipping Method Markups',
				url: 'https://app-qa.getwhiplash.com/shipping_method_markups',
			},
			{
				slug: 'shipping-methods',
				display: 'Shipping Methods',
				url: 'https://app-qa.getwhiplash.com/shipping_methods',
			},
			{
				slug: 'shops',
				display: 'Shops',
				url: 'https://qa.getwhiplash.com/shops',
			},
			{
				slug: 'templates',
				display: 'Templates',
				url: 'https://app-qa.getwhiplash.com/templates',
			},
			{
				slug: 'users',
				display: 'Users',
				url: 'https://app-qa.getwhiplash.com/users',
			},
			{
				slug: 'warehouses',
				display: 'Warehouses',
				url: 'https://app-qa.getwhiplash.com/warehouses/manage',
			},
		],
		support: [
			{
				slug: 'documentation',
				display: 'Help Center',
				url: 'https://qa.getwhiplash.com/sessions/zendesk',
			},
		],
	},
	customer: [
		{
			slug: 'preferences',
			display: 'Preferences',
			url: 'https://qa.getwhiplash.com/preferences',
		},
		{
			slug: 'integrations',
			display: 'Integrations',
			url: 'https://app-qa.getwhiplash.com/integrations',
		},
		{
			slug: 'notifications',
			display: 'Notifications',
			url: 'https://app-qa.getwhiplash.com/notification_subscriptions',
		},
		{
			slug: 'rules',
			display: 'Rules',
			url: 'https://app-qa.getwhiplash.com/rules',
		},
		{
			slug: 'documents',
			display: 'Files',
			url: 'https://app-qa.getwhiplash.com/documents',
		},
		{
			slug: 'billing-history',
			display: 'Billing History',
			url: 'https://app-qa.getwhiplash.com/statements',
		},
		{
			slug: 'customer-quotes',
			display: 'Quotes',
			url: 'https://qa.getwhiplash.com/quotes',
		},
	],
	info: [
		{
			slug: 'documentation',
			display: 'Help Center',
			url: 'https://qa.getwhiplash.com/sessions/zendesk',
		},
		{
			slug: 'contact',
			display: 'Contact',
			url: 'https://whiplash.com/contact',
		},
		{
			slug: 'updates',
			display: 'Updates',
			url: 'https://whiplash.com/updates',
		},
		{
			slug: 'appstatus',
			display: 'System Status',
			url: 'http://status.getwhiplash.com',
		},
		{
			slug: 'privacy',
			display: 'Privacy',
			url: 'https://whiplash.com/privacy',
		},
		{
			slug: 'public',
			display: 'Public Site',
			url: 'https://qa.getwhiplash.com/login',
		},
	],
	session: [
		{
			slug: 'locale',
			display: 'Language',
			url: 'https://app-qa.getwhiplash.com/language',
		},
		{
			slug: 'logout',
			display: 'Sign Out',
			url: 'https://app-qa.getwhiplash.com/logout',
		},
	],
	search: [
		{
			slug: 'search',
			display: 'Search',
			url: 'https://qa.getwhiplash.com/search',
		},
		{
			slug: 'search-all-orders',
			display: 'Orders',
			url: 'https://app-qa.getwhiplash.com/orders/searches/270578',
		},
		{
			slug: 'search-all-shipnotices',
			display: 'Shipnotices',
			url: 'https://app-qa.getwhiplash.com/shipnotices/searches/270579',
		},
		{
			slug: 'search-all-consumer_returns',
			display: 'Consumer Returns',
			url: 'https://app-qa.getwhiplash.com/consumer_returns/searches/270580',
		},
		{
			slug: 'search-all-locations',
			display: 'Locations',
			url: 'https://app-qa.getwhiplash.com/locations/searches/270581',
		},
		{
			slug: 'search-all-users',
			display: 'Users',
			url: 'https://app-qa.getwhiplash.com/users/searches/270582',
		},
		{
			slug: 'search-all-incidents',
			display: 'Incidents',
			url: 'https://app-qa.getwhiplash.com/incidents/searches/270583',
		},
		{
			slug: 'search-all-account_transactions',
			display: 'Account Transactions',
			url: 'https://app-qa.getwhiplash.com/account_transactions/searches/270584',
		},
		{
			slug: 'search-all-customers',
			display: 'Customers',
			url: 'https://app-qa.getwhiplash.com/customers/searches/270585',
		},
		{
			slug: 'search-all-partners',
			display: 'Partners',
			url: 'https://app-qa.getwhiplash.com/partners/searches/270586',
		},
		{
			slug: 'search-all-items',
			display: 'Items',
			url: 'https://app-qa.getwhiplash.com/items/searches/270587',
		},
	],
	act_as: [
		{
			slug: 'customers',
			display: 'Choose Customer',
			url: 'https://app-qa.getwhiplash.com/customers',
		},
	],
	warehouse: [
		{
			slug: 'warehouses',
			display: 'Choose Warehouse',
			url: 'https://app-qa.getwhiplash.com/warehouses',
		},
	],
};

// Removed created at. Nulls rather than undefined on partner_id, create_email, skip_confirmation, auth_token. customer_ids is really an array.
export const userMock: APIV21EntitiesUser = {
	id: 17760,
	email: 'ben.webb@ryder.com',
	sign_in_count: 3,
	created_at: '2022-11-30T17:06:18.000-05:00',
	first_name: 'Ben',
	last_name: 'Webb',
	full_name: 'Ben Webb',
	role: 'admin',
	locale: 'es',
	warehouse_id: 32,
	partner_id: undefined,
	active: true,
	// This really returns an array, exploring a what if
	customer_ids: 10658,
	create_email: undefined,
	skip_confirmation: undefined,
	auth_token: undefined,
};

// bin_cubic_volume_max should be number. null rather than undefined on number_of_groups, ups_carrier_facility, vat, single_item_batch_size, packaging_customer_id. Spec claims warehouse_features is a string when it's an array of objects. fulfillment_cost_center and parcel_cost_center are undocumented in spec.
export const warehouseMock: APIV21EntitiesWarehouse = {
	id: 32,
	name: 'Chino',
	timezone: 'Pacific Time (US & Canada)',
	timezone_raw: 'America/Los_Angeles',
	shipping_address_1: '5026 Chino Hills Parkway',
	shipping_address_2: 'Building 17',
	shipping_city: 'Chino',
	shipping_state: 'California',
	shipping_zip: '91710',
	shipping_country: 'United States',
	shipping_country_iso2: 'US',
	latitude: 33.9848,
	longitude: -117.695,
	slug: 'chino',
	default_pick_strategy: 'paper',
	bin_total_count_max: 100,
	bin_cubic_volume_max: 2454,
	number_of_groups: undefined,
	active: true,
	square_footage: 50000,
	created_at: '2017-11-29T17:10:44.000-05:00',
	updated_at: '2021-06-01T19:47:15.000-04:00',
	ups_shipper_number: '',
	email: 'COI17Whiplash_Accts@Whiplash.com',
	ups_carrier_facility: undefined,
	currency: 'USD',
	vat: undefined,
	partner_id: 4709,
	domestic_return_labels: true,
	international_return_labels: false,
	accepting_new_customers: true,
	receiving_hours: 'M-F 6:00 am to 1:00 pm ',
	pickup_hours: '',
	contact_name: 'Maria Casas',
	contact_phone: '',
	delivery_appointment_required: true,
	label_format: 'default',
	shipping_label_format: 'zpl',
	loading_dock_quantity: 3,
	receiving_special_instructions: 'Whiplash loading dock door #\'s 551,552 and 553.\r\nAlways email to schedule an appointment \r\nCOI17Whiplash_Accts@Whiplash.com\r\nCC - Maria.Casas@whiplash.com\r\n\r\n\r\nFedEx Express Pick UP - between 3-5pm\r\nFedEx G Pick UP between 7-9pm',
	single_item_batch_size: undefined,
	packaging_customer_id: undefined,
	notes: '',
	warehouse_features: undefined,
};

// null rather than undefined on auto_merge_gestation, estimated_monthly_volume, from_email, notes, account_level_name, deactivated_at, billing_company, billing_address3, billing_residential, return_zip, low_inventory_threshold, expiration_period, replenishment_min, replenishment_target
// spec claims allowed_warehouse_ids is a single number but is really an array of numbers. workday_uuid is undocumented in the spec.
export const customerMock: APIV21EntitiesCustomer = {
	id: 10658,
	name: 'Princess Polly Princess Polly Princess Polly Princess Polly',
	created_at: '2020-03-26T16:03:18.000-04:00',
	active: true,
	auto_merge_gestation: undefined,
	default_warehouse_id: 32,
	eori_number: '',
	estimated_monthly_volume: undefined,
	from_email: undefined,
	instructions: '',
	item_scanning_preference: true,
	notes: undefined,
	notify_originator: true,
	notify_originator_inventory: 1,
	originator_permissions: false,
	request_serial_numbers: false,
	ship_method_preference: 0,
	shipping_name: 'Princess Polly',
	vat_number: '',
	ein: '',
	warehouse_fallback: 0,
	payment_hold: false,
	allowed_warehouse_ids: undefined,
	account_level: 300,
	account_level_name: undefined,
	activated_at: '2020-05-04T16:22:03.000-04:00',
	deactivated_at: undefined,
	auto_merge_skus: false,
	partner_id: 10560,
	billing_email: 'hi@princesspolly.com',
	billing_contact_name: 'Darlene Yu',
	billing_company: undefined,
	billing_phone1: '323-543-7376',
	billing_phone2: '',
	billing_address1: '',
	billing_address2: '',
	billing_address3: undefined,
	billing_city: '',
	billing_state: '',
	billing_zip: '',
	billing_country: 'US',
	billing_residential: undefined,
	items_returnable: true,
	items_exchangeable: true,
	return_time_limit: 30,
	return_label_expires_in: 29,
	return_price_restricted: true,
	return_sku_match: '',
	rma_display_logo: true,
	rma_footer_content: '',
	return_name: '',
	return_company: '',
	return_email: '',
	return_phone: '',
	return_address_1: '',
	return_address_2: '',
	return_city: '',
	return_state: '',
	return_zip: undefined,
	return_country: 'US',
	supports_return_labels: true,
	full_logo_url: '',
	email_confirmation_from: 'darlene.yu@princesspolly.com',
	email_confirmation_name: 'Princess Polly',
	low_inventory_threshold: undefined,
	lot_control: false,
	expiration_period: undefined,
	ship_strategy: 1,
	items_unavailable_on_sellout: 1,
	replenishment_min: undefined,
	replenishment_target: undefined,
};
