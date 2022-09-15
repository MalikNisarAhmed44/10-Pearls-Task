class Login{
    getLogin(){
        cy.fixture('login').then((data) => {
            globalThis.data = data;
        })
       cy.get('#email').type(data.email, {force: true})
       cy.get('#passwd').type(data.pass, {force: true})
       cy.get('#SubmitLogin').click()
    
    }
}
export default Login;