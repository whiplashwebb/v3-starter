import { useProgrammatic } from '@oruga-ui/oruga-next';

export function successToast(message: string): void {
	const { oruga } = useProgrammatic();
	oruga.notification.open({
		message: message,
		variant: 'success',
		closable: true,
	});
}

export function errorToast(error: Error): void {
	const { oruga } = useProgrammatic();
	oruga.notification.open({
		message: error.message,
		variant: 'danger',
		closable: true,
	});
}
