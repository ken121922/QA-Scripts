// wordlist.ts
export const systemWordlist: string[] = [
    "Authentication",  // A
    "Backup",          // B
    "Cache",           // C
    "Deployment",      // D
    "Endpoint",        // E
    "Firewall",        // F
    "Gateway",         // G
    "Hashing",         // H
    "Integration",     // I
    "JSON",            // J
    "Kernel",          // K
    "Logging",         // L
    "Monitoring",      // M
    "Normalization",   // N
    "Orchestration",   // O
    "Provisioning",    // P
    "Query",           // Q
    "Repository",      // R
    "Schema",          // S
    "Token",           // T
    "Update",          // U
    "Versioning",      // V
    "Webhook",         // W
    "XML",             // X
    "YAML",            // Y
    "Zero Trust"       // Z
];

export const mimeTypes = {
    txt: "text/plain",
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
}

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





export type ContinuingResources = 
    | 'Serial'
    | 'Volume'
    | 'Index';



export interface ContinuingResource {
    name: ContinuingResources;
    url?: string;
    endpoint?: any;
}

    
export const ContinuingResourcesList: ContinuingResource[] = [
    {
        name: 'Serial',
        url: 'app/continuing-resources/serials',
        endpoint: 'serials'
    },
    {
        name: 'Volume',
        url: 'app/continuing-resources/volumes',
        endpoint: 'volumes'
    },
    {
        name: 'Index',
        url: 'app/continuing-resources/indexes',
        endpoint: 'indexes'
    }
];


export type ReportsModuleName =
    | 'Patron'
    | 'Library Utilization'
    | 'Library Resources'
    | "Circulation Trends";


export interface ReportsModule {
    name: ReportsModuleName;
    url?: string;
    endpoint?: any;
}

export const ReportsModules: ReportsModule[] = [
    {
        name: 'Patron',
        url: 'app/reports/patrons',
        endpoint: 'patron'
    },
    {
        name: 'Library Utilization',
        url: 'app/reports/library-utilizations',
        endpoint: 'library-utilization'
    },
    {
        name: 'Library Resources',
        url: 'app/reports/library-resources',
        endpoint: 'library-resources'
    },
    {
        name: 'Circulation Trends',
        url: 'app/reports/circulation-trends',
        endpoint: 'circulation-trends'
    }
];


export type CirculationLogsName =
    | 'Check Out'
    | 'Check In'
    | 'Reservation';


export interface CirculationLog {
    name: CirculationLogsName;
    url?: string;
    endpoint?: any;
}

export const CirculationLogs: CirculationLog[] = [
    {
        name: 'Check Out',
        url: 'app/circulations/checkout',
        endpoint: 'checkout'
    },
    {
        name: 'Check In',
        url: 'app/circulations/checkin',
        endpoint: 'checkin'
    },
    {
        name: 'Reservation',
        url: 'app/circulations/reserved',
        endpoint: 'reserved'
    }
]