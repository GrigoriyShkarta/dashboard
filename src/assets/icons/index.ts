import { FC, SVGProps } from 'react';
// @ts-ignore
import compare from './compare.svg?react';
// @ts-ignore
import employees from './employees.svg?react';
// @ts-ignore
import managers from './managers.svg?react';
// @ts-ignore
import info from './info.svg?react';

export const SvgCompareIcon: FC<SVGProps<SVGElement>> = compare;
export const SvgEmployeesIcon: FC<SVGProps<SVGElement>> = employees;
export const SvgManagersIcon: FC<SVGProps<SVGElement>> = managers;
export const SvgInfoIcon: FC<SVGProps<SVGElement>> = info;
