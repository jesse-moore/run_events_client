export interface EventInterface {
    name: string;
    heroImg: string;
    date: string;
    address: string;
    city: string;
    state: string;
}

export interface EventActionInterface {
    type: string;
    payload?: any;
}
