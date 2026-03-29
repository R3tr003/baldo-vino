export type NavLink = {
	label: string;
	href: string;
};

export type NavGroup = {
	title: string;
	links: NavLink[];
};

export const overlayMenuLinks: NavLink[] = [
	{ label: 'Benvenuti', href: '/it/' },
	{ label: 'Baldo Vino', href: '/it/baldo-vino/baldo-vino/' },
	{ label: 'Bibendum', href: '/it/bibendum/bibendum/' },
	{ label: 'Cantina', href: '/it/cantina/' },
	{ label: 'Eventi', href: '/it/eventi/eventi/' },
	{ label: 'Prenota', href: '/it/#prenota' },
	{ label: 'Contatti', href: '/it/contatti/contatti/' },
];

export const quickLinks: NavLink[] = [
	{ label: 'Baldo Vino', href: '/it/baldo-vino/baldo-vino/' },
	{ label: 'Bibendum', href: '/it/bibendum/bibendum/' },
	{ label: 'Cantina', href: '/it/cantina/' },
	{ label: 'Eventi', href: '/it/eventi/eventi/' },
	{ label: 'Palazzo', href: '/it/palazzo-cancellieri/' },
];

export const navGroups: NavGroup[] = [
	{
		title: 'Baldo Vino',
		links: [
			{ label: 'Il ristorante', href: '/it/baldo-vino/baldo-vino/' },
			{ label: 'Menù', href: '/it/menu/baldo-vino/' },
			{ label: 'Cantina', href: '/it/cantina/baldo-vino/' },
			{ label: 'Gallery', href: '/it/baldo-vino/gallery/' },
		],
	},
	{
		title: 'Bibendum',
		links: [
			{ label: 'Il bistrot', href: '/it/bibendum/bibendum/' },
			{ label: 'Menù', href: '/it/menu/bibendum/' },
			{ label: 'Cantina', href: '/it/cantina/bibendum/' },
		],
	},
	{
		title: 'Informazioni',
		links: [
			{ label: 'Gift Card', href: '/it/gift-card/' },
			{ label: 'Contatti', href: '/it/contatti/contatti/' },
			{ label: 'News', href: '/it/novita/news/' },
			{ label: 'Rassegna stampa', href: '/it/novita/rassegna-stampa/' },
		],
	},
];
