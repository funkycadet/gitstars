# GitStars📊

A web service that allows you to visualize top starred projects on Github.

## Installation
To run this project, clone this repo to a folder on your local machine/development server and run this commands simultaneously:
```shell
python3 -m venv env

source env/bin/activate

pip install -r requirements.txt
```

The following is what happens when you run this command:
- A virtual environment is created. This creates an isolated environment where you can install libraries and scripts away from your default Python installation.
- The next command activates your virtual environment
- The last command installs the required libraries to run the project

Note that before you run this set of commands above, open the client directory and run
```shell
npm i
```
This would install the dependencies for the client section of the project

## Usage

To use the app, run
```shell
gunicorn --bind 0.0.0.0:5000 main:server
```
This runs the app using gunicorn, a popular Python WSGI server. Ensure you exectue this command at the root of the project.

## Contributing
Contributions are welcomed. To make a contribution, fork the repo and add your contributions on the forked repo. Then open a PR comparing the changes made from your forked repo on a new branch to the main branch.

## Related Projects
You can also check out these projects on GitHub which are similar to this project:
- https://github.com/EvanLi/Github-Ranking
- https://github.com/k0kubun/gitstar-ranking

## AUTHORS

This project was made with ♥ by:
* Vodina Efem (Frontend Developer)
* Pascal Chinedu (Backend Developer)
* Eric Alaribe (Project Manager)

## Licensing
Ths project is licensed under MIT