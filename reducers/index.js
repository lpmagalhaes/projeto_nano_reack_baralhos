import {PEGAR_BARALHOS_INICIAIS, PEGAR_PERGUNTAS_INICIAIS, ADICIONAR_BARALHO, ADICIONAR_PERGUNTA} from '../actions'
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

const estadoInicialPerguntas = [
	{
		id: '1',
		baralho_id: '1',
		pergunta: 'O que é React',
		resposta: 'Uma biblioteca de gerenciamento de interfaces',
	},
	{
		id: '2',
		baralho_id: '1',
		pergunta: 'Onde faço requisições Ajax no React?',
		resposta: 'No evento componentDidMount do ciclo de vida do React',
	},
]

function baralhos(state = estadoInicialBaralhos, action){
	switch(action.type){
		case PEGAR_BARALHOS_INICIAIS:
			return [...state, ...action.baralhos]
		case ADICIONAR_BARALHO:
			return [...state, action.baralho]
		default:
			return state
	}
}

function perguntas(state = estadoInicialPerguntas, action){
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
