import io from 'socket.io-client'

const socket = io('https://b802bc28.ngrok.io')

socket.on('connect', () => {
  console.log('Connected!')
})

export default socket
