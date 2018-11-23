import {PEGAR_BARALHOS_INICIAIS, PEGAR_PERGUNTAS_INICIAIS,
	ADICIONAR_BARALHO, ADICIONAR_PERGUNTA} from '../actions'
import {combineReducers} from 'redux'

const estadoInicialBaralhos = [
	{
		id: '1',
		nome: 'Javascript',
	},
	{
		id: '2',
		nome: 'React',
	},
	{
		id: '3',
		nome: 'React Native',
	},
]

let estadoInicialBaralhos1 = []
for(let indice= 1; indice <= 2000; indice++){
	let baralho = {
		id: indice,
		nome: indice,
	}
	estadoInicialBaralhos1.push(baralho)
}
const estadoInicialPerguntas = [
	{
		id: '1',
		baralho_id: '1',
		posicao: 0,
		pergunta: 'O que é React? Uma biblioteca de gerenciamento de interfaces',
		resposta: true
	},
	{
		id: '2',
		baralho_id: '1',
		posicao: 1,
		pergunta: 'Onde faço requisições Ajax no React? No evento componentDidMount do ciclo de vida do React',
		resposta: true
	},
]

//function baralhos(state = [], action){
function baralhos(state = estadoInicialBaralhos1, action){
	switch(action.type){
		case PEGAR_BARALHOS_INICIAIS:
			return [...state, ...action.baralhos]
		case ADICIONAR_BARALHO:
			return [...state, action.baralho]
		default:
			return state
	}
}

function perguntas(state = [], action){
	switch(action.type){
		case PEGAR_PERGUNTAS_INICIAIS:
			return [...state, ...action.perguntas]
		case ADICIONAR_PERGUNTA:
			return [...state, action.pergunta]
		default:
			return state
	}
}

export default combineReducers({
	baralhos,
	perguntas,
})
