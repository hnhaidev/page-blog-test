import { SITE_MAP } from './site-map';
import { EOrder } from './sort';

export const itemsBreadcrumbCreate = [
  {
    label: 'Home',
    to: SITE_MAP.HOME.path,
  },
  {
    label: 'Create',
    to: SITE_MAP.BLOGS.CREATE.path,
  },
];
export const itemsBreadcrumbEdit = [
  {
    label: 'Home',
    to: SITE_MAP.HOME.path,
  },
  {
    label: 'Edit',
    to: SITE_MAP.BLOGS.CREATE.path,
  },
];

export const itemsSort = [
  {
    label: 'Lastest',
    value: EOrder.DESC,
  },
  {
    label: 'Oldest',
    value: EOrder.ASC,
  },
];
