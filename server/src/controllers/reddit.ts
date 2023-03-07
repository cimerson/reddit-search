import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Image {
    url: string,
    width: number,
    height: number,
};

interface Images {
    source: Image,
    resolutions: Image[],
    variants?: any,
    id: string
};

interface PartialReddits {
    author: string,
    title: string,
    selftext?: string,
    selftext_html?: string,
    thumbnail: string,
    preview: {
        enabled: boolean,
        images:  Images[],
    },
    url: string,
};

export const redditController = async (req: Request, res: Response) => {

    const { redditSearch } = req.body.data;

    try {
        try {
            const response: AxiosResponse = await axios.get(`https://www.reddit.com/search.json?q=${redditSearch}&sort=new`);

            const resData = response?.data;
            const data = resData?.data.children;
            const flatenData = data.map(({ data }: any) => (data));
            const formatedData = flatenData.map((
                { author, title, selftext, selftext_html, thumbnail, preview, url }: PartialReddits) => (
                { author, title, selftext, selftext_html, thumbnail, preview, url }
            ));

            return res.status(200).json({ reddits: formatedData })
        } catch (error: any) {
            if (error.response) {
                return res.status(400).send({ error: 'An unexpected error occurred' });
            }
        };
    } catch (error) {
        res.status(400).send({ error: 'Something Went Wrong, Please Try Again.' });
    };

};
