export const selectGame = (chat) => {
	return {
		type: "SELECTED_GAME",
		payload: chat
	}
};