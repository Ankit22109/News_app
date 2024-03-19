import React, { component } from 'react'

export class NewsApi extends component() {

    render() {
        return {
            const NewsAPI = require('newsapi');
            const newsapi = new NewsAPI('dc10bce8653b442da5494da450b008dc');

            // To query articles:
            newsapi.articles({
                source: 'associated-press', // required
                sortBy: 'top' // optional
            }).then(articlesResponse => {
                console.log(articlesResponse);
                /*
                  {
                    status: "ok",
                    source: "associated-press",
                    sortBy: "top",
                    articles: [...]
                  }
                 */
            });

            // To query sources:
            newsapi.sources({
                category: 'technology', // optional
                language: 'en', // optional
                country: 'us' // optional
            }).then(sourcesResponse => {
                console.log(sourcesResponse);
                /*
                  {
                    status: "ok",
                    sources: [...]
                  }
                */
            });

            // For both methods you can also use traditional Node callback style:
            newsapi.articles({
                source: 'associated-press',
                sortBy: 'top'
            }, (err, articlesResponse) => {
                if (err) console.error(err);
                else console.log(articlesResponse);
            });
        }
    }
}