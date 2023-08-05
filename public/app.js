import { Counter } from './counter.js'
import { service } from './service.js'
import {startWs} from './ws/ws-client.js'

const serverHost = window.location.hostname
const serverPort = window.location.port
const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
const ws = new WebSocket(`${protocol}://${serverHost}:${serverPort}`)

const wrapper = document.querySelector('.wrapper')

const counter = new Counter(wrapper, service, 'alpha')
const countber = new Counter(wrapper, service, 'beta')
const countber2 = new Counter(wrapper, service, 'gamma')
const countber3 = new Counter(wrapper, service, 'sigma')

startWs(ws)