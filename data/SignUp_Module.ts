export type SignUpNames = 
    | 'SignUpForm'

export interface SignUpModule {
    name: SignUpNames;
    url?: string;
    endpoint?: any;
}

export const SignUpModules: SignUpModule[] = [
    {
        name: 'SignUpForm',
        url: 'https://ilsp.cbsua-beta.centralizedinc.com/signup',
        endpoint: 'signup'
    }
];