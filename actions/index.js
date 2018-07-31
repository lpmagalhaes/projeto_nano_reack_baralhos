export const PEGAR_BARALHOS_INICIAIS = 'PEGAR_BARALHOS_INICIAIS'
export const PEGAR_PERGUNTAS_INICIAIS = 'PEGAR_PERGUNTAS_INICIAIS'
export const ADICIONAR_BARALHO = 'ADICIONAR_BARALHO' 
export const ADICIONAR_PERGUNTA = 'ADICIONAR_PERGUNTA'

export function pegarBaralhosIniciais(baralhos){ return {
		type: PEGAR_BARALHOS_INICIAIS,
		baralhos
	}
}

export function pegarPerguntasIniciais(perguntas){
	return{
		type: PEGAR_PERGUNTAS_INICIAIS,
		perguntas
	}
}

export function adicionarBaralho(baralho){
	return{
		type: ADICIONAR_BARALHO,
		baralho
	}
}

export function adicionarPergunta(pergunta){
	return{
		type: ADICIONAR_PERGUNTA,
		pergunta
	}
}
