export const PEGAR_BARALHOS_INICIAIS = 'PEGAR_BARALHOS_INICIAIS'
export const PEGAR_PERGUNTAS_INICIAIS = 'PEGAR_PERGUNTAS_INICIAIS'

export function pegarBaralhosIniciais(baralhos){
	return {
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
