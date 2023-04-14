import React, { useState } from "react";

const Articles = () => {
    const articlesFromApi = [
        {
          id: 1,
          title: "Dj Pierre acid house pioneer",
          content:
            "DJ Pierre, born Nathaniel Pierre Jones in Chicago, is regarded as one of the founders of Acid House. Releasing what’s considered to be the first acid-house EP recording in 1987, Acid Tracks, DJ Pierre helped house music reach higher heights by pioneering the genre. Using sounds created with the Roland 303 drum machine, acid house defined DJ Pierre’s music and propelled his longstanding career.",
          image: "https://blog.bpmmusic.io/wp-content/uploads/2019/11/DJ-Pierre.png",
          isPublished: true,
        },
        {
          id: 2,
          title: "Robert Hood minimal techno creator",
          content:
            "Born in Detroit, Robert Hood is regarded as the creator of minimal techno. The son of a jazz musician, Hood initially intended to become a trumpet player. It wasn’t until he joined the world’s well-known Underground Resistance label in 1989 that he began pioneering a new form of techno music that would resonate with a global fanbase.",
          image: "https://blog.bpmmusic.io/wp-content/uploads/2019/11/Robert-Hood.png",
          isPublished: true,
        },
        {
          id: 3,
          title: "Floating Points",
          content:
            "When talking about the world’s most iconic DJs and producers, we can’t forget English electronic musician and sound innovator,  Sam Shepherd, a.k.a Floating Points. Known for his unique musical knowledge and hybrid of sounds ranging from classical to jazz and from soul to electronic, Floating Points is co-founder of the label Eglo Records and has also earned a PhD in neuroscience from University College London.",
          image: "https://blog.bpmmusic.io/wp-content/uploads/2019/11/Floating-Points.png",
          isPublished: true,
        },
    ];
    
    return (
        <div>
            <main>
                    {articlesFromApi.map((article) => {
                        return (
                            article.isPublished &&
                            <div className="articles">
                                <h2>{article.title}</h2>
                                <img className="articleImg" src={article.image} alt={article.title} />
                                <p>{article.content}</p>
                            </div>
                        )
                    })};
            </main>
        </div>
    )
};


export default Articles;