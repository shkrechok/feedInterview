import {utilService} from './util.service.js'
import CryptoJS from 'crypto-js'
export const commentService = {
    query,
    getDefaultFilterBy,
    add
}

const gComments = [
    {
      "id": "A2j9R",
      "email": "john@example.com",
      "imgUrl": "5d41402abc4b2a76b9719d911017c592",
      "message": "Great job! Keep up the good work."
    },
    {
      "id": "B5kP7",
      "email": "jane@example.com",
      "imgUrl": "7d793037a0760186574b0282f2f435e7",
      "message": "I have a question. Can you help me?"
    },
    {
      "id": "C8mQ4",
      "email": "david@example.com",
      "imgUrl": "10a54bce7c5bf6bb0c8dd32e1f448ffe",
      "message": "This is amazing. I love it!"
    },
    {
      "id": "D1nU2",
      "email": "emily@example.com",
      "imgUrl": "38c25bf77b0c39fbc9efbd4a33141b38",
      "message": "Nice work. Looking forward to more updates."
    },
    {
      "id": "E9oV5",
      "email": "michael@example.com",
      "imgUrl": "35cd169394dd79a4520e7d7dc7a70d66",
      "message": "I'm impressed. Well done!"
    },
    {
      "id": "F4pW8",
      "email": "sarah@example.com",
      "imgUrl": "b6d767d2f8ed5d21a44b0e5886680cb9",
      "message": "Could you provide more information about this?"
    },
    {
      "id": "G7qX6",
      "email": "robert@example.com",
      "imgUrl": "66e8a864f3a7649ff05c71dd8cddc4b7",
      "message": "I have a suggestion. Consider adding this feature."
    },
    {
      "id": "H3rY9",
      "email": "olivia@example.com",
      "imgUrl": "892429b6f9e3d541f2f4a492917e49aa",
      "message": "Thank you for your hard work!"
    },
    {
      "id": "I6sZ1",
      "email": "william@example.com",
      "imgUrl": "c37a69bc3311ecc98474e06e2b59c5b6",
      "message": "This is exactly what I needed. Thanks!"
    },
    {
      "id": "J9tA4",
      "email": "sophia@example.com",
      "imgUrl": "299a7173965c4e20a6f973da9e3b0e92",
      "message": "I'm having an issue. Can you assist me?"
    }
  ]

function getDefaultFilterBy(){
    return {
        txt: ''
            }
}


function query(filterBy = {txt: ''}) {
    let filteredComments =[...gComments]
    if ( filterBy.txt ) {
    const {txt} = filterBy
 filteredComments = filteredComments.filter(comment => (comment.message.toLowerCase().includes(txt.toLowerCase()) || comment.email.toLowerCase().includes(txt.toLowerCase())) )
 console.log('with - filterBy', filteredComments)
    }
    console.log(filteredComments)
    return Promise.resolve(filteredComments)
}

function add({email, message}) {
    const comment = _createComment(email, message)
    gComments.unshift(comment)
    // return Promise.resolve(comment)
}

function _createComment(email, message) {
    return {
        id: utilService.makeId(),
        email,
        message,
        imgUrl: _generateMD5Hash(email)
    }
}


function _generateMD5Hash(email) {
    const hashedEmail = CryptoJS.MD5(email.trim().toLowerCase()).toString()
    return hashedEmail
      }

