"""
The flask application package.
"""

from flask import Flask
from flask_restplus import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

@api.route('/analyze')
class Analyers(Resource):
    def post(self):
        return {'status': 'sad'}

import LonlyToonsML.views
