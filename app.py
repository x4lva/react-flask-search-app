from flask import Flask
from flask import request, jsonify
import qwery_parser

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def hello_world():
    data = request.json["search"]

    return jsonify({"habr": qwery_parser.parse_habrahabr(data),
                    "stackoverflow": qwery_parser.parse_stackoverflow(data),
                    "toaster": qwery_parser.parse_toaster(data),
                    "google": qwery_parser.parse_google(data)})


if __name__ == '__main__':
    app.run()
