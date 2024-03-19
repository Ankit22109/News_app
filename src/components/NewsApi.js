import React, { Component } from 'react'
import { NewsItems } from './NewsItem'
import loading_2 from './loading.svg'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

class NewsAPI extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    topic: "top-headlines",
    language: "en",
    totalResults: 0,
    mode: "dark"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    topic: PropTypes.string,
    language: PropTypes.string,
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      page: 1,
      DataisLoaded: false,
      pageSize: this.props.pageSize,
      // Error: this.error
      // mode: this.props.mode
    };

    this.condition = {
      country: this.props.country,
      topic: this.props.topic,
      language: this.props.language,
      category: this.props.category
    }

    document.title = `${this.capitalize(this.condition.category)}`
  }
  fetch_News = async () => {
    // this.setState({ DataisLoaded: false })
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/${this.condition.topic}?country=${this.condition.country}&language=${this.condition.language}&category=${this.condition.category}&apikey=dc10bce8653b442da5494da450b008dc&page=${this.state.page}&pageSize=${this.state.pageSize}`

    // Fetching data from NewsAPI
    try {
      let response = await fetch(url)
      this.props.setProgress(30)
      let data = await response.json()

      this.props.setProgress(70)
      if (this.state.articles === undefined) {
        this.setState({ Error: data.message })
      }
      // articles.concat(articles)
      this.setState({ articles: data.articles, source:data.source, DataisLoaded: true, totalResults: data.totalResults })
      this.props.setProgress(100)
    } catch (error) {
      // (error)
      return <h3>No Internet available</h3>
    }
  };


  async componentDidMount() {
    this.fetch_News()
    this.setState({ page: this.state.page + 1 })
  };

  fetchMoreData = async () => {
    // A async api call 
    this.setState({ page: this.state.page + 1 })

    let url = `https://newsapi.org/v2/${this.condition.topic}?country=${this.condition.country}&language=${this.condition.language}&category=${this.condition.category}&apikey=dc10bce8653b442da5494da450b008dc&page=${this.state.page}&pageSize=${this.state.pageSize}`


    // Fetching data from NewsAPI
    let response = await fetch(url)
    let data = await response.json()


    this.setState({ articles: this.state.articles.concat(data.articles),source:data.source, DataisLoaded: true })
    // console.log(this.state.source)
  }

  render() {
    // Destructuring
    const { articles, DataisLoaded, totalResults } = this.state
    const { category } = this.condition
    if (!DataisLoaded) return <div className='loader'>
      <img src={loading_2} className='Loading' alt="Loading" />
    </div>;

    if (articles === undefined) {
      return <h2 style={{ color: "red" }}>{this.state.Error}</h2>
    }




    return (
      <div className='container my-3'>

        <h1 align={"center"} style={{ fontSize: "44px" }} className='title'>NewsMonkey - Top {category} Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<img src={loading_2} style={{ textAlign: "center" }} className='Loading' alt='Loading...' />}>

          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItems title={element.title ? element.title : ""} source={element.source.name} discription={element.description ? element.description : ""} img={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} mode={this.props.mode} />
              </div>
            })
            };
            {/* <div className="n1p">
            <button disabled={page <= 1} className='btn btn-primary' onClick={previous_page}>&larr; Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} className='btn btn-primary' onClick={next_page}>Next &rarr;</button>
          </div> */}
          </div>
        </InfiniteScroll>
      </div>
    );

  }
}
export { NewsAPI }