#!/usr/bin/env python3
"""
Main module which calls the flask environment and program logic
"""
from server.app import app
from flask import Flask, jsonify

server = Flask(__name__)
server.register_blueprint(app)

@server.errorhandler(404)
def error404(error):
    """error 404 handler"""
    return jsonify({"error": "Not found"}), 404


@server.route("/")
def root():
    return "Welcome"


if __name__ == "__main__":
    server.run(threaded=True)

