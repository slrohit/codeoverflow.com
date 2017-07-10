export default {
	getBaseUrl: () => process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'http://api.codeoverflow.xyz',
	resources:{
		compile:"/code/compile",
		run:"/code/run"
	}
}