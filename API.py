# Créé par marwa, le 29/04/2024 en Python 3.7
from flask import Flask, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

data_list = [
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/DgGe2Gi.png'],
        'name': 'Pass Classique',
        'prix_1jours': '45.00',
        'prix_2jours': '80.00',
        'prix_3jours': '115.00',
        'description': "Accédez à une journée inoubliable de musique, d'art et de divertissement avec notre Pass Classique. Vivez l'essence du festival en profitant d'une journée complète de performances en direct, d'expériences artistiques et de rencontres uniques."
    },
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/wp8PgvX.png'],
        'name': 'Pass Premium',
        'prix_1jours': '75.00',
        'prix_2jours': '135.00',
        'prix_3jours': '200.00',
        'description': "Avec ce billet vous avez accès à des zones exclusives, des services premium et des expériences uniques. Profitez de la meilleure vue sur les scènes principales, des espaces de détente VIP et des avantages exclusifs. Vivez le festival en grand avec notre Pass Premium."
    },
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/fGCM973.png'],
        'name': 'Pass VIP',
        'prix_1jours': '110.00',
        'prix_2jours': '205.00',
        'prix_3jours': '300.00',
        'description': "Plongez dans le luxe ultime du festival avec notre Pass VIP. Trois jours de plaisir illimité vous attendent, avec un accès privilégié aux meilleures zones de spectacle, aux services VIP et à des expériences exclusives. Vivez le festival dans le confort et le style avec notre Pass VIP."
    },
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/GGQifrA.png'],
        'name': 'Pass Camping',
        'prix': '29.00',
        'description': "Plongez dans le luxe ultime du festival avec notre Pass VIP. Trois jours de plaisir illimité vous attendent, avec un accès privilégié aux meilleures zones de spectacle, aux services VIP et à des expériences exclusives. Vivez le festival dans le confort et le style avec notre Pass VIP."
    },
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/e5WgexZ.png'],
        'name': 'Pass Nuit',
        'prix': '29.00',
        'jour': '1',
        'description': "Plongez dans la vie nocturne du festival avec notre Pass Nuit exclusif. Accès à partir de 20h, restez jusqu'aux dernières notes des artistes. Vivez une expérience immersive jusqu'au bout de la nuit."
    },
    {
        'id': str(uuid.uuid4())[:8],
        'image_path': ['https://i.imgur.com/9KfBklu.png'],
        'name': 'Place Parking',
        'prix': '11.80',
        'jour': '1',
        'description': "Assurez votre tranquillité avec notre solution de stationnement. Réservez votre place et profitez d'un emplacement sécurisé pour votre véhicule pendant toute la durée du festival, jusqu'à 24 heures."
    }
]

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(data_list)

@app.route('/api/data/<id>', methods=['GET'])
def get_data_by_id(id):
    for item in data_list:
        if item['id'] == id:
            return jsonify(item)
    return jsonify({'error': 'Not Found'}), 404

if __name__ == '__main__':
    app.run(debug=True)