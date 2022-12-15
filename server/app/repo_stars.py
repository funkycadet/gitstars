#!/usr/bin/env python3
"""
This module contains the code for rendering the starred
projects on GitHub
"""

from server.app import app
from flask import abort, jsonify, request, make_response
import json
import requests

url = "https://api.github.com/"
header = {
    "Accept": "application/vnd.github.v3+json",
    # "Authorization": "token {}".format(ACCESS_TOKEN),
}
sort = ">10&sort=stars&per_page=100"


@app.route("/top_starred_repos", methods=["GET"], strict_slashes=True)
def get_top_starred_repos():
    """
    This endpoint returns top starred repositories
    on GitHub irrespective of language used
    """
    search_starred_repos = "{}search/repositories?q=stars:{}".format(url, sort)
    r = requests.get(search_starred_repos, headers=header)

    if r.status_code != 200:
        raise ValueError("Cannot retrieve data from requested endpoint")

    top_starred_repos_dict = r.json()
    top_starred_repos = top_starred_repos_dict["items"]

    starred_repo = []

    for starred_repos in top_starred_repos:
        repo_dict = {
            "repo_name": starred_repos["name"],
            "total_stars": starred_repos["stargazers_count"],
            "description": starred_repos["description"],
            "repo_url": starred_repos["html_url"],
        }
        starred_repo.append(repo_dict)

    return starred_repo


@app.route("/language/<language>", methods=["GET"], strict_slashes=True)
def get_stars_by_language(language):
    """This endpoint returns top starred projects by language"""

    search_language = "{}search/repositories?q=language:{}&sort=stars".format(
        url, language
    )
    r = requests.get(search_language, headers=header)

    if type(language) != str:
        return TypeError("Value entered must be a string")

    if r.status_code != 200:
        raise ValueError("Cannot retrieve data from requested endpoint")

    response_dict = r.json()
    repo_dicts = response_dict["items"]

    repo_language = []

    for repo_dict in repo_dicts:
        repo_dict_language = {
            "repo_name": repo_dict["name"],
            "total_stars": repo_dict["stargazers_count"],
            "description": repo_dict["description"],
            "repo_link": repo_dict["html_url"],
        }
        repo_language.append(repo_dict_language)

    return repo_language
