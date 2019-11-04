import React, { Component } from 'react'
import '../Style/Card.css'
import TextBox from './MessageBox';


class Card extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Kirigaya Kazuto",
          avatar: "https://i.stack.imgur.com/9YNc7m.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguem sabe como sai desse jogo?",
        comments: [
          {
            id: 1,
            author: {
              name: "Yuuki Asuna",
              avatar: "https://vignette.wikia.nocookie.net/swordartonline/images/0/06/Asuna_with_Yui_Biprobe.png/revision/latest?cb=20141220180221"
            },
            content: "Acho que todo mundo nessa porcaria ta muito fudido"
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Kirigaya Kazuto",
          avatar: "https://i.stack.imgur.com/9YNc7m.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguem sabe como sai desse jogo?",
        comments: [
          {
            id: 1,
            author: {
              name: "Yuuki Asuna",
              avatar: "https://vignette.wikia.nocookie.net/swordartonline/images/0/06/Asuna_with_Yui_Biprobe.png/revision/latest?cb=20141220180221"
            },
            content: "Acho que todo mundo nessa porcaria ta muito fudido"
          }
        ]
      }, {
        id: 1,
        author: {
          name: "Kirigaya Kazuto",
          avatar: "https://i.stack.imgur.com/9YNc7m.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguem sabe como sai desse jogo?",
        comments: [
          {
            id: 1,
            author: {
              name: "Yuuki Asuna",
              avatar: "https://vignette.wikia.nocookie.net/swordartonline/images/0/06/Asuna_with_Yui_Biprobe.png/revision/latest?cb=20141220180221"
            },
            content: "Acho que todo mundo nessa porcaria ta muito fudido"
          }
        ]
      }
    ]
  }; render() {
    return (
      <div id="content">
        <div id="container">
          {this.state.posts.map(res => (
            <div className="Card" key={res.id}>
              <div id="header">
                <img className="avatar"
                  src={res.author.avatar}
                  alt="avatar" />
                <p>{res.author.name} <br /><small>{res.date}</small></p>
                <br />
              </div>
              <div id="textContent">
                <p>{res.content}</p>
              </div>
              <hr className="linhConteudo" />
              <div id="bottom">
                {res.comments.map(comment => (
                  <TextBox
                    imgComment={comment.author.avatar}
                    nameComment={comment.author.name}
                    messageContent={comment.content} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    )
  }
}

export default Card