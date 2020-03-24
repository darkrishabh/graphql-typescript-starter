// Import the dependencies for testing
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../main/server';
// Configure chai
chai.use(chaiHttp);

describe('Server', () => {
	it('Returns a 400 for GET /graphql', async () => {
		const respone = await chai.request(app).get('/graphql');
		expect(respone.status).to.equal(400);
	});
	it('Returns a 404 for GET /', async () => {
		const respone = await chai.request(app).get('/');
		expect(respone.status).to.equal(404);
	});
	it('Returns a 200 for POST /graphql', async () => {
		const respone = await chai.request(app).post('/graphql').send({
			operationName: '',
			variables: {},
			query: `{
                hello
              }`
		});
		expect(respone.status).to.equal(200);
	});
	it('Returns a 500 for POST /graphql with wrong query', async () => {
		const respone = await chai.request(app).post('/graphql');
		expect(respone.status).to.equal(500);
	});
});
