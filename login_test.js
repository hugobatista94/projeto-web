Feature('login');

Scenario('Login com Sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#user','94hugobatista@gmail.com');
    I.fillField('#password','123456');
    I.click('#btnLogin');
    I.waitForText('Login realizado',3);
    
}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#user','batistahugo21@gmail.com');
    I.click('#btnLogin');
    I.waitForText('Senha inválida.',3)

}).tag('ApenasE-mail');

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.',3);

}).tag('e-mailSenha');

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#password','123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.',3)

}).tag('senha');