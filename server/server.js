import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/portfolio', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to db: ${mongoUri}`);
});

app.listen(config.port, (err) => {
	if(err) {
		console.log(err)
	}
	console.log("Server started on port %s.", config.port);
});
