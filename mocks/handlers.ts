import { http, HttpResponse } from "msw";
import { navigations } from "./case/get_navigation"

type Navigations = {
    navigations: {
        navId: string
        link: {
            displayText: string,
            externalUrl: string
        }[]
    }[];
};

export const handlers = [
    http.get<Navigations>('http://localhost:6006/api/hygraph/get_navigation', () => {
        return HttpResponse.json({ navigations })
    })
];