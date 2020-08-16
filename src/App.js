import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from './card';

var token = '21e0b8df4977ef1f7ac0ee89b1eb2347'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      worldNews: [],
      nationNews: [],
      businessNews: [],
      technologyNews: [],
      entertainmentNews: [],
      sportsNews: [],
      scienceNews: [],
      healthNews: [],
    }
  }

  loadArticlesByTerm=(term,type)=>{

    var url = 'https://gnews.io/api/v3/search?q='+term+'&token='+token
    fetch(url)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles
        
        var dataState = {}
        dataState[type+'News'] = articles

        this.setState(dataState)
      })
  }


  componentDidMount(){
    this.loadArticlesByTerm('world', 'world')
    this.loadArticlesByTerm('new zealand', 'nation')
    this.loadArticlesByTerm('business', 'business')
    this.loadArticlesByTerm('technology', 'technology')
    this.loadArticlesByTerm('entertainment', 'entertainment')
    this.loadArticlesByTerm('sports', 'sports')
    this.loadArticlesByTerm('science', 'science')
    this.loadArticlesByTerm('health', 'health')
  }

  render() {
    return (
      <div className="app">
        <header>
            <div className="header">
                <div className="navigation">
                    <div className="nav-left">
                        <div className="logo">
                            <span>akl</span>news
                        </div>
                        <div className="active">News</div>
                        <div>Careers</div>
                        <div>My feed</div>
                    </div>

                    <div className="nav-right">
                        <i className="fas fa-bell"></i>
                        <div className="messages">Messages</div>
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile" />
                    </div>
                </div>
            </div>
        </header>

        <div className="main">

            <Tabs defaultActiveKey="world" id="tabs-home" className="topic-tabs">
              <Tab eventKey="world" title="World">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.worldNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "world",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="nation" title="New Zealand">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.nationNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "nation",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="business" title="Business">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.businessNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "business",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="technology" title="Technology">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.technologyNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "technology",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="entertainment" title="Entertainment">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.entertainmentNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "entertainment",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="sport" title="Sports">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.sportsNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "sports",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="science" title="Science">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.scienceNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "science",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              <Tab eventKey="health" title="Health">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.healthNews.map((item)=>{

                          var itemProps = {
                            key: item.id,
                            category: "health",
                            ...item
                          }

                          return (
                            <Card {...itemProps}/>
                          )
                        })
                      }
                    </div>
                </div>
              </Tab>
              
            </Tabs>

        </div>

    </div>
    )
  }


}

export default App;
