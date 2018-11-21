import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const CHAVE_NOTIFICACAO = 'Baralhos:notificacao'

export function limparNotificacaoLocal(){
	return AsyncStorage.removeItem(CHAVE_NOTIFICACAO)
	.then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function criarNotificacaoLocal(){
	return {
		title: 'Estude hoje',
		body: 'Não esqueça de estudar hoje',
		ios: {
			sound: true,
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true,
		}
	}
}

export function setarNotificacaoLocal(){
	AsyncStorage.getItem(CHAVE_NOTIFICACAO)
		.then(JSON.parse)
		.then((data) => {
			if(data === null){
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({status}) => {
						if(status === 'granted'){
							Notifications.cancelAllScheduledNotificationsAsync()
							let amanha = new Date()
							amanha.setDate(amanha.getDate() + 1)
							amanha.setHours(20)
							amanha.setMinutes(0)
							Notifications.scheduleLocalNotificationAsync(
								criarNotificacaoLocal(),
								{
									time: amanha,
									repeat: 'day',
								}
							)
							AsyncStorage.setItem(CHAVE_NOTIFICACAO, JSON.stringify(true))
						}
					})
			}
		})
}
