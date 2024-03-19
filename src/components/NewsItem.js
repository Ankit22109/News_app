import React, { Component } from 'react'
import Default from './default.jpg'

class NewsItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        let { title, source, discription, img, url, date, author, mode } = this.props
        // console.log(mode)
        return (
            <div className="my-3">
                <div className={`card bg-${mode}`} style={{ width: "auto" }}>

                    <span className="badge rounded-pill bg-danger">
                        {source?source:"Unknown"}
                        {/* <span class="visually-hidden">unread messages</span> */}
                    </span>

                    <img src={img ? img : Default} className="card-img-top" alt="..." />
                    <div className={`card-body bg-${mode} text-${mode === "dark" ? "white" : "dark"}`}>
                        <h5 className="card-title">{title}</h5>
                        <p className={`card-text`}>{discription}</p>
                        <p className='card-text'><small className={`text-${mode === "dark" ? "white" : "muted"} `}>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target={"_blank"} rel="noreferrer" className={`btn btn-${mode === 'white' ? "dark" : "primary"}`}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { NewsItems }

