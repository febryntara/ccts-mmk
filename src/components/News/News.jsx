import React from 'react'
import "./News.css"

function News() {
    return (
        <div className="m-news">
            <h4>Berita Terkini</h4>
            <div className="m-news-box">
                <div className="m-news-item ni-1">
                    <p>Rapat Kerja</p>
                </div>
                <div className="m-news-item ni-2">
                    <p>Wawancara Petinggi</p>
                </div>
                <div className="m-news-item ni-3">
                    <p>Penangkapan Bandar</p>
                </div>
                <div className="m-news-item ni-4">
                    <p>Demo Sembako</p>
                </div>
            </div>
        </div>
    )
}

export default News
