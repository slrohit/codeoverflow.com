export default {
	getBaseUrl: () => process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : 'https://ctyy.herokuapp.com',
	getGithubRawBaseUrl: () => 'https://raw.githubusercontent.com/slrohit/coding/master',
	resources:{
		compile:"/code/compile",
		run:"/code/run",
		getQuestion: "/questions",
		questionSuggest: "/questions/suggest",
		login:"/users/auth",
		signup:"/users/create",
		checkUsername: "/users/username"
	}
}