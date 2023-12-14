const app = require('../src/app'); //donde esta mi servidor
const session = require('supertest'); //libresria para testear rutas
const agent = session(app); //es la ejecucion del supertest pasandole el server

describe('Test de RUTAS', () => {

    describe('GET /rickandmorty/character/:id', () => {

        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" "image"', async () => {
            const response = (await agent.get(`/rickandmorty/character/1`)).body;
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('origin');
            expect(response).toHaveProperty('image');
        })
        it('Si hay un error responde con status: 404', async () => {
            await agent.get('/rickandmorty/character/9999999').expect(404);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it('La informacion del login es correcta', async () => {
            const res = (await agent.get(`/rickandmorty/login/?email=vero@gmail.com&password=hola1234`)).body
            expect(res.access).toEqual(true);
        })

        it('La informacion del login es incorrecta', async () => {
            const res = (await agent.get(`/rickandmorty/login/?email=dona@gmail.com&password=dona1234`)).body
            expect(res.access).toEqual(false);
        })
    })

    describe("POST /rickandmorty/fav", () => {
        const character1 = { id: 1, name: 'Nombre 1' }
        const character2 = { id: 2, name: 'Nombre 2' }

        it('Devuelve el elemento enviado por body', async () => {
            const res = (await agent.post(`/rickandmorty/fav`).send(character1)).body
            expect(res).toContainEqual(character1);
        })

        it('Devuelve el previo elemento y el actual', async () => {
            const res = (await agent.post(`/rickandmorty/fav`).send(character2)).body
            expect(res).toContainEqual(character2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = { id: 1, name: 'Nombre 1' }
        const character2 = { id: 2, name: 'Nombre 2' }
        
        it('Devuelve el arreglo correspondiente si no se elimina ningun perosonaje', async ()=>{
            const res = (await agent.delete('/rickandmorty/fav/88')).body
            expect(res).toContainEqual(character1);
            expect(res).toContainEqual(character2);
        })

        it('Elimina correctamente al personaje que se especifica por el ID', async ()=>{
            const res = (await agent.delete('/rickandmorty/fav/1')).body
            expect(res).toContainEqual(character1);
        })
    })
})
