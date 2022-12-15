#!/usr/bin/env python3
"""
Main module which calls the flask environment and program logic
"""
from server.app import app
from flask import Flask, jsonify
from flask_cors import CORS

server = Flask(__name__, static_folder="./client/build", static_url_path="/")
server.register_blueprint(app)
CORS(server)
server.config["CORS_HEADERS"] = "Content-Type"


@server.route("/")
def root():
    return server.send_static_file("index.html")


@server.errorhandler(404)
def error404(error):
    """error 404 handler"""
    return jsonify({"error": "Not found"}), 404


if __name__ == "__main__":
    server.run(threaded=True)
