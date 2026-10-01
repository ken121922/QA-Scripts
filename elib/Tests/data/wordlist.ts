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


// components/ApplicationMenu.components.ts
export type ApplicationMenuName =
  | 'Circulation'
  | 'Library'
  | 'Library Assignment'
  | 'Room'
  | 'Asset'
  | 'Item Type'
  | 'Subject Scope'
  | 'Authorized Value'
  | 'Framework'
  | 'FAQs and Guideline'
  | 'Configuration'
  | 'Logo'
  | 'Holiday'
  | 'Greeting'
  | 'Dashboard'
  | 'Catalog Management'
  | 'Serial'
  | 'Volume'
  | 'Index'
  | 'Search Catalog'
  | 'View Cart'
  | 'Check Out'
  | 'Check In'
  | 'Reservation'
  | 'Patron'
  | 'Attendance'
  | 'Lost and Found'
  | 'Room Reservation'
  | 'Asset Management'
  | 'Asset Reservation'
  | 'Electronic Material'
  | 'Book Maintenance'
  | 'Reports > Patron'
  | 'Library Resource'
  | 'Library Utilization'
  | 'Circulation Trends'
  | 'Audit Log'
  | 'Complains / Reports';


export interface ModuleName {
  name: ApplicationMenuName;
  url?: string;
  endpoint?: any;
}

export const ModuleNames: ModuleName[] = [
    {
        name: 'Library',
        url: 'app/settings/libraries',
        endpoint: 'libraries'
    },
    {
        name: 'Library Assignment',
        url: 'app/settings/library-assignments',
        endpoint: 'library assignments'
    },
    {
        name: 'Room',
        url: 'app/settings/rooms',
        endpoint: 'rooms'
    },
    {
        name: 'Asset',
        url: 'app/settings/assets',
        endpoint: 'assets'
    },
    {
        name: 'Item Type',
        url: 'app/settings/item-types',
        endpoint: 'item types'
    },
    {
        name: 'Subject Scope',
        url: 'app/settings/subject-scopes',
        endpoint: 'subject scopes'
    },
    {
        name: 'Authorized Value',
        url: 'app/settings/authorized-values',
        endpoint: 'authorized values'
    },
    {
        name: 'Framework',
        url: 'app/settings/frameworks',
        endpoint: 'frameworks'
    },
    {
        name: 'FAQs and Guideline',
        url: 'app/settings/faq-and-guidelines',
        endpoint: 'faq and guidelines'
    },
    {
        name: 'Configuration',
        url: 'app/settings/configurations',
        endpoint: 'configurations'
    },
    {
        name: 'Logo',
        url: 'app/settings/logos',
        endpoint: 'logos'
    },
    {
        name: 'Holiday',
        url: 'app/settings/holidays',
        endpoint: 'holidays'
    },
    {
        name: 'Greeting',
        url: 'app/settings/greetings',
        endpoint: 'greetings'
    },
    {
        name: 'Circulation',
        url: 'app/circulations',
        endpoint: 'circulations'
    },
    {
        name: 'Dashboard',
        url: '/app',
        endpoint: 'dashboard'
    },
    {
        name: 'Catalog Management',
        url: 'app/catalog-management/catalog',
        endpoint: 'catalog management'
    },
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
    },
    {
        name: 'Search Catalog',
        url: 'app/search/result',
        endpoint: 'search catalog'
    },
    {
        name: 'Check Out',
        url: 'app/circulations/checkout',
        endpoint: 'check out'
    },
    {
        name: 'Check In',
        url: 'app/circulations/checkin',
        endpoint: 'check in'
    },
    {
        name: 'Check Out',
        url: 'app/circulations/reserved',
        endpoint: 'reserved'
    },
    {
        name: 'Patron',
        url: 'app/patrons',
        endpoint: 'patrons'
    },
    {
        name: 'Attendance',
        url: 'app/attendance',
        endpoint: 'attendance'
    },
    {
        name: 'Lost and Found',
        url: 'app/lost-and-found',
        endpoint: 'lost and found'
    },
    {
        name: 'Room Reservation',
        url: 'app/room-reservation',
        endpoint: 'room reservation'
    },
    {
        name: 'Asset Management',
        url: 'app/asset-management',
        endpoint: 'asset management'
    },
    {
        name: 'Asset Reservation',
        url: 'app/asset-reservation',
        endpoint: 'asset reservation'
    },
    {
        name: 'Electronic Material',
        url: 'app/electronic-materials',
        endpoint: 'electronic materials'
    },
    {
        name: 'Electronic Material',
        url: 'app/electronic-materials',
        endpoint: 'electronic materials'
    },
    {
        name: 'Book Maintenance',
        url: 'app/repairs',
        endpoint: 'book maintenance'
    },
    {
        name: 'Reports > Patron',
        url: 'app/reports/patron',
        endpoint: ''
    },
    {
        name: 'Library Resource',
        url: 'app/reports/library-resources',
        endpoint: ''
    },

    {
        name: 'Library Utilization',
        url: 'app/reports/library-utilizations',
        endpoint: ''
    },
    {
        name: 'Circulation Trends',
        url: 'app/reports/circulation-trends',
        endpoint: ''
    },
    {
        name: 'Audit Log',
        url: 'app/audit-logs',
        endpoint: ''
    },
    {
        name: 'Complains / Reports',
        url: 'app/complains',
        endpoint: ''
    },
    
];

