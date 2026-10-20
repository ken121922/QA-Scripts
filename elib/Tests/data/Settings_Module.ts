export type SettingsModuleName =
    | 'Settings Library'
    | 'Settings Library Assignment'
    | 'Settings Room'
    | 'Settings Asset'
    | 'Settings Item Type'
    | 'Settings Subject Scope'
    | 'Settings Authorized Value'
    | 'Settings Framework'
    | 'Settings FAQs and Guidelines'
    | 'Settings Configuration'
    | 'Settings Logo'
    | 'Settings Holiday'
    | 'Settings Greeting';

    export interface SettingsModule {
            name: SettingsModuleName;
            url?: string;
            endpoint?: any;
    }

    export const SettingsModules: SettingsModule[] = [
            {
                name: 'Settings Library',
                url: 'app/settings/libraries',
                endpoint: 'libraries'
            },
            {
                name: 'Settings Library Assignment',
                url: 'app/settings/library-assignments',
                endpoint: 'library assignments'
            },
            {
                name: 'Settings Room',
                url: 'app/settings/rooms',
                endpoint: 'rooms'
            },
            {
                name: 'Settings Asset',
                url: 'app/settings/assets',
                endpoint: 'assets'
            },
            {
                name: 'Settings Item Type',
                url: 'app/settings/item-types',
                endpoint: 'item types'
            },
            {
                name: 'Settings Subject Scope',
                url: 'app/settings/subject-scopes',
                endpoint: 'subject scopes'
            },
            {
                name: 'Settings Authorized Value',
                url: 'app/settings/authorized-values',
                endpoint: 'authorized values'
            },
            {
                name: 'Settings Framework',
                url: 'app/settings/frameworks',
                endpoint: 'frameworks'
            },
            {
                name: 'Settings FAQs and Guidelines',
                url: 'app/settings/faq-and-guidelines',
                endpoint: 'faq and guidelines'
            },
            {
                name: 'Settings Configuration',
                url: 'app/settings/configurations',
                endpoint: 'configurations'
            },
            {
                name: 'Settings Logo',
                url: 'app/settings/logos',
                endpoint: 'logos'
            },
            {
                name: 'Settings Holiday',
                url: 'app/settings/holidays',
                endpoint: 'holidays'
            },
            {
                name: 'Settings Greeting',
                url: 'app/settings/greetings',
                endpoint: 'greetings'
            }
        ];