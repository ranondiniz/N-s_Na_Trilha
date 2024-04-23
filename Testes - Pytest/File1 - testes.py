import requests

def test_homepage_status():
    response = requests.get('http://localhost:8000/')  # Substituir pela URL da sua página inicial
    assert response.status_code == 200

def test_homepage_content():
    response = requests.get('http://localhost:8000/')  # Substituir pela URL da sua página inicial
    assert 'Bem-vindo' in response.text  # Verifique se a palavra 'Bem-vindo' está presente na página

def test_contact_form():
    data = {'name': 'John Doe', 'email': 'john@example.com', 'message': 'Test message'}
    response = requests.post('http://localhost:8000/contact', data=data)  # Substituir pela URL do seu formulário de contato
    assert response.status_code == 200
    assert 'Mensagem enviada com sucesso' in response.text  # Verifique se a mensagem de sucesso está presente

def test_login():
    data = {'username': 'user', 'password': 'password'}
    response = requests.post('http://localhost:8000/login', data=data)  # Substituir pela URL do seu formulário de login
    assert response.status_code == 200
    assert 'Login bem-sucedido' in response.text  # Verifique se a mensagem de sucesso está presente

def test_api():
    response = requests.get('http://localhost:8000/api/data')  # Substituir pela URL da sua API
    assert response.status_code == 200
    assert 'result' in response.json()  # Verifique se a chave 'result' está presente na resposta JSON
