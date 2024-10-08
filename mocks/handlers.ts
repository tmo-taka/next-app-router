import { http, delay, HttpResponse } from "msw";
import { navigations } from "./case/get_navigation"
import { pages } from "./case/get_pages"

type Navigations = {
    navigations: {
        navId: string
        link: {
            displayText: string,
            externalUrl: string
        }[]
    }[];
};

type Pages = {
    pages: {
        title: string,
        slug: string,
    }[];
};

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
    http.get<Navigations>('http://localhost:6006/api/hygraph/get_navigation', async() => {
        await delay(1000)
        return HttpResponse.json({ navigations })
    }),
    http.get<Pages>('http://localhost:6006/api/hygraph/get_all_page', async() => {
        await delay(1000)
        return HttpResponse.json({ pages })
    })
];