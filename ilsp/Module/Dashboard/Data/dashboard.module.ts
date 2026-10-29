export type DashboardName = 
    | 'Dashboard'

export interface DashboardModule {
    name: DashboardName;
    url?: string;
    endpoint?: any;
}

export const DashboardModule: DashboardModule[] = [
    {
        name: 'Dashboard',
        url: 'https://ilsp.cbsua-beta.centralizedinc.com/session/dashboard',
        endpoint: 'dashboard'
    }
];