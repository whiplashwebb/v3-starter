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
