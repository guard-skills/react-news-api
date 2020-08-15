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
      news: [],
      world: [],
      nation: [],
      business: [],
      technology: [],
      entertainment: [],
      sports: [],
      science: [],
      health: [],
    }
  }

  loadArticlesTopNews=()=>{

    var url = 'https://gnews.io/api/v3/top-news?token='+token

    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
      var articles = data.articles

      this.setState({
        news: articles
      })

    })
  }

  loadArticlesWorld=()=>{

    var url = 'https://gnews.io/api/v3/topics/world?token='+token
    fetch(url)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles
        
        this.setState({
          world: articles
        })

      })
  }

  loadArticlesSports=()=>{

    var url = 'https://gnews.io/api/v3/topics/sports?token='+token
    fetch(url)
      .then(res=>res.json())
      .then((data)=>{
        var articles = data.articles
        
        this.setState({
          sports: articles
        })

      })
  }

  componentDidMount(){
    this.loadArticlesWorld()
    this.loadArticlesTopNews()
    this.loadArticlesSports()
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

            <Tabs defaultActiveKey="home" id="tabs-home" className="topic-tabs">
              <Tab eventKey="home" title="Top News">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.news.map((item)=>{

                          var itemProps = {
                            key: item.id,
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
              <Tab eventKey="world" title="World">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.world.map((item)=>{

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
              <Tab eventKey="sport" title="Sports">
                <div className="container">
                  <div className="news-cards">
                      {
                        this.state.sports.map((item)=>{

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
            </Tabs>

        </div>

    </div>
    )
  }


}

export default App;
