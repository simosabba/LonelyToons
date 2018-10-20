"""
The flask application package.
"""

from flask import Flask
from flask_restplus import Resource, Api

app = Flask(__name__)
api = Api(app)

@api.route('/analyze')
class HelloWorld(Resource):
    def get(self):
        return {'status': 'sad'}

import LonlyToonsML.views
